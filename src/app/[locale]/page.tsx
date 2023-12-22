import Hero from '@/components/hero'
import WhatWeDo from '@/components/whatWeDo'

export default function Home() {
  return (
    <>
      <title>Verkotech - Home</title>
      <main className="min-h-screen w-screen bg-white">
        <Hero />
        <WhatWeDo />
      </main>
    </>
  )
}
