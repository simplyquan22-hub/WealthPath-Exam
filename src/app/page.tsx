import { Quiz } from "@/components/quiz";

export default function Home() {
  return (
    <div className="flex flex-col items-center p-4 sm:p-8 md:p-12">
      <header className="w-full max-w-4xl mb-8 flex items-center justify-center gap-4">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground font-headline">
          WealthPath’s Knowledge Check-in
        </h1>
      </header>
      <div className="w-full max-w-4xl text-center mb-8">
        <p className="text-lg text-muted-foreground">
          Test your financial literacy and pave your path to wealth.
        </p>
      </div>
      <Quiz />
    </div>
  );
}
