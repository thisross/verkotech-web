import CardAboutUs from './CardAboutUs'

export default function Hero() {
  return (
    <section className="w-full px-4">
      <div className="mx-auto flex w-full max-w-[1000px] flex-col pt-8">
        <div className="mb-2 flex w-auto self-start border border-verkotech-primary p-4">
          <h2 className="text- max-w-4xl text-3xl font-semibold  leading-tight tracking-tighter text-verkotech-primary md:max-w-5xl md:text-6xl">
            VERKOTECH
          </h2>
        </div>
        <div className="mb-6 flex w-auto self-start border bg-slate-50 p-4">
          <h3 className=" max-w-4xl text-3xl font-semibold  leading-tight tracking-tighter text-slate-500 md:max-w-5xl md:text-4xl">
            Your <span className="text-verkotech-pink">dedicated partner</span>{' '}
            in technological innovation{' '}
            <span className="text-verkotech-pink"> :D</span>
          </h3>
        </div>
      </div>
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 justify-items-center gap-4 sm:grid-cols-2">
        <CardAboutUs />
        <CardAboutUs />
      </div>
    </section>
  )
}
