import Footer from '@/components/custom/footer';
import Header from '@/components/custom/header';
import Providers from '@/components/providers';
import { Locale, routing } from '@/i18n/routing';
import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';

type LayoutProps = {
  children: React.ReactNode;
  params: { locale: Locale };
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default function LocaleLayout({ params: { locale }, children }: LayoutProps) {
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        <Providers>
          <Header />

          {children}

          <Footer />
        </Providers>
      </body>
    </html>
  );
}
