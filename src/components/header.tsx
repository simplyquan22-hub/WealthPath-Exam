'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Button } from './ui/button';
import { LineChart, LogIn, LogOut, User } from 'lucide-react';
import { useFirebase } from '@/firebase';

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const { auth, user, isUserLoading } = useFirebase();

  const handleSignOut = async () => {
    if (!auth) return;
    try {
      await auth.signOut();
      // After sign out, redirect to a public page, like the home page.
      router.push('/');
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  // Don't render header on the main quiz page if user is not logged in.
  if (pathname === '/' && !user) {
    return null;
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block">WealthPath Exam</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          {isUserLoading ? (
             <div className="h-8 w-20 animate-pulse rounded-md bg-muted" />
          ) : user ? (
            <>
              <span className="text-sm text-muted-foreground hidden sm:inline">
                Welcome, {user.displayName || 'User'}
              </span>
               <Button asChild variant="ghost">
                <Link href="/dashboard">
                    <LineChart className="mr-2 h-4 w-4" />
                    My Progress
                </Link>
              </Button>
              <Button onClick={handleSignOut} variant="outline" size="sm">
                <LogOut className="mr-2 h-4 w-4" />
                Sign Out
              </Button>
            </>
          ) : (
            <Button asChild>
                <Link href="/login">
                    <LogIn className="mr-2 h-4 w-4" />
                    Sign In
                </Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
