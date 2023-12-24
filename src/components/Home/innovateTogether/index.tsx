import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '../../ui/button'
import { useTranslations } from 'next-intl'
import { IoLogoWhatsapp } from 'react-icons/io5'

export default function InnovateTogether() {
  const t = useTranslations('Index')

  return (
    <>
      <section className="w-full px-4 lg:px-0">
        <div className="mx-auto w-full max-w-[1280px] pt-12 lg:pt-24">
          <div className="flex w-full flex-col justify-between gap-4 md:flex-row md:items-center">
            <h2 className="text-4xl font-semibold leading-tight tracking-tighter text-verkotech-primary md:w-1/2 md:max-w-5xl md:text-5xl">
              {t('innovateTogether')}
            </h2>
            <p className="text-sm text-slate-400 md:w-1/2 md:text-base">
              {t('innovateTogetherDetails')}
            </p>
          </div>
        </div>
      </section>
      <section className="mt-[100px] flex h-[432px] w-full bg-gradient-to-r from-[#1D3557] to-[#010D20] px-4">
        <div className="mx-auto flex  w-full max-w-[1280px] flex-col items-center md:flex-row">
          <Avatar className="mt-[-72px] h-[572px] w-full rounded-[16px] md:mt-0 md:w-1/2">
            <AvatarImage
              src="/meeting-room.jpg"
              className="object-cover"
              alt="@shadcn"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="mt-12 flex w-full flex-col gap-3 pl-8 lg:w-1/2">
            <h2 className="text-5xl font-semibold">{t('getInTouch')}</h2>
            <p className="text-sm text-slate-400 md:text-base">
              {t('getInTouchDetails')}
            </p>
            <Button className="flex h-[44px] max-w-[142px] gap-2 rounded-[4px] bg-green-500 font-semibold">
              <IoLogoWhatsapp /> {t('contact')}
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
