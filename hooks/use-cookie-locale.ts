"use client";

import { getCookie } from "cookies-next";
import { useEffect, useState } from "react";

export default function useCookieLocale() {
  const [locale, setLocale] = useState<string | null>(null);
  const cookieLocale = getCookie("NEXT_LOCALE") || "en-US";

  useEffect(() => {
    setLocale(cookieLocale);
  }, [cookieLocale]);

  return locale;
}
