'use client'

import { Forward } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useTranslations } from 'next-intl'
import { useRouter } from '../../../../navigation'

export default function NewLpAboutUs() {
  const t = useTranslations('NewLP.aboutUs')
  const router = useRouter()

  const handleGetInTouch = () => {
    router.push('/services?scrollToForm=true')
  }

  return (
    <section className="w-full px-4 py-16">
      <div className="mx-auto max-w-5xl">
        <div className="rounded-2xl bg-[#172D5C] px-8 py-16 text-center text-white md:px-16">
          {/* Title */}
          <h2 className="mb-8 font-impact text-4xl font-bold tracking-normal md:text-6xl">
            {t('title')}
          </h2>

          {/* Main Heading */}
          <h3 className="mb-8 font-glacial text-2xl font-light leading-relaxed md:text-4xl lg:mb-16 lg:text-5xl">
            {t('mainHeading1')}
            <br />
            {t('mainHeading2')}
          </h3>

          {/* Description */}
          <div className="mx-auto mb-8 max-w-4xl space-y-6 font-glacial text-lg leading-relaxed text-zinc-300 md:text-2xl lg:mb-20 lg:text-2xl">
            <p>
              {t('description1')} {t('description2')}
            </p>
          </div>

          <div className="flex items-center justify-center">
            {/* Call to Action Button */}
            <Button
              onClick={handleGetInTouch}
              className="flex h-12 min-w-[216px] items-center gap-2 rounded-[6px] bg-pink-200 text-lg font-semibold text-pink-500 transition-colors hover:bg-pink-300"
            >
              {t('description3')}
              <Forward size={20} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
