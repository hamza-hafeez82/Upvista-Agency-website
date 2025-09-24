import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    console.log('Received application data:', {
      fullName: data.applicationData?.fullName,
      email: data.applicationData?.email,
      position: data.technicalAssessment?.position
    });

    // For now, just log the application data (email functionality can be added later)
    console.log('Full application data:', JSON.stringify(data, null, 2));
    
    // Check if Resend API key is available
    if (process.env.RESEND_API_KEY) {
      try {
        const resend = new Resend(process.env.RESEND_API_KEY);

        // Prepare CV attachment if available
        const attachments = [];
        if (data.applicationData.cvBase64 && data.applicationData.cvFileName) {
          // Extract base64 data (remove data:application/pdf;base64, prefix)
          const base64Data = data.applicationData.cvBase64.split(',')[1];
          attachments.push({
            filename: data.applicationData.cvFileName,
            content: Buffer.from(base64Data, 'base64'),
          });
        }

        // Email to careers@upvistadigital.com
        await resend.emails.send({
          from: 'careers@upvistadigital.com',
          to: ['careers@upvistadigital.com'],
          subject: `New Application: ${data.applicationData.fullName} - ${data.technicalAssessment.position}`,
          html: `
            <h2>New Job Application Received</h2>
            <h3>Candidate Information:</h3>
            <p><strong>Name:</strong> ${data.applicationData.fullName}</p>
            <p><strong>Email:</strong> ${data.applicationData.email}</p>
            <p><strong>Phone:</strong> ${data.applicationData.phone}</p>
            <p><strong>Position:</strong> ${data.technicalAssessment.position}</p>
            <p><strong>Applied On:</strong> ${new Date(data.timestamp).toLocaleString()}</p>
            
            <h3>Assessment Results:</h3>
            <h4>Personality Assessment:</h4>
            <pre>${JSON.stringify(data.personalityAssessment, null, 2)}</pre>
            
            <h4>Technical Assessment:</h4>
            <pre>${JSON.stringify(data.technicalAssessment, null, 2)}</pre>
            
            <h3>Cover Letter:</h3>
            <p>${data.applicationData.coverLetter}</p>
            
            ${attachments.length > 0 ? '<p><em>CV file attached below.</em></p>' : '<p><em>No CV file provided.</em></p>'}
          `,
          attachments: attachments,
        });

        // Confirmation email to candidate
        await resend.emails.send({
          from: 'careers@upvistadigital.com',
          to: [data.applicationData.email],
          subject: 'Application Received - Upvista Digital',
          html: `
            <h2>Thank you for your application!</h2>
            <p>Dear ${data.applicationData.fullName},</p>
            
            <p>We have successfully received your application for the <strong>${data.technicalAssessment.position}</strong> position at Upvista Digital.</p>
            
            <p>Our recruitment team will review your application and assessment results. If you are selected for the next stage, we will contact you within 5-7 business days.</p>
            
            <h3>Application Summary:</h3>
            <ul>
              <li><strong>Position:</strong> ${data.technicalAssessment.position}</li>
              <li><strong>Applied On:</strong> ${new Date(data.timestamp).toLocaleString()}</li>
              <li><strong>Status:</strong> Under Review</li>
            </ul>
            
            <p>Thank you for your interest in joining Upvista Digital!</p>
            
            <p>Best regards,<br>
            Upvista Digital Recruitment Team</p>
          `,
        });
        
        console.log('Emails sent successfully via Resend');
      } catch (emailError) {
        console.error('Resend email sending failed:', emailError);
        // Continue with success response even if email fails
      }
    } else {
      console.log('Resend API key not found - emails not sent');
    }

    const hasEmailConfig = process.env.RESEND_API_KEY;
    
    return NextResponse.json({ 
      success: true, 
      message: hasEmailConfig 
        ? 'Application submitted successfully! You will receive a confirmation email shortly.' 
        : 'Application submitted successfully! Assessment data has been recorded and will be reviewed by our team.' 
    });

  } catch (error) {
    console.error('Error submitting application:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to submit application' },
      { status: 500 }
    );
  }
}
