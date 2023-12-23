import { Forward } from 'lucide-react'
import { Button } from '../../ui/button'
import CardServices from './CardService'

export default function WhatWeDo() {
  return (
    <>
      <section className="h-[432px] w-full bg-gradient-to-r from-[#1D3557] to-[#010D20] px-4">
        <div className="mx-auto w-full max-w-[1200px] pl-6 pt-12">
          <h2 className="mb-4 text-5xl font-bold md:text-6xl">What we do?</h2>
          <p className="max-w-xl text-sm font-medium text-slate-400 md:text-base">
            We understand the integration needs of global environments and adapt
            them to meet local needs and realities, aligning global strategies
            with the specific cultural and legal requirements of each location
          </p>
        </div>
      </section>
      <div className="mx-auto mt-[-156px] w-full px-6 sm:mt-[-232px] md:mt-[-200px]">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 justify-items-center gap-4 lg:grid-cols-3">
          <CardServices />
          <CardServices />
          <CardServices />
        </div>
        <div className="flex w-full items-center justify-center pt-8 ">
          <Button className="bg-verkotech-primary z-20 flex h-[44px] max-w-[142px] gap-2 rounded-[4px] font-semibold">
            See More <Forward size={20} />{' '}
          </Button>
        </div>
      </div>
    </>
  )
}
