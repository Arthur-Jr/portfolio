import { About, ContactForm, Stacks } from "@/components";

export default function Home() {
  return (
    <main className="flex items-center justify-center flex-col h-full min-h-screen">
      <About />
      <Stacks />
      <ContactForm />
    </main>
  )
}
