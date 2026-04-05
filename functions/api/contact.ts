interface Env {
    CONTACT_NOTIFICATION_EMAIL: SendEmail;
  }
  
  type SendEmail = {
    send(message: EmailMessage): Promise<void>;
  };
  
  declare class EmailMessage {
    constructor(from: string, to: string, raw: ReadableStream | string);
  }
  
  function escapeHtml(value: string): string {
    return value
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }
  
  function buildMimeEmail(params: {
    from: string;
    to: string;
    replyTo?: string;
    subject: string;
    text: string;
    html: string;
  }): string {
    const boundary = `boundary_${crypto.randomUUID()}`;
  
    const headers = [
      `From: ${params.from}`,
      `To: ${params.to}`,
      `Subject: ${params.subject}`,
      `MIME-Version: 1.0`,
      `Content-Type: multipart/alternative; boundary="${boundary}"`,
      ...(params.replyTo ? [`Reply-To: ${params.replyTo}`] : []),
    ].join("\r\n");
  
    const body = [
      `--${boundary}`,
      `Content-Type: text/plain; charset=UTF-8`,
      ``,
      params.text,
      ``,
      `--${boundary}`,
      `Content-Type: text/html; charset=UTF-8`,
      ``,
      params.html,
      ``,
      `--${boundary}--`,
      ``,
    ].join("\r\n");
  
    return `${headers}\r\n\r\n${body}`;
  }
  
  export const onRequestPost: PagesFunction<Env> = async (context) => {
    try {
      const contentType = context.request.headers.get("content-type") || "";
      if (!contentType.includes("application/x-www-form-urlencoded") &&
          !contentType.includes("multipart/form-data")) {
        return new Response("Unsupported content type", { status: 415 });
      }
  
      const formData = await context.request.formData();
  
      const name = String(formData.get("name") || "").trim();
      const email = String(formData.get("email") || "").trim();
      const phone = String(formData.get("phone") || "").trim();
      const propertyType = String(formData.get("propertyType") || "").trim();
      const service = String(formData.get("service") || "").trim();
      const message = String(formData.get("message") || "").trim();
  
      if (!name || !email || !service || !message) {
        return new Response("Missing required fields", { status: 400 });
      }
  
      const safeName = escapeHtml(name);
      const safeEmail = escapeHtml(email);
      const safePhone = escapeHtml(phone);
      const safePropertyType = escapeHtml(propertyType);
      const safeService = escapeHtml(service);
      const safeMessage = escapeHtml(message).replace(/\n/g, "<br>");
  
      const to = "your-verified-inbox@example.com";
      const from = "website@yourdomain.com";
      const subject = `New quote request: ${service}`;
  
      const text = [
        "New website quote request",
        "",
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Property Type: ${propertyType}`,
        `Service: ${service}`,
        "",
        "Message:",
        message,
      ].join("\n");
  
      const html = `
        <h2>New website quote request</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Phone:</strong> ${safePhone}</p>
        <p><strong>Property Type:</strong> ${safePropertyType}</p>
        <p><strong>Service:</strong> ${safeService}</p>
        <p><strong>Message:</strong><br>${safeMessage}</p>
      `;
  
      const raw = buildMimeEmail({
        from,
        to,
        replyTo: email,
        subject,
        text,
        html,
      });
  
      await context.env.CONTACT_NOTIFICATION_EMAIL.send(
        new EmailMessage(from, to, raw)
      );
  
      return new Response(null, {
        status: 303,
        headers: { Location: "/contact/thank-you" },
      });
    } catch (error) {
      console.error("Contact form error:", error);
      return new Response("Server error", { status: 500 });
    }
  };