import Hero from '@/components/hero'
import { useTranslations } from 'next-intl'

export default function Home() {
  return (
    <>
      <title>Verkotech - Home</title>
      <main className="min-h-screen w-screen bg-white">
        <Hero />
      </main>
    </>
  )
}
