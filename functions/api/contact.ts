interface Env {
  AZURE_CLIENT_ID: string;
  AZURE_TENANT_ID: string;
  AZURE_CLIENT_SECRET: string;
  GRAPH_FROM_EMAIL: string;
  GRAPH_TO_EMAIL: string;
  TURNSTILE_SECRET_KEY: string;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  try {
    const formData = await context.request.formData();

    // Turnstile verification
    const turnstileToken = String(formData.get("cf-turnstile-response") || "");

    if (!turnstileToken) {
      return new Response("Missing verification", { status: 400 });
    }

    const verifyRes = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        secret: context.env.TURNSTILE_SECRET_KEY,
        response: turnstileToken,
      }),
    });

    const verifyData = await verifyRes.json() as { success: boolean };

    if (!verifyData.success) {
      return new Response("Bot verification failed", { status: 403 });
    }

    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const service = String(formData.get("service") || "").trim();
    const message = String(formData.get("message") || "").trim();

    if (!name || !email || !message) {
      return new Response("Missing required fields", { status: 400 });
    }

    const tokenRes = await fetch(
      `https://login.microsoftonline.com/${context.env.AZURE_TENANT_ID}/oauth2/v2.0/token`,
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          client_id: context.env.AZURE_CLIENT_ID,
          client_secret: context.env.AZURE_CLIENT_SECRET,
          scope: "https://graph.microsoft.com/.default",
          grant_type: "client_credentials",
        }),
      }
    );

    if (!tokenRes.ok) {
      const errorText = await tokenRes.text();
      console.error("Token error:", errorText);
      return new Response("Failed to authenticate email service", { status: 500 });
    }

    const tokenData = await tokenRes.json() as { access_token: string };

    const emailHtml = `
      <h2>New Website Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
      <p><strong>Service:</strong> ${service || "Not selected"}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, "<br>")}</p>
    `;

    const graphRes = await fetch(
      `https://graph.microsoft.com/v1.0/users/${context.env.GRAPH_FROM_EMAIL}/sendMail`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${tokenData.access_token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: {
            subject: `New Nova Website Inquiry${service ? ` - ${service}` : ""}`,
            body: {
              contentType: "HTML",
              content: emailHtml,
            },
            toRecipients: [
              {
                emailAddress: {
                  address: context.env.GRAPH_TO_EMAIL,
                },
              },
            ],
            replyTo: [
              {
                emailAddress: {
                  address: email,
                  name,
                },
              },
            ],
          },
          saveToSentItems: true,
        }),
      }
    );

    if (!graphRes.ok) {
      const errorText = await graphRes.text();
      console.error("Graph sendMail error:", errorText);
      return new Response("Failed to send message", { status: 500 });
    }

    return Response.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return new Response("Server error", { status: 500 });
  }
};