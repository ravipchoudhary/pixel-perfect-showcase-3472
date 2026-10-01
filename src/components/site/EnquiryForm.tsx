import { useState, type FormEvent } from "react";
import { EMAIL, EVENT_TYPE_OPTIONS, WHATSAPP_URL } from "@/data/site";

const field =
  "w-full border-b border-border bg-transparent py-3 text-sm text-ink placeholder:text-muted-foreground/70 focus:border-accent focus:outline-none transition-colors";
const labelCls = "eyebrow block mb-1";

export function EnquiryForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const get = (k: string) => String(fd.get(k) ?? "").trim();
    const body = [
      `Name: ${get("name")}`,
      `Phone: ${get("phone")}`,
      `Email: ${get("email")}`,
      `Event Type: ${get("eventType")}`,
      `Event Date: ${get("eventDate")}`,
      `Event Location: ${get("location")}`,
      `Expected Guests: ${get("guests")}`,
      "",
      get("message"),
    ].join("\n");

    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
      `Photo booth enquiry — ${get("eventType") || "Event"}`,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-7 sm:grid-cols-2">
      <div>
        <label className={labelCls} htmlFor="name">
          Name
        </label>
        <input id="name" name="name" required className={field} placeholder="Your full name" />
      </div>
      <div>
        <label className={labelCls} htmlFor="phone">
          Phone Number
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          className={field}
          placeholder="+91"
        />
      </div>
      <div>
        <label className={labelCls} htmlFor="email">
          Email
        </label>
        <input id="email" name="email" type="email" className={field} placeholder="you@email.com" />
      </div>
      <div>
        <label className={labelCls} htmlFor="eventType">
          Event Type
        </label>
        <select id="eventType" name="eventType" className={field} defaultValue="">
          <option value="" disabled>
            Select an option
          </option>
          {EVENT_TYPE_OPTIONS.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className={labelCls} htmlFor="eventDate">
          Event Date
        </label>
        <input id="eventDate" name="eventDate" type="date" className={field} />
      </div>
      <div>
        <label className={labelCls} htmlFor="location">
          Event Location
        </label>
        <input id="location" name="location" className={field} placeholder="Noida, Delhi, Gurgaon…" />
      </div>
      <div>
        <label className={labelCls} htmlFor="guests">
          Expected Guests
        </label>
        <input id="guests" name="guests" className={field} placeholder="e.g. 150" />
      </div>
      <div className="sm:col-span-2">
        <label className={labelCls} htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          className={field}
          placeholder="Tell us about your event"
        />
      </div>

      <div className="sm:col-span-2 flex flex-wrap items-center gap-4 pt-2">
        <button
          type="submit"
          className="inline-flex items-center justify-center bg-ink px-8 py-4 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-background transition-colors duration-500 hover:bg-accent"
        >
          Check Availability
        </button>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center border border-ink/25 px-8 py-4 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-ink transition-colors duration-500 hover:bg-ink hover:text-background"
        >
          WhatsApp Instead
        </a>
      </div>

      {sent && (
        <p className="sm:col-span-2 text-sm text-muted-foreground">
          Your email app should have opened with the enquiry ready to send. If it didn't,
          WhatsApp or call us instead.
        </p>
      )}
    </form>
  );
}
