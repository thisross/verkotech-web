import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { useTranslations } from 'next-intl'

export default function OutsourcingExperts() {
  const t = useTranslations('OurServices')

  return (
    <section className="mt-12 w-full px-4">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-4 xl:flex-row">
        <div className="flex flex-col items-start">
          <div className="mb-4 flex w-auto self-start bg-verkotech-lightBlue p-4">
            <h2 className="max-w-4xl text-3xl font-semibold leading-tight tracking-tighter text-white md:max-w-5xl xl:text-6xl">
              {t('outsourcingExperts')}
            </h2>
          </div>
          <p className="mb-8 text-slate-400">
            {t('outsourcingExpertsDetails')}
          </p>

          <div className="mb-8 flex flex-col gap-3 max-xl:w-full">
            <div className="flex flex-col gap-2 xl:flex-row">
              <Badge className="text-md rounded-[4px] border border-slate-200 text-verkotech-primary">
                {t('weOurtsource')}
              </Badge>
              <Badge className="text-md rounded-[4px] bg-verkotech-primary text-white">
                Software Factory
              </Badge>
              <Badge className="text-md rounded-[4px] bg-verkotech-primary text-white">
                {'AMS (Application Management Services)'}
              </Badge>
            </div>

            <div className="flex flex-col gap-2 xl:flex-row">
              <Badge className="text-md rounded-[4px] border border-slate-200 text-verkotech-primary">
                Thomson Reuters
              </Badge>
              <Badge className="text-md rounded-[4px] bg-verkotech-primary text-white">
                {'Onesource (Global Trade)'}
              </Badge>
              <Badge className="text-md rounded-[4px] bg-verkotech-primary text-white">
                {'Taxone (Localization)'}
              </Badge>
            </div>
          </div>
        </div>
        <div>
          <Avatar className="h-[392px] w-full rounded-[8px] xl:w-[456px]">
            <AvatarImage
              src="/outsourcing.jpg"
              className="object-cover"
              alt="@outsourcing"
            />
            <AvatarFallback>We Believe</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </section>
  )
}
