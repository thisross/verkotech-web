'use client'

import { Forward } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useTranslations } from 'next-intl'
import { useRouter } from '../../../../navigation'

export default function NewLpLetsBuild() {
  const t = useTranslations('NewLP.letsBuild')
  const router = useRouter()

  const handleGetInTouch = () => {
    router.push('/services?scrollToForm=true')
  }

  return (
    <section className="w-full px-4 py-16">
      <div className="mx-auto max-w-5xl">
        <div className="rounded-2xl bg-[#172D5C] px-8 py-16 text-center text-white md:px-16">
          {/* Main Heading */}
          <h2 className="mb-8 font-glacial text-3xl leading-relaxed md:text-5xl lg:text-6xl">
            {t('mainHeading1')}
            <br />
            {t('mainHeading2')}
            <span className="text-cyan-400">{t('mainHeading3')}</span>
          </h2>

          {/* Description */}
          <div className="mx-auto mb-8 max-w-4xl space-y-6 font-glacial text-lg font-medium leading-relaxed text-zinc-300 md:text-2xl lg:mb-20 lg:text-2xl">
            <p>{t('description1')}</p>
            <p>{t('description2')}</p>
          </div>

          <div className="flex items-center justify-center">
            {/* Call to Action Button */}
            <Button
              onClick={handleGetInTouch}
              className="flex h-12 w-[216px] items-center gap-2 rounded-[6px] bg-pink-200 text-lg font-semibold text-pink-500 transition-colors hover:bg-pink-300"
            >
              {t('getInTouch')}
              <Forward size={20} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
