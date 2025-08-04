'use client'

import { Button } from '@/components/ui/button'
import { Forward } from 'lucide-react'
import { useTranslations } from 'next-intl'

export default function NewAboutUs() {
  const t = useTranslations('AboutUsPage')
  const t2 = useTranslations('NewLP.aboutUs')

  const handleGetInTouch = () => {
    window.open('https://wa.me/+13056761715', '_blank')
  }

  return (
    <section className="w-full bg-white px-4 py-16">
      <div className="mx-auto max-w-4xl">
        {/* Title */}
        <h1 className="font-impact mb-12 text-left text-4xl font-bold tracking-tight text-black md:text-5xl">
          {t('title')}
        </h1>

        {/* Content */}
        <div className="space-y-6 text-lg leading-relaxed text-gray-700">
          <p>{t('paragraph1')}</p>
          <p>{t('paragraph2')}</p>
          <p>{t('paragraph3')}</p>

          {/* Signature */}
          <p className="mt-8 text-gray-600">{t('signature')}</p>
        </div>

        {/* Call to Action Section */}
        <div className="mb-24 mt-24 space-y-6">
          <h2 className="text-2xl font-bold text-black md:text-3xl">
            {t('readyTitle')}
          </h2>
          <p className="text-xl font-bold text-black">
            {t('readyDescription')}
          </p>
        </div>
        {/* Call to Action Button */}
        <div className="flex justify-center">
          <Button
            onClick={handleGetInTouch}
            className="flex h-12 w-[216px] items-center gap-2 rounded-[6px] bg-pink-200 text-lg font-semibold text-pink-500 transition-colors hover:bg-pink-300"
          >
            {t2('getInTouch')}
            <Forward size={20} />
          </Button>
        </div>
      </div>
    </section>
  )
}
