import { Activity, Forward } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { Button } from '../../ui/button'
import { Link } from '../../../../navigation'

export default function Hero() {
  const t = useTranslations('Index')

  return (
    <>
      <section className="w-full px-4">
        <div className="mx-auto w-full max-w-[1200px] pt-24">
          <ol className="relative border-l-2 border-verkotech-lightBlue  ">
            <li className="mb-0 ml-6">
              {/* Step */}
              <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-[4px] border-2 border-verkotech-lightBlue bg-gray-50 text-slate-500 ring-inset">
                <Activity size={16} className="text-verkotech-lightBlue" />
              </span>
              <div className="flex flex-col items-start">
                {/* Start Step Header */}
                <div className="mb-6 mt-[-64px] flex w-auto border border-verkotech-lightBlue p-4">
                  <h2 className="text- max-w-4xl text-3xl font-semibold  leading-tight tracking-tighter text-verkotech-primary md:max-w-5xl md:text-6xl">
                    {t('integrating')}{' '}
                    <span className="text-verkotech-pink">
                      {t('globalStrategies')}
                    </span>
                    {t('localCultural')}
                  </h2>
                </div>
                <p className="mb-6 text-sm text-slate-400 md:text-base">
                  {t('p')}
                </p>

                <Link href={'https://wa.me/+13056761715'} target="_blank">
                  <Button className="flex h-[44px] max-w-[142px] gap-2 rounded-[4px] bg-verkotech-primary font-semibold">
                    {t('getInTouch')}
                    <Forward size={20} />
                  </Button>
                </Link>
              </div>
            </li>
            <li className="ml-6 h-[48px]"></li>
          </ol>
        </div>
      </section>
    </>
  )
}
