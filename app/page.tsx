import { Hero } from "@/components/Hero";
import { NavBar } from "@/components/NavBar";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col bg-transparent">
      <NavBar />
      <Hero />
    </main>
  );
}
