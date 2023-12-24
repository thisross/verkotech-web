import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export default function CardAboutUs() {
  return (
    <>
      <div className="flex h-auto w-full flex-col items-center justify-center overflow-hidden rounded-[16px] border border-slate-300 bg-white shadow-sm">
        <div className="flex flex-col items-start ">
          <Avatar className="h-[200px] w-full rounded-none lg:h-[372px]">
            <AvatarImage
              src="/woman-office.jpg"
              className="object-cover"
              alt="@shadcn"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="px-8 py-8">
            <span className="rounded-[8px]  border border-slate-200 p-2 font-semibold text-verkotech-primary">
              SAP Consultants
            </span>

            <p className="mb-4 mt-4 text-sm font-medium text-slate-400 md:text-base">
              {
                "Your SAP Consultants of choice. Unlock business potential with our expert solutions. Streamline operations, maximize efficiency. Let's elevate your business together!"
              }
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
