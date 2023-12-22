import { useTranslations } from 'next-intl'

export default function Home() {
  const t = useTranslations('Index')
  return (
    <main className="min-h-screen w-screen bg-red-50">
      <div>
        <h1>{t('title')}</h1>
      </div>
    </main>
  )
}
