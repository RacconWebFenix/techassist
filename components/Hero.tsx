/**
 * v0 by Vercel.
 * @see https://v0.dev/t/HBZzzCfMZEo
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"

export default function Component() {
  return (
    <section className="w-full h-screen flex flex-col items-center justify-center bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center">
      <div className="container px-4 md:px-6 flex flex-col items-center justify-center text-center space-y-6">
        <div className="max-w-3xl space-y-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Transforme sua empresa com nossa plataforma de tecnologia
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl">
            Nosso sistema avançado de gerenciamento de infraestrutura e automação de processos permite que sua equipe se
            concentre no desenvolvimento de recursos inovadores, enquanto nós cuidamos da parte técnica.
          </p>
        </div>
        <Link
          href="#"
          className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          prefetch={false}
        >
          Experimente Agora
        </Link>
      </div>
    </section>
  )
}