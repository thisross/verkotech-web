'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Menu } from 'lucide-react'
import Image from 'next/image'
import ReactCountryFlag from 'react-country-flag'
import { IoLogoWhatsapp } from 'react-icons/io5'
import { Link, usePathname, useRouter } from '../../../navigation'
import { Button } from '../ui/button'

interface ILanguages {
  lang: string
}

// Translations
const linksEn = [
  { title: 'Home', url: '/' },
  { title: 'About Us', url: '/aboutUs' },
  { title: 'Services', url: '/services' },
]
const linksPt = [
  { title: 'Início', url: '/' },
  { title: 'Sobre Nós', url: '/aboutUs' },
  { title: 'Serviços', url: '/services' },
]
const contentEn = {
  cta: 'Get In Touch',
}
const contentPt = {
  cta: 'Entrar em contato',
}

export default function Navbar({ lang }: ILanguages) {
  const pathname = usePathname()
  const router = useRouter()

  const linksMapped = lang === 'en' ? linksEn : linksPt
  const contentToShow = lang === 'en' ? contentEn : contentPt

  return (
    <nav
      className="border-b border-slate-200 bg-white py-4"
      role="navigation"
      aria-label="Main"
    >
      <div className="mx-auto  max-w-[1280px] px-4 sm:px-6 lg:px-0">
        <div className="flex h-12 items-center justify-between ">
          <div className="flex w-1/3 flex-shrink-0 ">
            <Link href="/">
              <Avatar className="h-[48px] w-[156px]">
                <AvatarImage
                  src="/logomarca-blue.png"
                  className="object-contain"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </Link>
          </div>

          <div className="hidden w-1/3 justify-center md:flex">
            <ul className="flex space-x-3 font-medium">
              {linksMapped?.map((link, index) => (
                <>
                  <Link href={link?.url}>
                    <li
                      key={index}
                      className={
                        pathname === link?.url
                          ? 'font-semibold text-verkotech-primary'
                          : 'text-zinc-500'
                      }
                    >
                      {link?.title}
                    </li>
                  </Link>
                </>
              ))}
            </ul>
          </div>

          <div className="hidden w-1/3  items-center justify-end gap-3 md:flex">
            <Link href={pathname} locale="en">
              <ReactCountryFlag
                countryCode="US"
                svg
                style={{
                  width: '1.3em',
                  height: '1.3em',
                }}
              />
            </Link>
            <Link href={pathname} locale="pt">
              <ReactCountryFlag
                countryCode="BR"
                svg
                style={{
                  width: '1.3em',
                  height: '1.3em',
                }}
              />
            </Link>
            <Button className="gap-2 rounded-[4px] bg-green-500 text-[14px] font-semibold">
              <IoLogoWhatsapp size={20} /> {contentToShow.cta}
            </Button>
          </div>

          <div className="flex md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant={'outline'}
                  aria-label="Abrir menu"
                  className="rounded-[4px] text-gray-300 hover:text-gray-600"
                >
                  <Menu className="text-verkotech-lightBlue" />
                </Button>
              </SheetTrigger>
              <SheetContent className="bg-white p-0">
                <SheetHeader className="flex flex-col border-b bg-slate-50 px-3 py-0  text-start">
                  <div className="relative mt-4 h-[50px] w-[130px]">
                    <Image
                      src="/logomarca-blue.png"
                      fill
                      className="object-contain"
                      alt="Picture of the author"
                    />
                  </div>
                </SheetHeader>
                <div className="mt-2 flex w-full flex-col justify-between space-y-2 bg-white px-3">
                  <div className="mb-8 flex flex-col space-y-2">
                    <span className="text-xs font-semibold text-verkotech-lightBlue">
                      MENU
                    </span>
                    {linksMapped?.map((link, index) => (
                      <SheetClose asChild key={index}>
                        <Button
                          variant={'link'}
                          className="bg-white-50 w-full rounded-[4px] border border-neutral-300 capitalize text-black hover:bg-zinc-200 hover:text-verkotech-lightBlue"
                          onClick={() => router?.push(link?.url)}
                        >
                          {link?.title}
                        </Button>
                      </SheetClose>
                    ))}
                  </div>
                  <Button className="gap-2 rounded-[4px] bg-green-500 text-[14px] font-semibold">
                    <IoLogoWhatsapp size={20} /> {contentToShow.cta}
                  </Button>
                  <div className="mt-8 flex w-full items-center justify-center gap-3">
                    <SheetClose asChild>
                      <Link href={pathname} locale="en">
                        <ReactCountryFlag
                          countryCode="US"
                          svg
                          style={{
                            width: '1.3em',
                            height: '1.3em',
                          }}
                        />
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link href={pathname} locale="pt">
                        <ReactCountryFlag
                          countryCode="BR"
                          svg
                          style={{
                            width: '1.3em',
                            height: '1.3em',
                          }}
                        />
                      </Link>
                    </SheetClose>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
