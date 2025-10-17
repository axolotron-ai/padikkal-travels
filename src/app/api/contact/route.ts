import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, address } = await req.json();

    const adminHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Booking Request</title>
        <style>
          body {
            font-family: 'Arial', sans-serif;
            line-height: 1.6;
            color: #333333;
            margin: 0;
            padding: 0;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            border: 1px solid #e0e0e0;
            border-radius: 8px;
            overflow: hidden;
          }
          .header {
            background-color: #003366;
            padding: 20px;
            text-align: center;
          }
      .header h1 {
    margin: 0;
    color: #FFD700;
    font-size: 24px;
}

.header p {
    margin: 0;
    color: white;
    font-size: 18px;
}
          .logo {
            max-width: 200px;
            height: auto;
          }
          .banner {
            width: 100%;
            height: auto;
            display: block;
            background-color: #FFD700;
          }
          .content {
            padding: 30px;
            background-color: #ffffff;
          }
          .footer {
            background-color: #FFD700;
            color: #333333;
            text-align: center;
            padding: 15px;
            font-size: 12px;
          }
          h2 {
            color: #003366;
            margin-top: 0;
          }
          .info-box {
            background-color: #f9f9f9;
            border-left: 4px solid #FFD700;
            padding: 15px;
            margin: 20px 0;
          }
          .button {
            display: inline-block;
            background-color: #FFD700;
            color: #333333;
            text-decoration: none;
            padding: 10px 20px;
            border-radius: 4px;
            font-weight: bold;
            margin-top: 15px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
          <h1>PADIKKAL</h1>
          <p>Travels</p>
          </div>
          <div class="banner" style="background-color: #FFD700; height: 15px;"></div>
          <div class="content">
            <h2>New Booking Request</h2>
            <p>A new travel inquiry has been received from a potential customer. Details are as follows:</p>
            
            <div class="info-box">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Address:</strong> ${address}</p>
            </div>
            
            <p>Please review this request and follow up with the customer as soon as possible.</p>
            
          </div>
          <div class="footer">
            <p>&copy; ${new Date().getFullYear()} PADIKKAL Travels Private Limited. All rights reserved.</p>
            <p>This is an automated message, please do not reply directly to this email.</p>
          </div>
        </div>
      </body>
      </html>
    `;

    // Customer Email Template
    const customerHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Thank You for Your Inquiry</title>
        <style>
          body {
            font-family: 'Arial', sans-serif;
            line-height: 1.6;
            color: #333333;
            margin: 0;
            padding: 0;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            border: 1px solid #e0e0e0;
            border-radius: 8px;
            overflow: hidden;
          }
          .header {
            background-color: #003366;
            padding: 20px;
            text-align: center;
          }
      .header h1 {
    margin: 0;
    color: #FFD700;
    font-size: 24px;
}

.header p {
    margin: 0;
    color: white;
    font-size: 18px;
}

          .logo {
            max-width: 200px;
            height: auto;
          }
          .banner {
            width: 100%;
            height: auto;
            display: block;
          }
          .content {
            padding: 30px;
            background-color: #ffffff;
          }
          .highlight {
            background-color: #FFF8DC;
            border-left: 4px solid #FFD700;
            padding: 15px;
            margin: 20px 0;
          }
          .footer {
            background-color: #FFD700;
            color: #333333;
            text-align: center;
            padding: 15px;
            font-size: 12px;
          }
          h2 {
            color: #003366;
            margin-top: 0;
          }
          .social-links {
            text-align: center;
            margin-top: 20px;
          }
          .social-links a {
            display: inline-block;
            margin: 0 10px;
            color: #003366;
            text-decoration: none;
          }
          .travel-image {
            width: 100%;
            height: auto;
            border-radius: 4px;
            margin: 15px 0;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
           <h1>PADIKKAL</h1>
          <p>Travels</p>
          </div>
          <div style="background-color: #FFD700; height: 15px;"></div>
          <div class="content">
            <h2>Thank You for Your Inquiry!</h2>
            <p>Dear ${name},</p>
            <p>We're excited that you've chosen PADIKKAL Travels for your upcoming journey. Your inquiry has been received and our team of travel experts will contact you</p>
                        
            <div class="highlight">
              <p><strong>What happens next?</strong></p>
              <p>One of our travel consultants will contact you within 24 hours to discuss your travel plans in detail and provide personalized recommendations.</p>
            </div>
            
            <p>In the meantime, feel free to browse our website for inspiration or contact us if you have any urgent questions.</p>
            
            <p>We look forward to helping you create unforgettable memories!</p>
            
            <p>Warm regards,</p>
            <p><strong>The PADIKKAL Travels Team</strong></p>

          </div>
          <div class="footer">
            <p>&copy; ${new Date().getFullYear()} PADIKKAL Travels Private Limited. All rights reserved.</p>
            <p>304, No16,Mittal Tower Residency,Mittal Appartments, M.G.Road, Bangalore, Karnataka-560001</p>
            <p>If you have any questions, please contact us at: padikkaltt@gmail.com</p>
          </div>
        </div>
      </body>
      </html>
    `;

    // Create a transporter using SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Send email to admin (padikkal email)
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.RECIPIENT_EMAIL,
      subject: "New Booking Request",
      html: adminHtml,
    });

    // Send email to customer
    await transporter.sendMail({
      from: `Padikkal Travels <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Thank You for Your Inquiry!",
      html: customerHtml,
    });

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
