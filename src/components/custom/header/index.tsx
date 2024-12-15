import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Header() {
  // Translation
  const t = useTranslations();

  // Variables
  const navLinks = [
    {
      title: t("nav-home"),
      href: "/",
    },
    {
      title: t("nav-news"),
      href: "/news",
    },
    {
      title: t("nav-donate"),
      href: "/donate",
    },
    {
      title: t("nav-about"),
      href: "/about",
    },

    {
      title: t("nav-contact"),
      href: "/contact-us",
    },
  ];

  return (
    <header className="bg-white py-2">
      <div className="container flex justify-between items-center h-16">
        {/* Logo */}
        <Link href="/" className="flex gap-3 items-center ">
          <Image src="/assets/images/logo.webp" alt="Sathatham School" width={70} height={70} quality={100} />
          <p className="flex flex-col uppercase gap-0.5">
            <span className="text-xl  leading-none text-transparent bg-clip-text bg-gradient-to-r from-violet-800 to-rose-700">{t("project-name")}</span>
            <span className="text-sm  leading-none text-zinc-600">{t("project-establish-date")}</span>
          </p>
        </Link>

        {/* Navigation links */}
        <nav className="h-full">
          <ul className="flex gap-2 items-center bg-primary text-white h-full px-4 rounded-xl">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="px-6 py-3 transition-colors duration-300 hover:bg-white hover:text-primary rounded-xl">
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
