import Link from "next/link";

export default function Component() {
  return (
    <div className="flex flex-col min-h-dvh">
      <main className="flex-1 pt-0">
        <section className="w-full pt-12 md:pt-24 lg:pt-32 border-y">
          <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div>
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Soluções inovadoras para o seu negócio
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Explore nossos produtos e serviços personalizados para
                  impulsionar o seu sucesso.
                </p>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <Link
                  href="#"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Saiba Mais
                </Link>
              </div>
            </div>
            <img
              src="/placeholder.svg"
              width="1270"
              height="300"
              alt="Hero"
              className="mx-auto aspect-[3/1] overflow-hidden rounded-t-xl object-cover object-center"
            />
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Nossos Produtos
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore nossa linha de produtos inovadores e personalizados
                  para atender às suas necessidades.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-1">
                <img
                  src="/placeholder.svg"
                  width="400"
                  height="225"
                  alt="Produto 1"
                  className="aspect-video overflow-hidden rounded-xl object-cover"
                />
                <h3 className="text-lg font-bold">Produto 1</h3>
                <p className="text-sm text-muted-foreground">
                  Descrição do Produto 1
                </p>
              </div>
              <div className="grid gap-1">
                <img
                  src="/placeholder.svg"
                  width="400"
                  height="225"
                  alt="Produto 2"
                  className="aspect-video overflow-hidden rounded-xl object-cover"
                />
                <h3 className="text-lg font-bold">Produto 2</h3>
                <p className="text-sm text-muted-foreground">
                  Descrição do Produto 2
                </p>
              </div>
              <div className="grid gap-1">
                <img
                  src="/placeholder.svg"
                  width="400"
                  height="225"
                  alt="Produto 3"
                  className="aspect-video overflow-hidden rounded-xl object-cover"
                />
                <h3 className="text-lg font-bold">Produto 3</h3>
                <p className="text-sm text-muted-foreground">
                  Descrição do Produto 3
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Nossos Serviços
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Conheça nossa gama de serviços personalizados para atender às
                  suas necessidades.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-1">
                <img
                  src="/placeholder.svg"
                  width="400"
                  height="225"
                  alt="Serviço 1"
                  className="aspect-video overflow-hidden rounded-xl object-cover"
                />
                <h3 className="text-lg font-bold">Serviço 1</h3>
                <p className="text-sm text-muted-foreground">
                  Descrição do Serviço 1
                </p>
              </div>
              <div className="grid gap-1">
                <img
                  src="/placeholder.svg"
                  width="400"
                  height="225"
                  alt="Serviço 2"
                  className="aspect-video overflow-hidden rounded-xl object-cover"
                />
                <h3 className="text-lg font-bold">Serviço 2</h3>
                <p className="text-sm text-muted-foreground">
                  Descrição do Serviço 2
                </p>
              </div>
              <div className="grid gap-1">
                <img
                  src="/placeholder.svg"
                  width="400"
                  height="225"
                  alt="Serviço 3"
                  className="aspect-video overflow-hidden rounded-xl object-cover"
                />
                <h3 className="text-lg font-bold">Serviço 3</h3>
                <p className="text-sm text-muted-foreground">
                  Descrição do Serviço 3
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
