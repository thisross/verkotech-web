import AboutUsHome from '@/components/Home/aboutUsHome'
import Hero from '@/components/Home/hero'
import InnovateTogether from '@/components/Home/innovateTogether'
import WhatWeDo from '@/components/Home/whatWeDo'

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
