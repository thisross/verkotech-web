import { Button } from '@/components/ui/button'
import { Forward } from 'lucide-react'
import { useTranslations } from 'next-intl'

export default function JoinUs() {
  const t = useTranslations('OurServices')

  return (
    <section className="flex w-full items-center justify-center px-4 pt-20">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center">
        <span className="mb-6 rounded-[8px] bg-verkotech-primary p-1 px-2 font-semibold">
          {t('joinUs')}
        </span>
        <p className="mb-8 max-w-xl text-center text-xl text-slate-400 md:text-3xl">
          {t('joinUsDetails')}
          <span className="bg-verkotech-pink px-1 text-white">we lead it.</span>
        </p>
        <Button className="flex h-[48px] gap-2  rounded-[4px] bg-verkotech-lightBlue text-lg font-semibold text-white">
          {t('getInTouch')} <Forward size={20} />
        </Button>
      </div>
    </section>
  )
}
