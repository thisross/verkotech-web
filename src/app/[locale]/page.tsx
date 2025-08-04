import NewLpAboutUs from '@/components/new-lp/new-lp-aboutus'
import NewLpHero from '@/components/new-lp/new-lp-hero'
import NewLpLetsBuild from '@/components/new-lp/new-lp-letsbuild'
import NewLpWhatWeDo from '@/components/new-lp/new-lp-whatwedo'
import NewLpWhyChooseUs from '@/components/new-lp/new-lp-whychoseus'

export default function Home() {
  return (
    <>
      <title>Verkotech - Home</title>

      <main className="min-h-screen w-screen bg-white pt-[56px]">
        {/* <Hero />
        <WhatWeDo />
        <AboutUsHome />
        <InnovateTogether /> */}
        <NewLpHero />
        <NewLpWhatWeDo />
        <NewLpAboutUs />
        <NewLpWhyChooseUs />
        <NewLpLetsBuild />
      </main>
    </>
  )
}
