import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, message, honeyPot } = body;

    // 1. HONEYPOT KONTROLÜ (Bot Savar)
    if (honeyPot) {
      return NextResponse.json({ success: true, message: "Bot detected" }); 
      // Botun başarısız olduğunu anlamaması için 'true' dönüyoruz ama mail atmıyoruz.
    }

    // 2. TEMEL DOĞRULAMA
    if (!fullName || !email || !message) {
      return NextResponse.json({ success: false, error: "Eksik bilgi" }, { status: 400 });
    }

    // 3. XSS KORUMASI (Basit Temizlik)
    const cleanMessage = message
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .substring(0, 1000); // Mesaj boyutu sınırı (Karakter saldırısı engelleme)

    const data = await resend.emails.send({
      from: 'SOOBA Tech <info@soobatech.com>',
      to: ['info@soobatech.com'],
      subject: `Yeni Proje Talebi: ${fullName.substring(0, 50)}`,
      replyTo: email,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: auto; border: 1px solid #eee; padding: 20px; border-radius: 10px;">
          <h2 style="color: #2563eb;">Web Sitesinden Mesaj</h2>
          <p><strong>İsim:</strong> ${fullName}</p>
          <p><strong>E-posta:</strong> ${email}</p>
          <hr style="border: 0; border-top: 1px solid #eee;" />
          <p><strong>Mesaj:</strong></p>
          <div style="background: #f1f5f9; padding: 15px; border-radius: 8px;">${cleanMessage}</div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Sunucu hatası" }, { status: 500 });
  }
}