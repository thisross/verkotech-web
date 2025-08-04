'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'

export default function NewLpHero() {
  const t = useTranslations('NewLP.hero')
  return (
    <section className="relative flex h-[50vh] w-full items-center justify-center lg:h-[70vh]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/herobg.jpg"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 text-center text-white">
        {/* Brand Title with Brain Icon */}
        <div className="flex items-center justify-center gap-2 lg:mb-8 lg:gap-4">
          <h3 className="font-canter text-4xl font-bold md:text-5xl">
            {t('weAre')}
          </h3>
          <Image
            src="/brainn.svg"
            alt="Brain Icon"
            width={60}
            height={60}
            className="text-cyan-400"
          />
          <h3 className="font-glacial -translate-y-1 text-4xl font-bold md:text-5xl">
            {t('verkotech')}
          </h3>
        </div>

        {/* Main Heading */}
        <h2 className="font-impact mb-0 text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-6xl">
          {t('mainTitle1')}
        </h2>
        <h2 className="font-impact mb-4 text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:mb-8 lg:text-6xl">
          {t('mainTitle2')}
        </h2>

        {/* Description */}
        <p className="font-glacial mx-auto max-w-[600px] text-lg leading-relaxed opacity-90 md:text-xl lg:text-2xl">
          {t('description')}
        </p>
      </div>
    </section>
  )
}
