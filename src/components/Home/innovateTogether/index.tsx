import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '../../ui/button'

export default function InnovateTogether() {
  return (
    <>
      <section className="w-full px-4 lg:px-0">
        <div className="mx-auto w-full max-w-[1280px] pt-12 lg:pt-24">
          <div className="flex w-full flex-col justify-between gap-4 md:flex-row md:items-center">
            <h2 className="text-verkotech-primary text-4xl font-semibold leading-tight tracking-tighter md:w-1/2 md:max-w-5xl md:text-5xl">
              {"Let's Innovate together?"}
            </h2>
            <p className="text-sm text-slate-400 md:w-1/2 md:text-base">
              {
                "In today's business landscape, seamless integration is paramount—blending worldwide strategies with local requirements poses a significant challenge. VERKOTECH leads this integration,supporting North American companies expanding into Latin America."
              }
            </p>
          </div>
        </div>
      </section>
      <section className="mt-[100px] flex h-[432px] w-full bg-gradient-to-r from-[#1D3557] to-[#010D20] px-4">
        <div className="mx-auto flex  w-full max-w-[1280px] flex-col items-center md:flex-row">
          <Avatar className="mt-[-72px] h-[572px] w-full rounded-[16px] md:mt-0 md:w-1/2">
            <AvatarImage
              src="/meeting-room.jpg"
              className="object-cover"
              alt="@shadcn"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="mt-12 flex w-full flex-col gap-3 pl-8 lg:w-1/2">
            <h2 className="text-5xl font-semibold">Get In Touch</h2>
            <p className="text-sm text-slate-400 md:text-base">
              Are you ready to unlock the full potential of your business
              expansion into Latin America? Look no further! VERKOTECH is your
              gateway to seamless integration and unparalleled success in this
              dynamic market.
            </p>
            <Button className="bg-verkotech-primary flex h-[44px] max-w-[142px] gap-2 rounded-[4px] font-semibold">
              Get In Touch
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
