import { NextIntlClientProvider, useLocale, useMessages, useNow, useTimeZone } from "next-intl";

type NextIntlProviderProps = {
  children: React.ReactNode;
};

export default function NextIntlProvider({ children }: NextIntlProviderProps) {
  const messages = useMessages();
  const locale = useLocale();
  const now = useNow();
  const timezone = useTimeZone();

  return (
    <NextIntlClientProvider messages={messages} locale={locale} now={now} timeZone={timezone}>
      {children}
    </NextIntlClientProvider>
  );
}
