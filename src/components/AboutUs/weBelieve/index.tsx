import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { useTranslations } from 'next-intl'

export default function WeBelieve() {
  const t = useTranslations('AboutUs')

  return (
    <section className="w-full px-4 lg:px-0">
      <div className="mx-auto w-full max-w-[1200px] pt-12 lg:pt-24">
        <div className="flex w-full flex-col justify-between gap-4 md:flex-row md:items-center">
          <Avatar className="h-[392px] w-full rounded-[8px] md:w-[456px]">
            <AvatarImage
              src="/webelievez.jpg"
              className="object-cover"
              alt="@webelieve"
            />
            <AvatarFallback>We Believe Image</AvatarFallback>
          </Avatar>
          <div className="md:w-1/2">
            <p className="max-w-md font-serif text-slate-900 md:text-xl">
              {t('weBelieve')}
            </p>
            <Avatar className="mt-6 h-[60px] w-[200px] rounded-[4px] border border-slate-600 p-1">
              <AvatarImage
                src="/logomarca-pink.png"
                className="object-contain"
                alt="@shadcn"
              />
              <AvatarFallback>Verkotech Logomarca azul</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </section>
  )
}
