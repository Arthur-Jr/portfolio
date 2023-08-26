import { About, Stacks } from "@/components";

export default function Home() {
  return (
    <main className="flex items-center justify-center flex-col h-full min-h-screen">
      <About />
      <Stacks />
    </main>
  )
}
