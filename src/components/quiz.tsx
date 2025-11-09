"use client";

import { useState, useMemo } from 'react';
import { quizData } from '@/lib/quiz-data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle2, XCircle, Lightbulb, RotateCw } from 'lucide-react';
import { cn } from '@/lib/utils';
import Celebration from './celebration';

export function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [isFinished, setIsFinished] = useState(false);
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  
  const currentQuestion = useMemo(() => quizData[currentQuestionIndex], [currentQuestionIndex]);
  const selectedAnswer = selectedAnswers[currentQuestionIndex];

  const handleAnswerSelect = (answer: string) => {
    if (showFeedback) return;
    setSelectedAnswers(prev => ({ ...prev, [currentQuestionIndex]: answer }));
  };

  const handleSubmit = () => {
    if (!selectedAnswer) return;

    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
    if (isCorrect) {
      setScore(prev => prev + 1);
    }
    setShowFeedback(true);

    setTimeout(() => {
      if (currentQuestionIndex < quizData.length - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
      } else {
        setIsFinished(true);
      }
      setShowFeedback(false);
    }, 2000);
  };

  const handleReset = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setIsFinished(false);
    setScore(0);
    setShowFeedback(false);
  };
  
  const scorePercentage = (score / quizData.length) * 100;
  const isCurrentAnswerCorrect = showFeedback && selectedAnswer === currentQuestion.correctAnswer;

  if (isFinished) {
    return (
      <Card className="w-full max-w-2xl shadow-2xl">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold">Quiz Complete!</CardTitle>
          <CardDescription className="text-lg">You scored {score} out of {quizData.length}</CardDescription>
          <Progress value={scorePercentage} className="w-full mt-4 h-4" />
        </CardHeader>
        <CardContent>
          <h3 className="text-xl font-semibold mb-4 text-center">Review Your Answers</h3>
          <Accordion type="single" collapsible className="w-full">
            {quizData.map((question, index) => {
              const userAnswer = selectedAnswers[index];
              const isCorrect = userAnswer === question.correctAnswer;
              return (
                <AccordionItem value={`item-${index}`} key={question.id}>
                  <AccordionTrigger className="text-left hover:no-underline">
                    <div className="flex items-center gap-4 w-full">
                      {isCorrect ? <CheckCircle2 className="text-green-500 h-5 w-5 flex-shrink-0" /> : <XCircle className="text-red-500 h-5 w-5 flex-shrink-0" />}
                      <span className="flex-1">{question.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="space-y-4">
                    <p className={cn("p-2 rounded-md", isCorrect ? "bg-green-500/20" : "bg-red-500/20")}>Your answer: {userAnswer}</p>
                    {!isCorrect && <p className="p-2 rounded-md bg-green-500/20">Correct answer: {question.correctAnswer}</p>}
                    <div className="flex items-start gap-2 p-3 bg-muted/50 rounded-md">
                      <Lightbulb className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                      <p className="text-muted-foreground">{question.explanation}</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </CardContent>
        <CardFooter className="justify-center">
          <Button onClick={handleReset} size="lg">
            <RotateCw className="mr-2 h-4 w-4" /> Try Again
          </Button>
        </CardFooter>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-2xl shadow-2xl relative overflow-hidden">
      {isCurrentAnswerCorrect && <Celebration />}
      <CardHeader>
        <CardDescription>Question {currentQuestionIndex + 1} of {quizData.length}</CardDescription>
        <CardTitle className="text-2xl">{currentQuestion.question}</CardTitle>
      </CardHeader>
      <CardContent>
        <RadioGroup
          value={selectedAnswer}
          onValueChange={handleAnswerSelect}
          className="space-y-4"
          disabled={showFeedback}
        >
          {currentQuestion.options.map((option, index) => {
            const isSelected = selectedAnswer === option;
            const isCorrect = currentQuestion.correctAnswer === option;
            return (
              <div key={index} className="flex items-center">
                <RadioGroupItem
                  value={option}
                  id={`q${currentQuestion.id}-opt${index}`}
                  className={cn(
                    "peer h-6 w-6 border-2",
                    showFeedback && isSelected && !isCorrect && "bg-red-500 border-red-500 text-destructive-foreground",
                    showFeedback && isCorrect && "bg-primary border-primary text-primary-foreground",
                  )}
                />
                <Label
                  htmlFor={`q${currentQuestion.id}-opt${index}`}
                  className={cn(
                    "flex-1 ml-4 p-4 rounded-lg border-2 border-transparent transition-all cursor-pointer peer-data-[state=checked]:border-accent bg-muted/30 hover:bg-muted/70",
                    showFeedback && isSelected && !isCorrect && "bg-red-500/20 border-red-500/50 text-foreground",
                    showFeedback && isCorrect && "bg-primary/20 border-primary/50 text-foreground",
                  )}
                >
                  {option}
                </Label>
              </div>
            );
          })}
        </RadioGroup>
      </CardContent>
      <CardFooter className="justify-end">
        <Button onClick={handleSubmit} disabled={!selectedAnswer || showFeedback} size="lg">
          {currentQuestionIndex === quizData.length - 1 ? 'Finish' : 'Submit Answer'}
        </Button>
      </CardFooter>
    </Card>
  );
}
