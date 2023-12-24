export default function Hero() {
  return (
    <section className="w-full px-4">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col pt-8">
        <div className="mb-6 flex w-auto self-center bg-verkotech-pink p-4 ">
          <h2 className="text- max-w-4xl text-3xl font-semibold  leading-tight tracking-tighter text-white md:max-w-5xl md:text-6xl">
            Our Services
          </h2>
        </div>
        <p className="md:text2xl mb-8 max-w-lg self-center text-center text-xl text-slate-400">
          {
            'We were born with a clear mission: to drive digital transformation in established companies and startups, propelling them to '
          }
          <span className="bg-verkotech-primary px-1 text-white">
            new levels of excellence.
          </span>
        </p>
      </div>
    </section>
  )
}
