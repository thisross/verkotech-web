import { useTranslations } from 'next-intl'

export default function Hero() {
  const t = useTranslations('OurServices')

  return (
    <section className="w-full px-4">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col pt-8">
        <div className="mb-6 flex w-auto self-center bg-verkotech-pink p-4 ">
          <h2 className="text- max-w-4xl text-3xl font-semibold  leading-tight tracking-tighter text-white md:max-w-5xl md:text-6xl">
            {t('title')}
          </h2>
        </div>
        <p className="md:text2xl mb-8 max-w-lg self-center text-center text-xl text-slate-400">
          {t('description')}
          <span className="bg-verkotech-primary px-1 text-white">
            {t('description2')}
          </span>
        </p>
      </div>
    </section>
  )
}
