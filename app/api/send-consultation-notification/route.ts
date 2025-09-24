import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { consultation } = await request.json();

    // Send email notification to your business email using Resend
    const emailContent = `
      New Consultation Request Received!
      
      Contact Information:
      - Name: ${consultation.name}
      - Email: ${consultation.email}
      - Company: ${consultation.company || 'Not provided'}
      - Phone: ${consultation.phone || 'Not provided'}
      
      Project Details:
      - Project Type: ${consultation.project_type}
      - Budget: ${consultation.budget || 'Not specified'}
      - Timeline: ${consultation.timeline || 'Not specified'}
      
      Project Description:
      ${consultation.message}
      
      ---
      Submitted on: ${new Date().toLocaleString()}
      Consultation ID: ${consultation.id}
    `;

    // Send notification email to your business email
    const businessEmailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Upvista Digital <noreply@upvistadigital.com>',
        to: [process.env.BUSINESS_EMAIL || 'info@upvistadigital.com'],
        subject: `New Consultation Request from ${consultation.name}`,
        text: emailContent,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #7c3aed;">New Consultation Request Received!</h2>
            
            <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #374151; margin-top: 0;">Contact Information</h3>
              <p><strong>Name:</strong> ${consultation.name}</p>
              <p><strong>Email:</strong> <a href="mailto:${consultation.email}">${consultation.email}</a></p>
              <p><strong>Company:</strong> ${consultation.company || 'Not provided'}</p>
              <p><strong>Phone:</strong> ${consultation.phone || 'Not provided'}</p>
            </div>
            
            <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #374151; margin-top: 0;">Project Details</h3>
              <p><strong>Project Type:</strong> ${consultation.project_type}</p>
              <p><strong>Budget:</strong> ${consultation.budget || 'Not specified'}</p>
              <p><strong>Timeline:</strong> ${consultation.timeline || 'Not specified'}</p>
            </div>
            
            <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #374151; margin-top: 0;">Project Description</h3>
              <p style="white-space: pre-wrap;">${consultation.message}</p>
            </div>
            
            <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;">
            <p style="color: #6b7280; font-size: 14px;">
              Submitted on: ${new Date().toLocaleString()}<br>
              Consultation ID: ${consultation.id}
            </p>
          </div>
        `
      }),
    });

    if (!businessEmailResponse.ok) {
      console.error('Failed to send business email:', await businessEmailResponse.text());
    }

    // Send confirmation email to the client
    const clientEmailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Upvista Digital <noreply@upvistadigital.com>',
        to: [consultation.email],
        subject: 'Thank you for your consultation request - Upvista Digital',
        text: `
          Hi ${consultation.name},
          
          Thank you for reaching out to Upvista Digital! We've received your consultation request and are excited to learn more about your project.
          
          Here's a summary of what you submitted:
          - Project Type: ${consultation.project_type}
          - Budget: ${consultation.budget || 'Not specified'}
          - Timeline: ${consultation.timeline || 'Not specified'}
          
          Our team will review your request and get back to you within 24 hours with next steps.
          
          If you have any urgent questions, feel free to reach out to us directly at info@upvistadigital.com or +92 332 0486955.
          
          Best regards,
          The Upvista Digital Team
        `,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="text-align: center; margin-bottom: 30px;">
              <h1 style="color: #7c3aed;">Thank You!</h1>
            </div>
            
            <p>Hi ${consultation.name},</p>
            
            <p>Thank you for reaching out to <strong>Upvista Digital</strong>! We've received your consultation request and are excited to learn more about your project.</p>
            
            <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #374151; margin-top: 0;">Your Project Summary</h3>
              <p><strong>Project Type:</strong> ${consultation.project_type}</p>
              <p><strong>Budget:</strong> ${consultation.budget || 'Not specified'}</p>
              <p><strong>Timeline:</strong> ${consultation.timeline || 'Not specified'}</p>
            </div>
            
            <p><strong>What happens next?</strong></p>
            <ul>
              <li>Our team will review your request within 24 hours</li>
              <li>We'll schedule a free consultation call</li>
              <li>You'll receive a custom proposal tailored to your needs</li>
            </ul>
            
            <p>If you have any urgent questions, feel free to reach out to us directly:</p>
            <ul>
              <li>Email: <a href="mailto:info@upvistadigital.com">info@upvistadigital.com</a></li>
              <li>Phone: <a href="tel:+923320486955">+92 332 0486955</a></li>
            </ul>
            
            <p>Best regards,<br>
            The Upvista Digital Team</p>
          </div>
        `
      }),
    });

    if (!clientEmailResponse.ok) {
      console.error('Failed to send client confirmation email:', await clientEmailResponse.text());
    }

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('Error sending email notification:', error);
    return NextResponse.json({ error: 'Failed to send notification' }, { status: 500 });
  }
}
