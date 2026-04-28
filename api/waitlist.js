import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const confirmationHtml = ({ email, lang }) => {
  const copy = {
    fr: {
      subject: "Bienvenue sur la waitlist WYN 🎓",
      title: "Tu es sur la liste !",
      body: "Merci de rejoindre la waitlist WYN. Tu seras parmi les premiers à être notifié(e) au lancement de l'application.",
      cta: "Win temchi ? On s'occupe de ça.",
      footer: "Tu reçois cet email car tu t'es inscrit(e) sur wyn.africa. Pour te désinscrire, réponds à cet email avec 'STOP'.",
    },
    en: {
      subject: "Welcome to the WYN waitlist 🎓",
      title: "You're on the list!",
      body: "Thank you for joining the WYN waitlist. You'll be among the first to be notified when the app launches.",
      cta: "Where's Your Next? We've got you.",
      footer: "You received this email because you signed up at wyn.africa. To unsubscribe, reply to this email with 'STOP'.",
    },
    ar: {
      subject: "مرحباً بك في قائمة انتظار WYN 🎓",
      title: "أنت على القائمة!",
      body: "شكراً لانضمامك إلى قائمة انتظار WYN. ستكون من أوائل من يُخطَرون عند إطلاق التطبيق.",
      cta: "وين تمشي؟ نحن هنا لمساعدتك.",
      footer: "تلقيت هذا البريد الإلكتروني لأنك سجّلت على wyn.africa. للإلغاء الاشتراك، أرد على هذا البريد بـ 'STOP'.",
    },
  };

  const t = copy[lang] || copy.fr;
  const dir = lang === "ar" ? "rtl" : "ltr";

  return `<!DOCTYPE html>
<html dir="${dir}" lang="${lang}">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#0A0A14;font-family:'Helvetica Neue',Arial,sans-serif">
  <div style="max-width:560px;margin:0 auto;padding:40px 24px">
    <div style="margin-bottom:32px">
      <span style="font-family:monospace;font-size:22px;font-weight:500;color:#fff">WYN<span style="color:#1B6B50">.</span></span>
    </div>
    <h1 style="font-size:28px;font-weight:700;color:#fff;margin:0 0 16px;letter-spacing:-0.5px">${t.title}</h1>
    <p style="font-size:15px;color:rgba(255,255,255,0.65);line-height:1.7;margin:0 0 24px">${t.body}</p>
    <div style="background:rgba(27,107,80,0.2);border:1px solid rgba(27,107,80,0.4);border-radius:8px;padding:16px 20px;margin-bottom:32px">
      <p style="font-size:14px;color:#6ECBA8;font-style:italic;margin:0">"${t.cta}"</p>
    </div>
    <p style="font-size:11px;color:rgba(255,255,255,0.25);line-height:1.6;margin:0">${t.footer}</p>
  </div>
</body>
</html>`;
};

export default async function handler(req, res) {
  // CORS headers
  res.setHeader("Access-Control-Allow-Origin", process.env.ALLOWED_ORIGIN || "https://wyn.africa");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const { email, bac, lang = "fr" } = req.body || {};

  if (!email || typeof email !== "string" || !email.includes("@")) {
    return res.status(400).json({ error: "Invalid email" });
  }

  // Basic rate-limit guard (Vercel edge runtime not available here, but basic check)
  if (email.length > 254) {
    return res.status(400).json({ error: "Invalid email" });
  }

  const from = process.env.RESEND_FROM_EMAIL || "WYN <noreply@wyn.africa>";
  const copy = { fr: "Bienvenue sur la waitlist WYN 🎓", en: "Welcome to the WYN waitlist 🎓", ar: "مرحباً بك في قائمة انتظار WYN 🎓" };

  try {
    await resend.emails.send({
      from,
      to: email,
      subject: copy[lang] || copy.fr,
      html: confirmationHtml({ email, lang }),
    });

    // Also notify the team
    const teamEmail = process.env.TEAM_EMAIL;
    if (teamEmail) {
      await resend.emails.send({
        from,
        to: teamEmail,
        subject: `[WYN] Nouvelle inscription waitlist — ${email}`,
        html: `<p>Email: <strong>${email}</strong><br>Année Bac: ${bac || "—"}<br>Langue: ${lang}</p>`,
      });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Resend error:", err);
    return res.status(500).json({ error: "Failed to send confirmation email" });
  }
}
