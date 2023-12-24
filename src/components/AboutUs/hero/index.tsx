import { useTranslations } from 'next-intl'
import CardAboutUs from './CardAboutUs'

const CARD_ABOUT_DATA = [
  {
    title: 'welcome',
    description: 'welcomeDetails',
    image: '/hello.jpg',
  },
  {
    title: 'alwaysCompetitive',
    description: 'alwaysCompetitiveDetails',
    image: '/drawing.jpg',
  },
]
export default function Hero() {
  const t = useTranslations('AboutUs')

  return (
    <section className="w-full px-4">
      <div className="mx-auto flex w-full max-w-[1000px] flex-col pt-8">
        <div className="mb-2 flex w-auto self-start border border-verkotech-primary p-4">
          <h2 className="max-w-4xl text-3xl font-semibold uppercase  leading-tight tracking-tighter text-verkotech-primary md:max-w-5xl md:text-6xl">
            {t('title')}
          </h2>
        </div>
        <div className="mb-6 flex w-auto self-start border bg-slate-50 p-4">
          <h3 className=" max-w-4xl text-3xl font-semibold  leading-tight tracking-tighter text-slate-500 md:max-w-5xl md:text-4xl">
            {t('your')}{' '}
            <span className="text-verkotech-pink">{t('dedicatedPartner')}</span>{' '}
            {t('tech')}
            <span className="text-verkotech-pink"> :D</span>
          </h3>
        </div>
      </div>
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 justify-items-center gap-4 sm:grid-cols-2">
        {CARD_ABOUT_DATA.map((data, index) => (
          <CardAboutUs
            title={data.title}
            description={data.description}
            image={data.image}
            key={index}
          />
        ))}
      </div>
    </section>
  )
}
