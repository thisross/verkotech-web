'use client'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Facebook, Instagram, Linkedin } from 'lucide-react'
import { Link, usePathname, useRouter } from '../../../navigation'

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
    <footer className="relative bottom-0 left-0 z-20 mt-24 flex w-full flex-col border-t border-gray-200 bg-white p-4 shadow md:flex md:items-center md:justify-between md:p-6 dark:border-gray-600 dark:bg-gray-800">
      <div className="mx-auto w-full max-w-[1280px]">
        <div className="flex w-full flex-col justify-between  md:flex-row">
          <Avatar className="h-[60px] w-[200px]">
            <AvatarImage
              src="/logomarca-blue.png"
              className="object-contain"
              alt="@shadcn"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <ul className="mt-3 flex flex-wrap items-center gap-3 text-sm font-medium text-gray-500 sm:mt-0 dark:text-gray-400">
            {linksMapped.map((data, index) => (
              <li key={index}>
                <Link
                  href={data.url}
                  className=" transition-all hover:text-slate-800  "
                >
                  {data.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="my-6 h-[1px] w-full bg-slate-200"></div>
        <div className="flex w-full flex-col-reverse justify-between gap-4 md:flex-row md:gap-0 lg:items-center">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{' '}
            <a href="https://ederrosa.com/" className="hover:underline">
              Eder Rosa
            </a>
            . All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center gap-2 text-sm font-medium text-verkotech-pink sm:mt-0 dark:text-gray-400">
            <li className="flex h-[36px] w-[36px] items-center justify-center rounded-[4px] border border-verkotech-pink">
              <Linkedin size={20} />
            </li>
            <li className="flex h-[36px] w-[36px] items-center justify-center rounded-[4px] border border-verkotech-pink">
              <Facebook size={20} />
            </li>
            <li className="flex h-[36px] w-[36px] items-center justify-center rounded-[4px] border border-verkotech-pink">
              <Instagram size={20} />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
