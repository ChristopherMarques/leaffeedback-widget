import { getRequestConfig } from "next-intl/server";
import { getCookie } from "cookies-next";

export default getRequestConfig(async () => {
  const defaultLocale = "en-US";
  const cookieLocale = getCookie("NEXT_LOCALE") || defaultLocale;

  return {
    locale: cookieLocale,
    messages: (await import(`./locales/${cookieLocale}.json`)).default,
  };
});
