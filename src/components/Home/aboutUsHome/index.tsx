import { Boxes } from 'lucide-react'
import { useTranslations } from 'next-intl'
import CardAboutUsHome from './CardAboutUsHome'

export default function AboutUsHome() {
  const t = useTranslations('Index')

  return (
    <>
      <section className="w-full px-4">
        <div className="mx-auto mt-[72px] w-full max-w-[1200px] lg:mt-[-76px] lg:pt-0">
          <ol className="border-verkotech-lightBlue relative xl:border-l-2">
            <li className="ml-6 hidden h-[132px] lg:block"></li>
            <li className="mb-0 ml-6">
              {/* Step */}
              <span className="border-verkotech-lightBlue absolute -left-3 hidden h-6 w-6 items-center justify-center rounded-[4px] border-2 bg-gray-50 text-slate-500 ring-inset xl:flex">
                <Boxes size={16} className="text-verkotech-lightBlue" />
              </span>
              <div className="flex flex-col items-start">
                {/* Start Step Header */}
                <div className="bg-verkotech-lightBlue mb-6 mt-[-32px] inline-block p-4">
                  <h2 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tighter text-white md:max-w-5xl md:text-6xl">
                    About Us
                  </h2>
                </div>
                <p className="mb-6 max-w-2xl text-sm text-slate-400 md:text-base">
                  Welcome to VERKOTECH, your dedicated partner in technological
                  innovation. We were born with a clear mission: to drive
                  digital transformation in established companies and startups,
                  propelling them to new levels of excellence.
                </p>
              </div>
            </li>
            <li className="ml-6 h-[24px]"></li>
          </ol>
        </div>

        <div className="mx-auto grid max-w-[1280px] grid-cols-1 justify-items-center gap-4 sm:grid-cols-2">
          <CardAboutUsHome />
          <CardAboutUsHome />
        </div>
      </section>
    </>
  )
}
