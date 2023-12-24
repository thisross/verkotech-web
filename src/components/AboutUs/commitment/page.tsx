import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { useTranslations } from 'next-intl'
export default function Commitment() {
  const t = useTranslations('AboutUs')

  return (
    <section className="mt-12 flex w-full bg-gradient-to-r from-[#1D3557] to-[#010D20] px-4 py-8 md:mt-[100px] lg:h-[432px]">
      <div className="mx-auto flex  w-full max-w-[1280px] flex-col items-center md:flex-row">
        <div className="mt-12 flex w-full flex-col items-start gap-3 pl-8 lg:w-1/2">
          <div className="bg-white p-2 text-verkotech-primary">
            <h2 className="text-4xl font-semibold">{t('commitment')}</h2>
          </div>
          <p className="max-w-lg text-sm text-white md:text-base">
            {t('commitmentDetails')}
          </p>
        </div>
        <Avatar className="mt-[32px] h-[572px] w-full rounded-[16px] md:mt-0 md:w-1/2">
          <AvatarImage
            src="/commitment.jpg"
            className=" border-none border-purple-200 object-cover"
            alt="@shadcn"
          />
          <AvatarFallback>Commitment</AvatarFallback>
        </Avatar>
      </div>
    </section>
  )
}
