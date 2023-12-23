import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export default function WeBelieve() {
  return (
    <section className="w-full px-4 lg:px-0">
      <div className="mx-auto w-full max-w-[1200px] pt-12 lg:pt-24">
        <div className="flex w-full flex-col justify-between gap-4 md:flex-row md:items-center">
          <Avatar className="h-[392px] w-full rounded-[8px] md:w-[456px]">
            <AvatarImage
              src="/webelieve.jpg"
              className="object-cover"
              alt="@webelieve"
            />
            <AvatarFallback>We Believe</AvatarFallback>
          </Avatar>
          <div className="md:w-1/2">
            <p className="max-w-md font-serif text-slate-900 md:text-xl">
              {
                ' ” We believe that by investing in the skills and knowledge of our team we can change the world.”'
              }
            </p>
            <Avatar className="mt-6 h-[60px] w-[200px] rounded-[4px] border border-slate-600 p-1">
              <AvatarImage
                src="/logomarca-pink.png"
                className="object-contain"
                alt="@shadcn"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </section>
  )
}
