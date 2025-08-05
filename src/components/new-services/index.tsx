'use client'

import { Button } from '@/components/ui/button'
import { ArrowUpRight } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import { useState, useEffect } from 'react'
import NewLpWhatWeDo from '../new-lp/new-lp-whatwedo'

interface ServiceContent {
  mainTitle: string
  mainDescription: string
  approachTitle: string
  approachItems: string[]
  expertiseTitle: string
  expertiseItems: string[]
  elevateTitle: string
}

export default function NewServices() {
  const t = useTranslations('ServicesPage')
  const searchParams = useSearchParams()
  const serviceType = searchParams.get('service') || 'sap-transformation'
  const scrollToForm = searchParams.get('scrollToForm')

  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null
    message: string
  }>({ type: null, message: '' })

  // Scroll to form if parameter is present
  useEffect(() => {
    if (scrollToForm === 'true') {
      setTimeout(() => {
        const formElement = document.getElementById('contact-form')
        if (formElement) {
          formElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          })
        }
      }, 100)
    }
  }, [scrollToForm])

  // Available service types
  const availableServices = [
    'sap-transformation',
    'global-trade',
    'tax-compliance',
    'nearshore-support',
  ]

  // Validate and get current service type
  const validServiceType = availableServices.includes(serviceType)
    ? serviceType
    : 'sap-transformation'

  // Get current service content from translations
  const currentService: ServiceContent = {
    mainTitle: t(`services.${validServiceType}.mainTitle`),
    mainDescription: t(`services.${validServiceType}.mainDescription`),
    approachTitle: t(`services.${validServiceType}.approachTitle`),
    approachItems: t.raw(
      `services.${validServiceType}.approachItems`,
    ) as string[],
    expertiseTitle: t(`services.${validServiceType}.expertiseTitle`),
    expertiseItems: t.raw(
      `services.${validServiceType}.expertiseItems`,
    ) as string[],
    elevateTitle: t(`services.${validServiceType}.elevateTitle`),
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          serviceType: validServiceType,
        }),
      })

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: t('form.successMessage') || 'Message sent successfully!',
        })
        // Reset form
        setFormData({
          fullName: '',
          company: '',
          email: '',
          message: '',
        })
      } else {
        throw new Error('Failed to send message')
      }
    } catch (error) {
      console.error('Error sending message:', error)
      setSubmitStatus({
        type: 'error',
        message:
          t('form.errorMessage') || 'Failed to send message. Please try again.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {/* Hero */}
      {searchParams.get('service') && (
        <section className="relative flex h-[80vh] w-full items-center justify-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/herobg.jpg"
              alt="Hero Background"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="relative z-10 mx-auto max-w-6xl px-4 text-center text-white">
            <div className="mb-8 flex items-center justify-center gap-4"></div>

            <h2 className="mb-0 text-3xl font-bold uppercase leading-tight md:text-4xl lg:text-5xl">
              {searchParams.get('service')
                ? currentService.mainTitle
                : 'Services'}
            </h2>
          </div>
        </section>
      )}

      {!searchParams.get('service') && (
        <div className="pt-24">
          <NewLpWhatWeDo maxWidth="max-w-6xl" />
        </div>
      )}

      {/* Service Info */}
      <section className="w-full bg-white px-4 py-16">
        <div className="mx-auto max-w-6xl">
          {/* Main Title & Description */}
          {searchParams.get('service') && (
            <div className="mb-16">
              <h1 className="mb-8 text-2xl font-bold text-black md:text-3xl">
                {currentService.mainTitle}
              </h1>
              <p className="text-lg leading-relaxed text-zinc-600 md:text-xl">
                {currentService.mainDescription}
              </p>
            </div>
          )}

          {/* Service Navigation */}
          {/* <div className="mb-16">
            <div className="flex flex-wrap justify-center gap-4">
              {availableServices.map((serviceKey) => (
                <button
                  key={serviceKey}
                  onClick={() => {
                    const url = new URL(window.location.href)
                    url.searchParams.set('service', serviceKey)
                    window.history.pushState({}, '', url.toString())
                    window.location.reload()
                  }}
                  className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                    serviceType === serviceKey
                      ? 'bg-cyan-500 text-white'
                      : 'bg-zinc-200 text-zinc-500 hover:bg-zinc-300'
                  }`}
                >
                  {serviceKey
                    .replace('-', ' ')
                    .replace(/\b\w/g, (l) => l.toUpperCase())}
                </button>
              ))}
            </div>
          </div> */}

          {/* Dynamic Approach Section */}
          {searchParams.get('service') && (
            <div className="mb-16">
              <h2 className="mb-8 text-2xl font-bold text-black md:text-3xl">
                {currentService.approachTitle}
              </h2>
              <div className="space-y-4">
                {currentService.approachItems.map((item, index) => (
                  <div key={index} className="flex items-center">
                    <span className="mr-3 mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-black"></span>
                    <p className="text-lg leading-relaxed text-zinc-500">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Dynamic Expertise Section */}
          {searchParams.get('service') && (
            <div className="mb-16">
              <h2 className="mb-8 text-2xl font-bold text-black md:text-3xl">
                {currentService.expertiseTitle}
              </h2>
              <div className="space-y-4">
                {currentService.expertiseItems.map((item, index) => (
                  <div key={index} className="flex items-center">
                    <span className="mr-3 mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-black"></span>
                    <p className="text-lg leading-relaxed text-zinc-500">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Dynamic Elevate Business */}
          {searchParams.get('service') && (
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-black md:text-3xl">
                {currentService.elevateTitle}
              </h2>
            </div>
          )}

          {/* Contact Form Section */}
          <div id="contact-form" className="flex flex-col gap-8 lg:flex-row">
            {/* Left Side - Contact Info */}
            <div className="flex-1">
              <h2 className="mb-2 text-3xl font-bold text-pink-500 md:text-4xl">
                {t('contactTitle')}
              </h2>
              <h2 className="mb-6 text-3xl font-bold text-pink-500 md:text-4xl">
                {t('contactSubtitle')}
              </h2>
              <p className="text-lg leading-relaxed text-zinc-600">
                {t('contactDescription')}
              </p>
            </div>

            {/* Right Side - Form */}
            <div className="flex-1">
              {/* Status Message */}
              {submitStatus.type && (
                <div
                  className={`mb-6 rounded-[6px] p-4 ${
                    submitStatus.type === 'success'
                      ? 'border border-green-200 bg-green-50 text-green-800'
                      : 'border border-red-200 bg-red-50 text-red-800'
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="fullName"
                    placeholder={`${t('form.fullName')}*`}
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    className="w-full rounded-[6px] border border-zinc-300 px-4 py-3 text-black placeholder-zinc-500 shadow focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="company"
                    placeholder={t('form.company')}
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full rounded-[6px] border border-zinc-300 px-4 py-3 text-black placeholder-zinc-500 shadow focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder={`${t('form.email')}*`}
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full rounded-[6px] border border-zinc-300 px-4 py-3 text-black placeholder-zinc-500 shadow focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder={`${t('form.message')}*`}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full rounded-[6px] border border-zinc-300 px-4 py-3 text-black placeholder-zinc-500 shadow focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                  />
                </div>
                <div className="flex justify-end">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="gap-2 rounded-[6px] bg-cyan-500 px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-cyan-600 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        Sending...{' '}
                        <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                      </>
                    ) : (
                      <>
                        {t('form.sendMessage')}{' '}
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white">
                          <ArrowUpRight size={20} className="text-pink-500" />{' '}
                        </div>
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
