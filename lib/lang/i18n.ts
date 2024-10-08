import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";

export default getRequestConfig(async () => {
  const defaultLocale = "en-US";
  const cookieLocale = cookies().get("NEXT_LOCALE")?.value || defaultLocale;

  return {
    locale: cookieLocale,
    messages: (await import(`./locales/${cookieLocale}.json`)).default,
  };
});
