import CardAboutUs from './CardAboutUs'

export default function Hero() {
  return (
    <section className="w-full px-4">
      <div className="mx-auto flex w-full max-w-[1000px] flex-col pt-24">
        <div className="border-verkotech-primary mb-2 flex w-auto self-start border p-4">
          <h2 className="text- text-verkotech-primary max-w-4xl text-3xl  font-semibold leading-tight tracking-tighter md:max-w-5xl md:text-6xl">
            Verkotech
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
