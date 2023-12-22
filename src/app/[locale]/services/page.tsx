import { useTranslations } from 'next-intl'

export default function Services() {
  const t = useTranslations('Services')
  return (
    <>
      <title>Verkotech - Services</title>
      <main className="min-h-screen w-screen bg-white"></main>
    </>
  )
}
