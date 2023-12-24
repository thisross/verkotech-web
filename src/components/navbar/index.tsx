'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import ReactCountryFlag from 'react-country-flag'
import { IoLogoWhatsapp } from 'react-icons/io5'
import { Link, usePathname, useRouter } from '../../../navigation'
import { Button } from '../ui/button'

export default function Navbar() {
  const pathname = usePathname()

  const links = [
    { title: 'Home', url: '/' },
    { title: 'About Us', url: '/aboutUs' },
    { title: 'Services', url: '/services' },
  ]

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
              {links?.map((link, index) => (
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
              <IoLogoWhatsapp size={20} /> Get In Touch
            </Button>
          </div>

          <div className="flex md:hidden">
            <button
              aria-label="Abrir menu"
              className="text-gray-300 hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
