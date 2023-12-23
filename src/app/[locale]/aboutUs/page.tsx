import Commitment from '@/components/AboutUs/commitment/page'
import Hero from '@/components/AboutUs/hero'
import JoinUs from '@/components/AboutUs/joinUs'
import WeBelieve from '@/components/AboutUs/weBelieve'

export default function AboutUs() {
  return (
    <main className="flex min-h-screen w-screen flex-col bg-white">
      <Hero />
      <Commitment />
      <WeBelieve />
      <JoinUs />
    </main>
  )
}
