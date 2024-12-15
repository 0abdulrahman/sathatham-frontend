/* eslint-disable @next/next/no-img-element */
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function Footer() {
  // Translation
  const t = useTranslations();

  // Variables
  const quickLinks = [
    {
      title: t('nav-about'),
      href: '/about-us',
    },
    {
      title: t('nav-programs'),
      href: '/programs',
    },
    {
      title: t('nav-admission'),
      href: '/admission',
    },
    {
      title: t('nav-news'),
      href: '/news',
    },
    {
      title: t('nav-donate'),
      href: '/donate',
    },
  ];

  return (
    <footer className="bg-primary py-16 text-white">
      <div className="container grid grid-cols-3">
        {/* Logo */}
        <div className="flex flex-col items-center gap-4 text-center">
          <Image src="/assets/images/logo.webp" alt="Sathatham School" width={70} height={70} quality={100} />
          <p className="flex flex-col gap-0.5 uppercase">
            <span className="text-lg leading-none">{t('project-name')}</span>
            <span className="text-sm leading-none text-zinc-400">{t('project-establish-date')}</span>
          </p>
        </div>

        {/* Quick links */}
        <div className="space-y-5">
          {/* Title */}
          <p className="font-semibold">Quick links</p>

          {/* Content */}
          <ul className="space-y-4">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Follow us */}
        <div className="flex items-start gap-2 text-white">
          {/* Facebook */}
          <a href="https://facebook.com" target="_blank" title="Facebook">
            <img className="size-8 invert" src="/assets/icons/facebook.svg" alt="Facebook" />
          </a>

          {/* Facebook */}
          <a href="https://line.com" target="_blank" title="Line">
            <img className="size-8 invert" src="/assets/icons/line.svg" alt="Line" />
          </a>
        </div>
      </div>

      <p className="mt-20 px-2 text-center text-sm opacity-75">
        {t('copyright', {
          year: new Date().getFullYear(),
        })}
      </p>
    </footer>
  );
}
