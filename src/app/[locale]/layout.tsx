import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import { notFound } from 'next/navigation'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Verkotech',
  description: 'Verkotech - We are Verkotech',
}

const locales = ['en', 'pt']

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: {
    locale: string
  }
}) {
  if (!locales.includes(locale)) notFound()

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages()

  return (
    <html lang={locale} className="antialiased">
      <body className={inter.className}>
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17336764676"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17336764676');
          `}
        </Script>

        {/* Google Analytics (GA4) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-CZERLMNJJZ"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CZERLMNJJZ');
          `}
        </Script>

        {/* LinkedIn Insight Tag */}
        <Script id="linkedin-insight-init" strategy="afterInteractive">
          {`
            _linkedin_partner_id = "7662778";
            window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
            window._linkedin_data_partner_ids.push(_linkedin_partner_id);
          `}
        </Script>
        <Script id="linkedin-insight-loader" strategy="afterInteractive">
          {`
            (function(l) {
              if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
              window.lintrk.q=[]}
              var s = document.getElementsByTagName("script")[0];
              var b = document.createElement("script");
              b.type = "text/javascript"; b.async = true;
              b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
              s.parentNode.insertBefore(b, s);
            })(window.lintrk);
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            alt=""
            src="https://px.ads.linkedin.com/collect/?pid=7662778&fmt=gif"
          />
        </noscript>

        {/* Hotjar Tracking Code */}
        <Script id="hotjar-init" strategy="afterInteractive">
          {`
            (function(h,o,t,j,a,r){
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:6493446,hjsv:6};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script'); r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          `}
        </Script>
        <NextIntlClientProvider messages={messages}>
          <Navbar lang={locale} />
          {children}
          <Footer lang={locale} />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
