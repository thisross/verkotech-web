import { useTranslations } from 'next-intl'

interface ICardServicesHome {
  title: string
  description: string
}

export default function CardServices({
  title,
  description,
}: ICardServicesHome) {
  const t = useTranslations('Index')

  return (
    <>
      <div className="flex min-h-[300px] w-full flex-col items-center justify-center rounded-[16px] border border-slate-300 bg-white px-8 shadow-sm">
        <div>
          <span className="rounded-[8px] border border-slate-200 p-2 font-semibold text-verkotech-primary">
            {t(title)}
          </span>

          <p className="mt-4 text-sm font-medium text-slate-400 md:text-base">
            {t(description)}
          </p>
        </div>
      </div>
    </>
  )
}
