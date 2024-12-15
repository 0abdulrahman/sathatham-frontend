import NextIntlProvider from "./components/next-intl.provider";
import { ThemeProvider } from "./components/next-themes.provider";

type Providers = {
  children: React.ReactNode;
};

export default function Providers({ children }: Providers) {
  return (
    <NextIntlProvider>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        {children}
      </ThemeProvider>
    </NextIntlProvider>
  );
}
