export default function CardServices() {
  return (
    <>
      <div className="flex min-h-[300px] w-full flex-col items-center justify-center rounded-[16px] border border-slate-300 bg-white px-8 shadow-sm">
        <div>
          <span className="text-verkotech-primary rounded-[8px] border border-slate-200 p-2 font-semibold">
            SAP Consultants
          </span>

          <p className="mt-4 text-sm font-medium text-slate-400 md:text-base">
            {
              "Your SAP Consultants of choice. Unlock business potential with our expert solutions. Streamline operations, maximize efficiency. Let's elevate your business together!"
            }
          </p>
        </div>
      </div>
    </>
  )
}
