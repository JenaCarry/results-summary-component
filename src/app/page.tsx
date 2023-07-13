import { Results } from "@/components/Results";
import { Summary } from "@/components/Summary";

export default function Home() {
  return (
    <main className="w-full shadow-sm sm:max-w-3xl sm:grid sm:grid-cols-2 sm:rounded-[2rem] sm:mx-2.5 sm:shadow-[4px_8px_25px_2px_rgba(46,43,233,0.1)]">
      <h1 className="sr-only">Results summary component</h1>
      <Results />
      <Summary />
    </main>
  );
}
