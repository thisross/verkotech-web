import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const fullName = String(formData.get('fullName') || '')
    const email = String(formData.get('email') || '')
    const message = String(formData.get('message') || '')
    const resume = formData.get('resume') as File | null

    if (!fullName || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 },
      )
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD,
      },
    })

    const attachments: {
      filename: string
      content: Buffer
      contentType?: string
    }[] = []
    if (resume && typeof resume.arrayBuffer === 'function') {
      const arrayBuffer = await resume.arrayBuffer()
      const buffer = Buffer.from(arrayBuffer)
      attachments.push({
        filename: resume.name || 'resume',
        content: buffer,
        contentType: resume.type,
      })
    }

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #e11d48;">New Job Application</h2>
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> ${email}</p>
        </div>
        <div style="background-color: #ffffff; padding: 20px; border-left: 4px solid #06b6d4; margin: 20px 0;">
          <h3 style="color: #374151; margin-top: 0;">Message</h3>
          <p style="line-height: 1.6; color: #4b5563;">${message}</p>
        </div>
        <p style="color:#4b5563;">${
          resume ? 'The candidate attached a resume.' : 'No resume attached.'
        }</p>
      </div>
    `

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'info@verkotech.com',
      subject: `New Job Application from ${fullName}`,
      html: htmlContent,
      replyTo: email,
      attachments,
    })

    return NextResponse.json(
      { message: 'Application sent successfully' },
      { status: 200 },
    )
  } catch (error) {
    console.error('Error submitting application:', error)
    return NextResponse.json(
      { error: 'Failed to submit application' },
      { status: 500 },
    )
  }
}
