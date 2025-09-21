'use client'

import { Button } from '@/components/ui/button'
import { Forward } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useRouter } from '../../../navigation'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

export default function NewAboutUs() {
  const t = useTranslations('AboutUsPage')
  const t2 = useTranslations('NewLP.aboutUs')
  const t3 = useTranslations('AboutUsPage.leadership')
  const router = useRouter()

  const handleGetInTouch = () => {
    router.push('/services?scrollToForm=true')
  }

  return (
    <section className="w-full bg-white px-4 py-16">
      <div className="mx-auto max-w-4xl">
        {/* Title */}
        <h1 className="mb-12 text-left font-impact text-4xl font-bold tracking-tight text-black md:text-5xl">
          {t('title')}
        </h1>

        {/* Content */}
        <div className="space-y-6 text-lg leading-relaxed text-gray-700">
          <p>{t('paragraph1')}</p>
          <p>{t('paragraph2')}</p>
          <p>{t('paragraph3')}</p>

          {/* Signature */}
          {/* <p className="mt-8 text-gray-600">{t('signature')}</p> */}
        </div>
      </div>

      {/* Leadership Section */}
      <div className="w-full bg-white pb-8 pt-10 lg:px-4">
        <div className="mx-auto flex w-full max-w-4xl flex-col items-start gap-10 md:flex-row md:items-start">
          <div className="lg:pb-8">
            <Avatar className="h-[220px] w-[220px] overflow-hidden rounded-full md:mx-0 md:h-[260px] md:w-[260px]">
              <AvatarImage
                src="/ceo2.jpg"
                className="object-cover object-top"
                alt="CEO"
              />
              <AvatarFallback>CEO</AvatarFallback>
            </Avatar>
          </div>

          <div className="flex-1">
            <h2 className="mb-6 font-impact text-3xl font-bold tracking-wide text-[#1b2a3a] md:text-4xl">
              {t3('title')}
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-[#1b2a3a]">
              <p>{t3('p1')}</p>
            </div>
          </div>
        </div>
        <div className="mx-auto flex max-w-5xl flex-col gap-4 lg:px-16">
          <p className="text-lg leading-relaxed text-[#1b2a3a]">{t3('p2')}</p>
          <p className="text-lg leading-relaxed text-[#1b2a3a]">{t3('p3')}</p>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="mx-auto mb-12 mt-16 max-w-4xl space-y-6">
        <h2 className="text-2xl font-bold text-black md:text-3xl lg:text-center">
          {t('readyTitle')}
        </h2>
        <p className="text-xl font-bold text-black lg:text-center">
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
    </section>
  )
}
