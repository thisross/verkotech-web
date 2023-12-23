import { Button } from '@/components/ui/button'
import { Forward } from 'lucide-react'

export default function JoinUs() {
  return (
    <section className="flex w-full items-center justify-center px-4 pt-20">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center">
        <span className="bg-verkotech-primary mb-6 rounded-[8px] p-1 px-2 font-semibold">
          Join Us
        </span>
        <p className="mb-8 max-w-xl text-center text-xl text-slate-400 md:text-3xl">
          {
            " Join us on this exciting journey towards the digital future. At VERKOTECH, we don't just embrace change,"
          }
          <span className="bg-verkotech-pink px-1 text-white">we lead it.</span>
        </p>
        <Button className="bg-verkotech-lightBlue flex h-[48px]  gap-2 rounded-[4px] text-lg font-semibold text-white">
          Get In Touch <Forward size={20} />
        </Button>
      </div>
    </section>
  )
}
