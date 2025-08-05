import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

interface ContactFormData {
  fullName: string
  company?: string
  email: string
  telephone?: string
  message: string
  serviceType?: string
  locale?: string
}

const formatPhoneForDisplay = (phone: string, locale?: string) => {
  if (!phone) return ''

  if (locale === 'pt') {
    // Brazilian format - always assume area code is 2 digits
    if (phone.length === 11) {
      // Mobile: (11) 99999-9999
      return `(${phone.slice(0, 2)}) ${phone.slice(2, 7)}-${phone.slice(7)}`
    } else if (phone.length === 10) {
      // Landline: (11) 9999-9999
      return `(${phone.slice(0, 2)}) ${phone.slice(2, 6)}-${phone.slice(6)}`
    }
  } else {
    // US/Canada format
    if (phone.length === 10) {
      return `(${phone.slice(0, 3)}) ${phone.slice(3, 6)}-${phone.slice(6)}`
    } else if (phone.length === 11 && phone.startsWith('1')) {
      return `+1 (${phone.slice(1, 4)}) ${phone.slice(4, 7)}-${phone.slice(7)}`
    }
  }

  // For other lengths, return as is
  return phone
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json()
    const {
      fullName,
      company,
      email,
      telephone,
      message,
      serviceType,
      locale,
    } = body

    // Validate required fields
    if (!fullName || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 },
      )
    }

    // Create transporter using Gmail SMTP
    // Note: You'll need to set up environment variables for email credentials
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail address
        pass: process.env.EMAIL_APP_PASSWORD, // Your Gmail app password
      },
    })

    // Email content
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #06b6d4;">New Contact Form Submission</h2>
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #374151; margin-top: 0;">Contact Details</h3>
          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${
            telephone
              ? `<p><strong>Phone:</strong> ${formatPhoneForDisplay(
                  telephone,
                  locale,
                )}</p>`
              : ''
          }
          ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
          ${
            serviceType
              ? `<p><strong>Service Interest:</strong> ${serviceType
                  .replace('-', ' ')
                  .replace(/\b\w/g, (l) => l.toUpperCase())}</p>`
              : ''
          }
        </div>
        <div style="background-color: #ffffff; padding: 20px; border-left: 4px solid #06b6d4; margin: 20px 0;">
          <h3 style="color: #374151; margin-top: 0;">Message</h3>
          <p style="line-height: 1.6; color: #4b5563;">${message}</p>
        </div>
        <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
          <p style="color: #6b7280; font-size: 14px;">This email was sent from the Verkotech website contact form.</p>
        </div>
      </div>
    `

    // Send email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'info@verkotech.com',
      subject: `New Contact Form Submission from ${fullName}`,
      html: htmlContent,
      replyTo: email,
    })

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 },
    )
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}
