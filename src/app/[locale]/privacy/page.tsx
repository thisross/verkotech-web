import Link from 'next/link'
import { getTranslations } from 'next-intl/server'

export default async function PrivacyPage() {
  const t = await getTranslations('PrivacyPage')
  return (
    <>
      <title>Verkotech - Privacy Policy</title>
      <main className="min-h-screen w-screen bg-white pt-24">
        <section className="mx-auto flex w-full max-w-7xl gap-8 px-0 pb-24">
          {/* Left sticky sidebar */}
          <aside className="hidden shrink-0 lg:block lg:w-64">
            <div className="sticky top-24 flex flex-col gap-2">
              <h1 className="text-5xl font-medium tracking-tight text-gray-900">
                {t('sidebarTitle')}
              </h1>
            </div>
          </aside>

          {/* Content */}
          <article className="flex-1 border-l border-gray-200 text-gray-800">
            <div className="max-w-3xl pl-16 pt-6">
              <header className="mb-8">
                <h2 className="text-4xl font-medium tracking-normal text-gray-900">
                  {t('headerTitle')}
                </h2>
                <p className="mt-1 text-sm text-gray-500">{t('lastUpdated')}</p>
              </header>

              <p className="mb-6 text-xl leading-relaxed">
                {t('introPart1')}
                <Link
                  href="https://www.verkotech.com"
                  target="_blank"
                  className="text-verkotech underline"
                >
                  {t('introSite')}
                </Link>
                {t('introPart2')}
              </p>

              <section className="mb-8">
                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  {t('s1.title')}
                </h3>
                <p className="mb-4 leading-relaxed">{t('s1.intro')}</p>
                <ul className="ml-5 list-disc space-y-3">
                  <li>
                    <span className="font-medium">{t('s1.personalTitle')}</span>{' '}
                    {t('s1.personalDesc')}
                  </li>
                  <li>
                    <span className="font-medium">{t('s1.usageTitle')}</span>{' '}
                    {t('s1.usageDesc')}
                  </li>
                  <li>
                    <span className="font-medium">{t('s1.cookiesTitle')}</span>{' '}
                    {t('s1.cookiesDesc')}
                  </li>
                </ul>
              </section>

              <section className="mb-8">
                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  {t('s2.title')}
                </h3>
                <p className="mb-4 leading-relaxed">{t('s2.intro')}</p>
                <ul className="ml-5 list-disc space-y-3">
                  <li>{t('s2.items.0')}</li>
                  <li>{t('s2.items.1')}</li>
                  <li>{t('s2.items.2')}</li>
                  <li>{t('s2.items.3')}</li>
                </ul>
              </section>

              <section className="mb-8">
                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  {t('s3.title')}
                </h3>
                <p className="mb-4 leading-relaxed">{t('s3.intro')}</p>
                <ul className="ml-5 list-disc space-y-3">
                  <li>{t('s3.items.0')}</li>
                  <li>{t('s3.items.1')}</li>
                </ul>
              </section>

              <section className="mb-8">
                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  {t('s4.title')}
                </h3>
                <p className="leading-relaxed">{t('s4.text')}</p>
              </section>

              <section className="mb-8">
                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  {t('s5.title')}
                </h3>
                <p className="mb-4 leading-relaxed">{t('s5.intro')}</p>
                <ul className="ml-5 list-disc space-y-3">
                  <li>{t('s5.items.0')}</li>
                  <li>{t('s5.items.1')}</li>
                  <li>{t('s5.items.2')}</li>
                </ul>
                <p className="mt-4 leading-relaxed">
                  {t('s5.contact')}
                  <a
                    href="mailto:info@verkotech.com"
                    className="text-blue-600 underline"
                  >
                    info@verkotech.com
                  </a>
                  .
                </p>
              </section>

              <section className="mb-8">
                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  {t('s6.title')}
                </h3>
                <p className="leading-relaxed">{t('s6.text')}</p>
              </section>

              <section className="mb-8">
                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  {t('s7.title')}
                </h3>
                <p className="leading-relaxed">{t('s7.text')}</p>
              </section>

              <section className="mb-8">
                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  {t('s8.title')}
                </h3>
                <p className="leading-relaxed">{t('s8.text')}</p>
              </section>

              <section className="mb-8">
                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  {t('s9.title')}
                </h3>
                <p className="leading-relaxed">{t('s9.text')}</p>
              </section>

              <section>
                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  {t('s10.title')}
                </h3>
                <p className="leading-relaxed">{t('s10.intro')}</p>
                <p className="mt-3 leading-relaxed">
                  <span className="font-medium">{t('s10.emailLabel')}</span>{' '}
                  <a
                    href="mailto:info@verkotech.com"
                    className="text-blue-600 underline"
                  >
                    info@verkotech.com
                  </a>
                </p>
              </section>
            </div>
          </article>
        </section>
      </main>
    </>
  )
}
