'use client'

import { useTranslations } from 'next-intl'

export default function NewLpWhyChooseUs() {
  const t = useTranslations('NewLP.whyChooseUs')

  const advantages = [
    t('advantages.chemical'),
    t('advantages.ecss'),
    t('advantages.bilingual'),
    t('advantages.ontime'),
  ]

  const benefits = [
    t('benefits.regulatory'),
    t('benefits.digital'),
    t('benefits.risk'),
    t('benefits.delivery'),
  ]

  return (
    <section className="w-full bg-[#172D5C] pt-24 text-white">
      <div className="mx-auto mb-20 max-w-5xl px-6 xl:px-0">
        {/* Title */}
        <h2 className="mb-8 font-impact text-4xl font-bold md:text-5xl lg:text-6xl">
          {t('title')}
        </h2>

        {/* Description */}
        <p className="mb-12 max-w-5xl text-lg leading-relaxed text-gray-300 md:text-xl">
          {t('description')}
        </p>

        {/* Two Column Layout */}
        <div className="flex flex-col gap-24 md:flex-row">
          {/* Advantage Column */}
          <div className="h-[400px] flex-1 border-l-4 border-pink-500 bg-[#F3F3F4]/10 p-8">
            <h3 className="mb-6 text-2xl font-bold text-pink-500">
              {t('advantageTitle')}
            </h3>
            <ul className="space-y-4">
              {advantages.map((advantage, index) => (
                <li key={index} className="flex items-center uppercase">
                  <span className="mr-3 h-1 w-1 flex-shrink-0 rounded-full bg-white"></span>
                  <span className="text-lg leading-relaxed">{advantage}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Benefits Column */}
          <div className="h-[400px] flex-1 border-l-4 border-pink-500 bg-[#F3F3F4]/10 p-8">
            <h3 className="mb-6 text-2xl font-bold text-pink-500">
              {t('benefitsTitle')}
            </h3>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center uppercase">
                  <span className="mr-3 h-1 w-1 flex-shrink-0 rounded-full bg-white"></span>
                  <span className="text-lg leading-relaxed">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* Commitment Banner */}
      <div
        style={{
          backgroundImage: 'url(/because.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className="relative flex h-[372px] items-center justify-center overflow-hidden rounded-lg bg-[#172D5C]"
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative px-8 py-16 text-center">
          <h3 className="mx-auto max-w-4xl font-impact text-2xl font-bold leading-10 tracking-normal text-white md:text-4xl lg:text-5xl">
            {t('commitmentBanner1')}
            <br />
            {t('commitmentBanner2')}
            <br />
            {t('commitmentBanner3')}
          </h3>
        </div>
      </div>
    </section>
  )
}
