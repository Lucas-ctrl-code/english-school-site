"use client";

import { useState, type FormEvent } from "react";
import type { Dictionary } from "@/lib/i18n/types";

type ContactFormProps = {
  dict: Dictionary["contact"]["form"];
};

export function ContactForm({ dict }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <p className="rounded-xl border border-border bg-surface px-6 py-10 text-center text-muted">
        {dict.note}
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="name"
          className="mb-2 block text-sm font-medium text-foreground"
        >
          {dict.name}
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-accent"
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-medium text-foreground"
        >
          {dict.email}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-accent"
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-medium text-foreground"
        >
          {dict.message}
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-accent"
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-full bg-accent px-6 py-3.5 text-sm font-medium tracking-wide text-white transition-colors hover:bg-accent-dark sm:w-auto"
      >
        {dict.submit}
      </button>
      <p className="text-xs text-muted">{dict.note}</p>
    </form>
  );
}
