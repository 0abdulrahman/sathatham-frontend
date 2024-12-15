import { Locale } from '@/navigation';
import { getLocale } from 'next-intl/server';

export const getAcceptLanguageHeader = async () => {
  const locale = (await getLocale()) as Locale;

  return { 'Accept-Language': locale };
};
