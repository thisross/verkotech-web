'use client'

import { Button } from '@/components/ui/button'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import { useLocale, useTranslations } from 'next-intl'
import { useState } from 'react'
import { Link } from '../../../navigation'

export default function WorkWithUs() {
  const t = useTranslations('ServicesPage')
  const tw = useTranslations('WorkWithUs')
  const locale = useLocale()

  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    telephone: '',
    message: '',
  })

  const [resumeFile, setResumeFile] = useState<File | null>(null)

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null
    message: string
  }>({ type: null, message: '' })

  const formatPhoneNumber = (value: string) => {
    const phoneNumber = value.replace(/[^\d]/g, '')

    if (locale === 'pt') {
      if (phoneNumber.length <= 2) {
        return phoneNumber
      } else if (phoneNumber.length <= 3) {
        return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2)}`
      } else if (phoneNumber.length <= 7) {
        return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2)}`
      } else if (phoneNumber.length <= 11) {
        return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(
          2,
          7,
        )}-${phoneNumber.slice(7)}`
      } else {
        return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(
          2,
          7,
        )}-${phoneNumber.slice(7, 11)}`
      }
    } else {
      if (phoneNumber.length <= 3) {
        return phoneNumber
      } else if (phoneNumber.length <= 6) {
        return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`
      } else if (phoneNumber.length <= 10) {
        return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
          3,
          6,
        )}-${phoneNumber.slice(6)}`
      } else {
        return `+${phoneNumber.slice(0, 1)} (${phoneNumber.slice(
          1,
          4,
        )}) ${phoneNumber.slice(4, 7)}-${phoneNumber.slice(7, 11)}`
      }
    }
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target

    if (name === 'telephone') {
      const formattedValue = formatPhoneNumber(value)
      setFormData((prev) => ({
        ...prev,
        [name]: formattedValue,
      }))
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }))
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0] ? e.target.files[0] : null
    setResumeFile(file)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    try {
      const cleanedTelephone = formData.telephone.replace(/[^\d]/g, '')

      const fd = new FormData()
      fd.append('fullName', formData.fullName)
      fd.append('email', formData.email)
      fd.append('message', formData.message)
      if (cleanedTelephone) fd.append('telephone', cleanedTelephone)
      if (resumeFile) fd.append('resume', resumeFile)

      const response = await fetch('/api/work-with-us', {
        method: 'POST',
        body: fd,
      })

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: tw('success'),
        })
        setFormData({
          fullName: '',
          company: '',
          email: '',
          telephone: '',
          message: '',
        })
        setResumeFile(null)
      } else {
        throw new Error('Failed to submit')
      }
    } catch (error) {
      console.error('Error sending application:', error)
      setSubmitStatus({
        type: 'error',
        message: tw('error'),
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="relative flex h-[70vh] w-full items-center justify-center">
        <div className="absolute inset-0 z-10 bg-black/50"></div>
        <div className="absolute inset-0 z-0 blur-sm">
          <Image
            src="/workwus1.PNG"
            alt="Career & Work With Us"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-10 mx-auto max-w-5xl px-4 text-center">
          <h1 className="mb-3 font-impact text-4xl font-bold uppercase tracking-wide text-pink-400 drop-shadow md:text-6xl">
            {tw('heroTitle')}
          </h1>
          <p className="mx-auto max-w-3xl text-xl font-semibold uppercase tracking-[0.15em] text-white md:text-2xl">
            {tw('heroSubtitle')}
          </p>
        </div>
      </section>

      {/* Form section */}
      <section className="w-full bg-white px-4 py-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-6 text-2xl font-bold text-black md:text-3xl">
            {tw('shareTitle')}
          </h2>

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
            <div>
              <input
                type="file"
                name="resume"
                accept=".pdf,.doc,.docx,.rtf"
                onChange={handleFileChange}
                className="w-full rounded-[6px] border border-zinc-300 bg-white px-4 py-3 text-black file:mr-4 file:rounded file:border-0 file:bg-zinc-100 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-zinc-700 hover:file:bg-zinc-200"
              />
            </div>
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row md:items-center">
              <p className="text-sm tracking-wide text-zinc-600">
                {tw('privacyPrefix')}
                <Link href="/privacy" className="text-verkotech underline">
                  {tw('privacyLink')}
                </Link>
                .
              </p>
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
                      <ArrowUpRight size={20} className="text-pink-500" />
                    </div>
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}
