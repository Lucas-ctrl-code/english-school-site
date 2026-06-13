"use client";

import { useEffect } from "react";

function detectLocale() {
  if (typeof navigator === "undefined") return "en";
  const lang = navigator.language || navigator.userLanguage || "en";
  if (lang.startsWith("zh")) return "zh";
  if (lang.startsWith("ja")) return "ja";
  return "en";
}

export default function CoursesRedirect() {
  useEffect(() => {
    const locale = detectLocale();
    window.location.replace(`/${locale}/courses`);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-2xl text-center">
        <p className="text-lg">Redirecting to localized Courses & Pricing page…</p>
        <p className="mt-4 text-sm text-muted">If you are not redirected, <a href="/en/courses" className="text-accent">click here</a>.</p>
      </div>
    </div>
  );
}
