import AboutUsHome from '@/components/aboutUsHome'
import Hero from '@/components/hero'
import InnovateTogether from '@/components/innovateTogether'
import WhatWeDo from '@/components/whatWeDo'

export default function Home() {
  return (
    <>
      <title>Verkotech - Home</title>
      <main className="min-h-screen w-screen bg-white">
        <Hero />
        <WhatWeDo />
        <AboutUsHome />
        <InnovateTogether />
      </main>
    </>
  )
}
