import OutsourcingExperts from '@/components/Services/OutsourcingExperts'
import Hero from '@/components/Services/hero'
import JoinUs from '@/components/Services/joinUs'
import WhatWeDo from '@/components/Services/whatWeDo'
import { useTranslations } from 'next-intl'

export default function Services() {
  const t = useTranslations('Services')
  return (
    <>
      <title>Verkotech - Services</title>
      <main className="min-h-screen w-screen bg-white">
        <Hero />
        <WhatWeDo />
        <OutsourcingExperts />
        <JoinUs />
      </main>
    </>
  )
}
