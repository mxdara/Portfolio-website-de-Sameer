import { NextResponse } from 'next/server';

function isValidEmail(email) {
  if (typeof email !== 'string') return false;
  // Simple sanity check (not perfect, but good enough for contact forms)
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req) {
  try {
    const body = await req.json();
    const name = typeof body?.name === 'string' ? body.name.trim() : '';
    const email = typeof body?.email === 'string' ? body.email.trim() : '';
    const message = typeof body?.message === 'string' ? body.message.trim() : '';
    const website = typeof body?.website === 'string' ? body.website.trim() : '';

    // Honeypot: bots often fill hidden fields. Pretend success to avoid tipping them off.
    if (website) return NextResponse.json({ ok: true });

    if (!name || name.length > 120) {
      return NextResponse.json({ ok: false, error: 'Please enter your name.' }, { status: 400 });
    }
    if (!isValidEmail(email) || email.length > 254) {
      return NextResponse.json({ ok: false, error: 'Please enter a valid email.' }, { status: 400 });
    }
    if (!message || message.length > 5000) {
      return NextResponse.json(
        { ok: false, error: 'Please enter a message (max 5000 characters).' },
        { status: 400 }
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL;

    // You can start with Resend's onboarding sender while testing locally.
    // For production, set CONTACT_FROM_EMAIL to a sender on a verified domain.
    const fromEmail = process.env.CONTACT_FROM_EMAIL || 'onboarding@resend.dev';

    if (!resendApiKey) {
      return NextResponse.json(
        { ok: false, error: 'Server is missing RESEND_API_KEY.' },
        { status: 500 }
      );
    }
    if (!toEmail) {
      return NextResponse.json(
        { ok: false, error: 'Server is missing CONTACT_TO_EMAIL.' },
        { status: 500 }
      );
    }

    const subject = `Portfolio Contact: ${name}`;
    const html = `
      <div style="font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;">
        <h2 style="margin: 0 0 12px;">New Contact Message</h2>
        <p style="margin: 0 0 8px;"><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p style="margin: 0 0 16px;"><strong>Email:</strong> ${escapeHtml(email)}</p>
        <div style="padding: 12px 14px; border-radius: 10px; background: #f6f7f9; white-space: pre-wrap;">${escapeHtml(
          message
        )}</div>
      </div>
    `;

    const resp = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: `Portfolio Contact <${fromEmail}>`,
        to: [toEmail],
        reply_to: email,
        subject,
        html,
      }),
    });

    if (!resp.ok) {
      const text = await resp.text().catch(() => '');
      console.error('Resend error:', resp.status, text);
      return NextResponse.json({ ok: false, error: 'Failed to send email.' }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Contact route error:', err);
    return NextResponse.json({ ok: false, error: 'Unexpected error.' }, { status: 500 });
  }
}

function escapeHtml(str) {
  return String(str)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

