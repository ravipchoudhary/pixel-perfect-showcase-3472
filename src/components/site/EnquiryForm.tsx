import { type FormEvent } from "react";
import { buildWhatsAppUrl, EVENT_TYPE_OPTIONS } from "@/data/site";

const field =
  "w-full border-b border-border bg-transparent py-3 text-sm text-ink placeholder:text-muted-foreground/70 focus:border-accent focus:outline-none transition-colors";
const labelCls = "eyebrow block mb-1";

export function EnquiryForm() {
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const get = (k: string) => String(fd.get(k) ?? "").trim();
    const message = [
      "Hello The Little Big Experience, I'd like to enquire about a photo booth.",
      "",
      `Name: ${get("name")}`,
      `Phone: ${get("phone")}`,
      `Email: ${get("email") || "Not provided"}`,
      `Event type: ${get("eventType") || "Not provided"}`,
      `Event date: ${get("eventDate") || "Not provided"}`,
      `Venue / city: ${get("location") || "Not provided"}`,
      `Approximate guest count: ${get("guests") || "Not provided"}`,
      `Required hours: ${get("hours") || "Not provided"}`,
      "",
      `Message: ${get("message") || "Not provided"}`,
    ].join("\n");

    window.location.assign(buildWhatsAppUrl(message));
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-7 sm:grid-cols-2">
      <div>
        <label className={labelCls} htmlFor="name">
          Name
        </label>
        <input
          id="name"
          name="name"
          autoComplete="name"
          required
          className={field}
          placeholder="Your full name"
        />
      </div>
      <div>
        <label className={labelCls} htmlFor="phone">
          Phone Number
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
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
          Venue / City
        </label>
        <input
          id="location"
          name="location"
          className={field}
          placeholder="Noida, Delhi, Gurgaon…"
        />
      </div>
      <div>
        <label className={labelCls} htmlFor="guests">
          Approximate Guest Count
        </label>
        <input
          id="guests"
          name="guests"
          type="number"
          min="1"
          inputMode="numeric"
          className={field}
          placeholder="Approximate number"
        />
      </div>
      <div>
        <label className={labelCls} htmlFor="hours">
          Required Hours
        </label>
        <input
          id="hours"
          name="hours"
          inputMode="decimal"
          className={field}
          placeholder="Approximate duration"
        />
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
      </div>
    </form>
  );
}
