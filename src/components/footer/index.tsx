'use client'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Facebook, Instagram, Linkedin } from 'lucide-react'
import { Link, usePathname, useRouter } from '../../../navigation'
import { Button } from '../ui/button'
import { IoLogoWhatsapp } from 'react-icons/io5'

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
export default function Footer({ lang }: ILanguages) {
  const pathname = usePathname()
  const router = useRouter()

  const linksMapped = lang === 'en' ? linksEn : linksPt
  const contentToShow = lang === 'en' ? contentEn : contentPt

  return (
    <footer className="relative bottom-0 left-0 z-20 mt-24 flex w-full flex-col border-t border-zinc-100 bg-white p-4 shadow md:flex md:items-center md:justify-between md:p-6 dark:border-zinc-600 dark:bg-zinc-800">
      <div className="mx-auto w-full max-w-[1280px]">
        <div className="flex w-full flex-col justify-between  md:flex-row">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <p className="text-xl font-bold text-pink-500">WE&apos;RE</p>
              <Avatar className="h-[56px] w-[160px]">
                <AvatarImage
                  src="/logomarca-blue.png"
                  className="object-contain"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
            <div className="flex flex-col gap-2">
              <p className="hidden   text-base text-zinc-500 md:block">
                {lang === 'en'
                  ? '  Miami 201, South Biscayne Boulevard Suite #1200 Miami, FL 33131 USA Miami I Flórida | USA'
                  : 'Sao Paulo Av. Eng Luis Carlos Berrini, 1618 Unit 41R, SP, 04571-000, SP BR'}
              </p>
              <p className="text-base text-zinc-500">
                {lang === 'en'
                  ? 'Call us at +1(305)676-1715 🇺🇸 or +55(11)97105-1809 🇧🇷 for all your business inquiries!'
                  : 'Ligue para +1(305)676-1715 🇺🇸 ou +55(11)97105-1809 🇧🇷 para todas as suas consultas comerciais!'}
              </p>
              <p className="mb-8 text-base text-zinc-500">
                {lang === 'en'
                  ? 'Reach out to us via email at info@verkotech.com.'
                  : 'Entre em contato conosco via e-mail em info@verkotech.com.'}
              </p>
              <Link href={'https://wa.me/+13056761715'} target="_blank">
                <Button className="gap-2 rounded-[4px] bg-green-500 text-[14px] font-semibold">
                  <IoLogoWhatsapp size={20} /> {contentToShow.cta}
                </Button>
              </Link>
            </div>
          </div>

          <ul className="mt-3 hidden flex-wrap items-center gap-3 text-base font-medium text-zinc-500 sm:mt-0 lg:flex dark:text-zinc-400">
            {linksMapped.map((data, index) => (
              <li key={index}>
                <Link
                  href={data.url}
                  className="transition-all hover:text-slate-800  "
                >
                  {data.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="my-6 h-[1px] w-full bg-slate-200"></div>
        <div className="flex w-full flex-col-reverse justify-between gap-4 md:flex-row md:gap-0 lg:items-center">
          <div className="flex flex-col gap-2">
            <span className="text-sm uppercase text-zinc-500 dark:text-zinc-400">
              {/* <a
                href="https://ederrosa.com/"
                target="_blank"
                className="hover:underline"
              > */}
              © 2025 Verkotech. All rights reserved
              {/* </a> */}
            </span>
            <span className="text-xs uppercase text-zinc-500  dark:text-zinc-400">
              made by{' '}
              <a
                href="https://ederrosa.com/"
                target="_blank"
                className="hover:underline"
              >
                Eder Rosa
              </a>
            </span>
          </div>

          <p className="text-xs text-black md:hidden">
            {' '}
            {lang === 'en'
              ? '  Miami 201, South Biscayne Boulevard Suite #1200 Miami, FL 33131 USA Miami I Flórida | USA'
              : 'Sao Paulo Av. Eng Luis Carlos Berrini, 1618 Unit 41R, SP, 04571-000, SP BR'}
          </p>
          <ul className="flex flex-wrap items-center gap-2 text-sm font-medium text-verkotech-pink sm:mt-0 dark:text-zinc-400">
            <Link
              href={
                'https://www.linkedin.com/company/verkotech/mycompany/?viewAsMember=true'
              }
              target="_blank"
            >
              <li className="flex h-[36px] w-[36px] items-center justify-center rounded-[4px] border border-verkotech-pink">
                <Linkedin size={20} />
              </li>
            </Link>

            {/* <li className="flex h-[36px] w-[36px] items-center justify-center rounded-[4px] border border-verkotech-pink">
              <Facebook size={20} />
            </li>
            <li className="flex h-[36px] w-[36px] items-center justify-center rounded-[4px] border border-verkotech-pink">
              <Instagram size={20} />
            </li> */}
          </ul>
        </div>
      </div>
    </footer>
  )
}
