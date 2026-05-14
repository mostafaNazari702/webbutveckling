import { useState } from "react";
import Button from "../components/Button.jsx";
import FormField from "../components/FormField.jsx";
import Illustration from "../components/Illustration.jsx";
import "./Contact.css";

const WEBHOOK_URL = import.meta.env.VITE_DISCORD_WEBHOOK_URL;

const initialForm = { name: "", email: "", message: "" };

function validate(form) {
  const errors = {};
  if (!form.name.trim()) errors.name = "Skriv ditt namn.";
  else if (form.name.trim().length < 2) errors.name = "Namnet är för kort.";

  if (!form.email.trim()) errors.email = "Skriv din e-post.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
    errors.email = "E-postadressen ser inte rätt ut.";

  if (!form.message.trim()) errors.message = "Skriv ett meddelande.";
  else if (form.message.trim().length < 10)
    errors.message = "Meddelandet ska vara minst 10 tecken.";

  return errors;
}

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [serverError, setServerError] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setServerError("");

    const validation = validate(form);
    setErrors(validation);
    if (Object.keys(validation).length > 0) return;

    if (!WEBHOOK_URL) {
      setStatus("error");
      setServerError(
        "Ingen Discord-webhook är konfigurerad. Lägg till VITE_DISCORD_WEBHOOK_URL i din .env-fil."
      );
      return;
    }

    setStatus("loading");

    const payload = {
      username: "Kontaktformulär · React + Fetch",
      embeds: [
        {
          title: "Nytt meddelande från webbplatsen",
          color: 0x2563eb,
          fields: [
            { name: "Namn", value: form.name, inline: true },
            { name: "E-post", value: form.email, inline: true },
            { name: "Meddelande", value: form.message }
          ],
          footer: { text: "Skickat via skolprojektet" },
          timestamp: new Date().toISOString()
        }
      ]
    };

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error(`Discord svarade med status ${response.status}`);
      }

      setStatus("success");
      setForm(initialForm);
      setErrors({});
    } catch (err) {
      setStatus("error");
      setServerError(err.message || "Något gick fel. Försök igen.");
    }
  }

  function reset() {
    setStatus("idle");
    setServerError("");
  }

  return (
    <>
      <section className="contact-hero">
        <div className="container contact-hero__inner">
          <div className="contact-hero__text">
            <span className="section-eyebrow">Kontakt</span>
            <h1 className="contact-hero__title">Hör av dig</h1>
            <p className="contact-hero__lead">
              Har du frågor om kursen, förslag på nya lektioner eller vill ge
              feedback på projektet? Skriv ett meddelande – det landar direkt i
              vår Discord-server.
            </p>
          </div>
          <Illustration
            name="contactMail"
            className="contact-hero__art illustration--shadow"
            title="Illustration av ett brev"
          />
        </div>
      </section>

      <section className="section section--surface">
        <div className="container contact-grid">
          <aside className="contact-aside">
            <h2>Snabb kontakt</h2>
            <p>Du kan också nå oss på de här kanalerna under skoltid.</p>
            <ul className="contact-list">
              <li>
                <span className="contact-list__icon">📧</span>
                <div>
                  <strong>E-post</strong>
                  <a href="mailto:06mosnaz@skola.boras.se">06mosnaz@skola.boras.se</a>
                </div>
              </li>
              <li>
                <span className="contact-list__icon">🏫</span>
                <div>
                  <strong>Skolan</strong>
                  <span>Sven Eriksonsgymnasiet, Borås</span>
                </div>
              </li>
              <li>
                <span className="contact-list__icon">⏱️</span>
                <div>
                  <strong>Svarstid</strong>
                  <span>Vanligtvis inom 1–2 skoldagar</span>
                </div>
              </li>
            </ul>
          </aside>

          <div className="contact-card">
            {status === "success" ? (
              <div className="contact-state contact-state--success" role="status">
                <span className="contact-state__icon">✅</span>
                <h2>Tack för ditt meddelande!</h2>
                <p>
                  Det har skickats till min Discord-kanal. Jag svarar så
                  snart jag kan.
                </p>
                <Button variant="primary" onClick={reset}>
                  Skicka ett till
                </Button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <header className="contact-form__header">
                  <h2>Skriv ett meddelande</h2>
                  <p>Fält markerade med <span className="field__required">*</span> är obligatoriska.</p>
                </header>

                <FormField
                  id="name"
                  label="Namn"
                  required
                  autoComplete="name"
                  placeholder="För- och efternamn"
                  value={form.name}
                  onChange={handleChange}
                  error={errors.name}
                />

                <FormField
                  id="email"
                  label="E-post"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="namn@exempel.se"
                  value={form.email}
                  onChange={handleChange}
                  error={errors.email}
                />

                <FormField
                  id="message"
                  label="Meddelande"
                  as="textarea"
                  required
                  placeholder="Berätta vad du tänker på…"
                  value={form.message}
                  onChange={handleChange}
                  error={errors.message}
                />

                {status === "error" && (
                  <div className="contact-state contact-state--error" role="alert">
                    <strong>Det gick inte att skicka:</strong> {serverError}
                  </div>
                )}

                <div className="contact-form__actions">
                  <Button
                    type="submit"
                    variant="primary"
                    disabled={status === "loading"}
                  >
                    {status === "loading" ? "Skickar…" : "Skicka meddelande"}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
