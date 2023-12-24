import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { useTranslations } from 'next-intl'

interface ICardAboutUsHome {
  title: string
  description: string
  image: string
}

export default function CardAboutUsHome({
  title,
  description,
  image,
}: ICardAboutUsHome) {
  const t = useTranslations('Index')

  return (
    <>
      <div className="flex h-auto w-full flex-col items-center justify-center rounded-[16px] border border-slate-300 bg-white px-8 py-8 shadow-sm">
        <div className="flex flex-col items-start">
          <span className="rounded-[8px]  border border-slate-200 p-2 font-semibold text-verkotech-primary">
            {t(title)}
          </span>

          <p className="mb-4 mt-4 text-sm font-medium text-slate-400 md:text-base">
            {t(description)}
          </p>
          <Avatar className="h-[200px] w-full rounded-[16px] lg:h-[372px]">
            <AvatarImage src={image} className="object-cover" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </>
  )
}
