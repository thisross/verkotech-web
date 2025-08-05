'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'

export default function NewLpHero() {
  const t = useTranslations('NewLP.hero')
  return (
    <section className="relative flex h-[50vh] w-full items-center justify-center lg:h-[80vh]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/herobg.jpg"
          alt="Hero Background"
          fill
          className="object-cover object-top"
          priority
        />
      </div>

      {/* Background Overlay */}
      <div className="absolute inset-0 z-10 bg-blue-950/20" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 text-center text-white">
        {/* Brand Title with Brain Icon */}
        <div className="flex items-center justify-center gap-2 lg:gap-4">
          <h3 className="font-canter text-5xl font-bold md:text-8xl">
            {t('weAre')}
          </h3>
          <div className="relative h-16 w-16 -translate-y-1 lg:h-32 lg:w-32">
            <Image
              src="/brainn.svg"
              alt="Brain Icon"
              fill
              className="text-cyan-400"
            />
          </div>
          <h3 className="-translate-y-1.5 font-glacial text-5xl font-bold md:text-8xl lg:-translate-y-3">
            {t('verkotech')}
          </h3>
        </div>

        {/* Main Heading */}
        <h2 className="mb-0 font-impact text-2xl font-bold leading-tight tracking-tight text-pink-500 md:text-4xl lg:text-5xl">
          {t('mainTitle1')}
        </h2>
        <h2 className="mb-4 font-impact text-2xl font-bold leading-tight tracking-tight text-pink-500 md:text-4xl lg:mb-6 lg:text-5xl">
          {t('mainTitle2')}
        </h2>

        {/* Description */}
        <p className="mx-auto max-w-[300px] font-glacial text-base font-medium leading-relaxed opacity-90 md:max-w-[500px] md:text-xl lg:text-2xl">
          {t('description')}
        </p>
      </div>
    </section>
  )
}
