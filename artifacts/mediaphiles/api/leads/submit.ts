import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const GOOGLE_FORM_ACTION =
  "https://docs.google.com/forms/d/e/1FAIpQLSdHmNXLZJI7fgrb0jJ6WFxkKL_mu6JVs-miOoOq-6Evs-a3Hw/formResponse";

const GOOGLE_FORM_FIELDS = {
  name: "entry.2092238618",
  email: "entry.1556369182",
  phone: "entry.479301265",
  property: "entry.1537371043",
  location: "entry.432850524",
  instagramUrl: "entry.1414441701",
  businessType: "entry.114236841",
} as const;

function toInstagramUrl(value: string): string {
  const trimmed = value.trim();
  if (/^https?:\/\//i.test(trimmed)) return trimmed;
  return `https://instagram.com/${trimmed.replace(/^@/, "")}`;
}

function toPlainDigits(value: string): string {
  return value.replace(/[^\d]/g, "");
}

async function submitToGoogleForm(data: Record<string, string>) {
  const params = new URLSearchParams();
  params.append(GOOGLE_FORM_FIELDS.name, data.name);
  params.append(GOOGLE_FORM_FIELDS.email, data.email);
  params.append(GOOGLE_FORM_FIELDS.phone, toPlainDigits(data.phone));
  params.append(GOOGLE_FORM_FIELDS.property, data.businessName);
  params.append(GOOGLE_FORM_FIELDS.location, data.location);
  params.append(GOOGLE_FORM_FIELDS.instagramUrl, toInstagramUrl(data.instagramUrl));
  params.append(GOOGLE_FORM_FIELDS.businessType, data.businessType);

  return fetch(GOOGLE_FORM_ACTION, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: params.toString(),
  });
}

function generateEmailHTML(name: string, businessName: string): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', sans-serif;
      line-height: 1.6;
      color: #3A3E61;
      background-color: #F7F4EE;
      margin: 0;
      padding: 20px;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      background-color: white;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 4px 12px rgba(58, 62, 97, 0.08);
    }
    .header {
      background: linear-gradient(135deg, #3A3E61 0%, #2D3047 100%);
      padding: 40px 30px;
      text-align: center;
    }
    .logo {
      max-width: 180px;
      height: auto;
      margin: 0 auto 20px;
      display: block;
    }
    .content {
      padding: 40px 30px;
    }
    .greeting {
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 20px;
      color: #3A3E61;
    }
    .message {
      font-size: 15px;
      line-height: 1.8;
      color: #666;
      margin-bottom: 30px;
    }
    .cta-section {
      text-align: center;
      margin: 40px 0;
      padding: 30px;
      background-color: #F7F4EE;
      border-radius: 8px;
    }
    .cta-text {
      font-size: 14px;
      color: #666;
      margin-bottom: 15px;
    }
    .cta-button {
      display: inline-block;
      background-color: #C9A84C;
      color: #3A3E61;
      padding: 14px 32px;
      text-decoration: none;
      border-radius: 25px;
      font-weight: 600;
      font-size: 14px;
      letter-spacing: 0.05em;
      transition: all 0.3s ease;
      box-shadow: 0 6px 20px rgba(201, 168, 76, 0.3);
    }
    .cta-button:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(201, 168, 76, 0.4);
    }
    .divider {
      height: 1px;
      background-color: #E5E2D9;
      margin: 30px 0;
    }
    .footer {
      background-color: #F7F4EE;
      padding: 30px;
      text-align: center;
      border-top: 1px solid #E5E2D9;
    }
    .footer-text {
      font-size: 12px;
      color: #999;
      margin: 5px 0;
    }
    .accent {
      color: #C9A84C;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <svg class="logo" viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg">
        <text x="10" y="45" font-family="Georgia, serif" font-size="32" font-weight="bold" fill="white">Media<tspan fill="#C9A84C">Philes</tspan></text>
      </svg>
    </div>

    <div class="content">
      <div class="greeting">Thank you, ${name}!</div>

      <div class="message">
        <p>Thank you for showing interest in a free Instagram audit for <strong>${businessName}</strong>.</p>

        <p>We've received your details and will carefully review your Instagram profile. Our team will analyze your content strategy, engagement patterns, and market positioning to provide you with actionable insights tailored to your business.</p>

        <p>We'll reach out to you shortly with a detailed, personalized report.</p>
      </div>

      <div class="cta-section">
        <div class="cta-text">In the meantime, feel free to schedule a call with our team to discuss your strategy:</div>
        <a href="https://calendly.com/mediaphiles-marketing/30min" class="cta-button">Schedule a Call</a>
      </div>

      <div class="divider"></div>

      <div class="message" style="margin-bottom: 0; color: #999; font-size: 13px;">
        <p>Questions? Reach out to us at <strong>info@mediaphiles.in</strong> or call us at <strong>+91 93155 34690</strong></p>
      </div>
    </div>

    <div class="footer">
      <div class="footer-text"><strong>MediaPhiles</strong> — Hospitality Marketing Studio</div>
      <div class="footer-text">Strategic storytelling for boutique hotels, resorts, and hospitality brands</div>
      <div class="footer-text">© 2026 MediaPhiles. All rights reserved.</div>
    </div>
  </div>
</body>
</html>
  `;
}

export default async function handler(
  req: { method: string; body: string },
  res: { status: (code: number) => { json: (data: unknown) => void } }
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const data = JSON.parse(req.body);

    // Validate required fields
    if (!data.email || !data.name || !data.businessName) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Send email
    const emailResponse = await resend.emails.send({
      from: "MediaPhiles <noreply@mediaphiles.in>",
      to: data.email,
      subject: `Thanks for your interest! Here's your free Instagram audit request`,
      html: generateEmailHTML(data.name, data.businessName),
      replyTo: "info@mediaphiles.in",
    });

    if (emailResponse.error) {
      console.error("Email send error:", emailResponse.error);
    }

    // Submit to Google Forms (fire-and-forget)
    submitToGoogleForm(data).catch((error) => console.error("Google Forms error:", error));

    return res.status(200).json({
      success: true,
      message: "Submission received. Email sent successfully.",
    });
  } catch (error) {
    console.error("Submission error:", error);
    return res.status(500).json({ error: "Failed to process submission" });
  }
}
