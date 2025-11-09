'use client';

import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from 'recharts';
import { Badge } from '@/components/ui/badge';
import { format, parseISO } from 'date-fns';
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, LogOut } from 'lucide-react';
import { useFirebase } from '@/firebase';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';

interface QuizHistoryEntry {
  id: string;
  score: number;
  totalQuestions: number;
  dateTaken: string; // Stored as ISO string
}

export default function DashboardPage() {
  const [quizHistory, setQuizHistory] = useState<QuizHistoryEntry[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const { auth, firestore, user, isUserLoading } = useFirebase();

  useEffect(() => {
    if (!isUserLoading && !user) {
      // If loading is finished and there's no user, redirect to login
      router.push('/login?redirect=/dashboard');
    }
  }, [user, isUserLoading, router]);

  useEffect(() => {
    const fetchHistory = async () => {
      if (!firestore || !user) return;
      try {
        setIsLoading(true);
        const historyCollection = collection(firestore, `users/${user.uid}/quizHistory`);
        const q = query(historyCollection, orderBy('dateTaken', 'asc'));
        const querySnapshot = await getDocs(q);
        const history = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as QuizHistoryEntry));
        setQuizHistory(history);
      } catch (error) {
        console.error("Could not fetch quiz history from Firestore", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (user) {
      fetchHistory();
    }
  }, [firestore, user]);

  const chartData = useMemo(() => {
    return quizHistory.map(entry => ({
      date: format(parseISO(entry.dateTaken), 'MMM d'),
      score: (entry.score / entry.totalQuestions) * 100,
    }));
  }, [quizHistory]);
  
  const handleSignOut = async () => {
    if (!auth) return;
    try {
      await auth.signOut();
      router.push('/login');
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  if (isLoading || isUserLoading) {
    return (
      <div className="container mx-auto py-8 px-4 md:px-8">
        <div className="space-y-6">
          <Skeleton className="h-8 w-1/4" />
          <Skeleton className="h-[350px] w-full" />
          <Skeleton className="h-40 w-full" />
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8 px-4 md:px-8">
      <div className="flex items-center justify-between mb-6">
        <div>
            <h1 className="text-3xl font-bold">Your Progress</h1>
            <p className="text-muted-foreground">Welcome back, {user?.displayName || 'learner'}!</p>
        </div>
        <div className="flex items-center gap-2">
            <Button asChild variant="outline">
               <Link href="/"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Quiz</Link>
            </Button>
            <Button onClick={handleSignOut} variant="destructive">
               <LogOut className="mr-2 h-4 w-4" /> Sign Out
            </Button>
        </div>
      </div>


      {quizHistory.length === 0 ? (
        <Card>
          <CardContent className="h-[500px] flex flex-col items-center justify-center text-center">
            <h2 className="text-2xl font-semibold">No Quizzes Taken Yet</h2>
            <p className="mt-2 text-muted-foreground">
              Complete a quiz to start tracking your progress!
            </p>
          </CardContent>
        </Card>
      ) : (
        <>
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Quiz Score Over Time</CardTitle>
              <CardDescription>Track your progress across all your quiz attempts.</CardDescription>
            </CardHeader>
            <CardContent>
              {chartData.length > 1 ? (
                <div className="h-[350px]">
                  <ChartContainer config={{}} className="w-full h-full">
                    <AreaChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                      <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="hsl(var(--muted-foreground) / 0.2)" />
                      <XAxis dataKey="date" tickLine={false} axisLine={false} tickMargin={8} />
                      <YAxis unit="%" tickLine={false} axisLine={false} tickMargin={8} />
                      <ChartTooltip
                        cursor={false}
                        content={<ChartTooltipContent
                            formatter={(value) => `${Math.round(Number(value))}%`}
                            indicator="line"
                          />}
                      />
                      <defs>
                        <linearGradient id="fillScore" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0.1}/>
                        </linearGradient>
                      </defs>
                      <Area
                        type="monotone"
                        dataKey="score"
                        stroke="hsl(var(--primary))"
                        strokeWidth={2}
                        fillOpacity={1}
                        fill="url(#fillScore)"
                      />
                    </AreaChart>
                  </ChartContainer>
                </div>
              ) : (
                <div className="h-[350px] flex items-center justify-center text-center text-muted-foreground">
                  <p>Complete at least two quizzes to see your progress chart.</p>
                </div>
              )}
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Quiz History</CardTitle>
              <CardDescription>A detailed log of all your past attempts.</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Score</TableHead>
                    <TableHead className="text-right">Percentage</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[...quizHistory].sort((a, b) => new Date(b.dateTaken).getTime() - new Date(a.dateTaken).getTime()).map(entry => (
                      <TableRow key={entry.id}>
                        <TableCell>{format(parseISO(entry.dateTaken), 'MMMM d, yyyy')}</TableCell>
                        <TableCell>{entry.score} / {entry.totalQuestions}</TableCell>
                        <TableCell className="text-right">
                           <Badge
                            className={cn(
                              {
                                'border-transparent bg-green-500/20 text-green-700 dark:text-green-400': (entry.score / entry.totalQuestions) * 100 >= 80,
                                'border-transparent bg-yellow-500/20 text-yellow-700 dark:text-yellow-400': (entry.score / entry.totalQuestions) * 100 >= 50 && (entry.score / entry.totalQuestions) * 100 < 80,
                                'border-transparent bg-red-500/20 text-red-700 dark:text-red-400': (entry.score / entry.totalQuestions) * 100 < 50
                              }
                            )}
                            variant="outline"
                          >
                            {Math.round((entry.score / entry.totalQuestions) * 100)}%
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );
}
