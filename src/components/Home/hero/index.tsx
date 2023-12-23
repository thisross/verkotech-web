import { Activity, Forward } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { Button } from '../../ui/button'

export default function Hero() {
  const t = useTranslations('Index')

  return (
    <>
      <section className="w-full px-4">
        <div className="mx-auto w-full max-w-[1200px] pt-36">
          <ol className="border-verkotech-lightBlue relative border-l-2  ">
            <li className="mb-0 ml-6">
              {/* Step */}
              <span className="border-verkotech-lightBlue absolute -left-3 flex h-6 w-6 items-center justify-center rounded-[4px] border-2 bg-gray-50 text-slate-500 ring-inset">
                <Activity size={16} className="text-verkotech-lightBlue" />
              </span>
              <div className="flex flex-col">
                {/* Start Step Header */}
                <div className="border-verkotech-lightBlue mb-6 mt-[-64px] flex w-auto border p-4">
                  <h2 className="text- text-verkotech-primary max-w-4xl text-3xl  font-semibold leading-tight tracking-tighter md:max-w-5xl md:text-6xl">
                    Integrating{' '}
                    <span className="text-verkotech-pink">
                      {' '}
                      global strategies{' '}
                    </span>{' '}
                    with local cultural and legal requirements.
                  </h2>
                </div>
                <p className="mb-6 text-sm text-slate-400 md:text-base">
                  VERKOTECH is focused on supporting American and Canadian
                  companies with a presence in Latin America, helping them
                  tackle the technological challenges of integrating their
                  global processes and strategies with local business
                  requirements and legal regulations
                </p>

                <Button className="bg-verkotech-primary flex h-[44px] max-w-[142px] gap-2 rounded-[4px] font-semibold">
                  Get In Touch <Forward size={20} />{' '}
                </Button>
              </div>
            </li>
            <li className="ml-6 h-[48px]"></li>
          </ol>
        </div>
      </section>
    </>
  )
}
