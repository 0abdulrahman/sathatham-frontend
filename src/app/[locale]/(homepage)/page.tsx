import ArrowRight from '@/components/common/arrow-right';
import ChevronRight from '@/components/common/chevron-right';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import Image from 'next/image';

const data = {
  _id: '1',
  image: '/assets/images/school-image.webp',
  title: 'Student activity',
  content: 'Student activity',
};

export default function Page({ params: { locale } }: RouteParams) {
  // Translation
  const t = useTranslations();

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <main>
      {/* Landing image */}
      <div className="container relative my-12 h-[60vh] overflow-hidden rounded-2xl">
        <Image
          src="/assets/images/landing-image.webp"
          alt={t('project-name')}
          priority
          sizes="95vw"
          fill
          className="object-cover"
        />
      </div>

      <hr className="container my-16 w-192 border-primary" />

      {/* Programs */}
      <section className="container">
        {/* Headline */}
        <h1 className="text-center text-3xl font-semibold uppercase text-primary"> {t('home-h1')}</h1>

        {/* Content */}
        <div className="my-12 grid grid-cols-2 gap-6">
          {/* Primary school */}
          <Link href="/programs" className="flex items-center gap-8 overflow-hidden rounded-2xl bg-primary">
            {/* Image */}
            <div className="relative h-48 w-64">
              <Image
                src="/assets/images/school-image.webp"
                alt={t('primary-school')}
                fill
                sizes="200px"
                className="object-cover"
              />
            </div>

            {/* Text */}
            <div className="space-y-2">
              <h2 className="flex items-center justify-between gap-8 text-2xl font-semibold text-white">
                {t('primary-school')} <ChevronRight size={20} />
              </h2>

              <p className="text-zinc-400">{t('primary-alternative-text')}</p>
            </div>
          </Link>

          {/* Middle school */}
          <Link href="/programs" className="flex items-center gap-8 overflow-hidden rounded-2xl bg-primary">
            {/* Image */}
            <div className="relative h-48 w-64">
              <Image
                src="/assets/images/school-image.webp"
                alt={t('middle-school')}
                fill
                sizes="200px"
                className="object-cover"
              />
            </div>

            {/* Text */}
            <div className="space-y-2">
              <h2 className="flex items-center justify-between gap-8 text-2xl font-semibold text-white">
                {t('middle-school')} <ChevronRight size={20} />
              </h2>
              <p className="text-zinc-400">{t('primary-alternative-text')}</p>
            </div>
          </Link>
        </div>
      </section>

      <hr className="container my-16 w-192 border-primary" />

      {/* Director message */}
      <section className="container flex gap-12">
        {/* Image */}
        <div className="relative h-96 w-64 shrink-0 overflow-hidden rounded-2xl">
          <Image
            src="/assets/images/director.webp"
            alt={t('director-image-alt')}
            fill
            sizes="350px"
            className="object-cover"
          />
        </div>

        {/* Message */}
        <div className="space-y-6">
          {/* Title */}
          <h2 className="text-3xl font-semibold text-primary">{t('director-message-title')}</h2>

          {/* Message */}
          <p className="text-lg">
            {t.rich('director-message-content', {
              br: () => <br />,
            })}
          </p>
        </div>
      </section>

      <hr className="container my-16 w-192 border-primary" />

      {/* News */}
      <section className="container mb-24 space-y-4">
        {/* Heading */}
        <div className="flex items-center justify-between">
          {/* Title */}
          <h2 className="text-3xl font-semibold text-primary">{t('home-news-title')}</h2>

          {/* See more */}
          <Link
            href="/news"
            className="flex w-auto items-center justify-center gap-2 rounded-lg bg-primary p-0 px-4 py-2 text-white"
          >
            {t('home-news-see-all')} <ArrowRight size={20} />
          </Link>
        </div>

        {/* Data */}
        <ul className="grid grid-cols-4 gap-6">
          {Array.from({ length: 4 }, (_, i) => i).map((i) => (
            <li key={i}>
              <Link
                href={data._id}
                className="relative flex h-60 w-full flex-col justify-end overflow-hidden rounded-xl p-6 text-yellow-400 before:absolute before:inset-0 before:z-[1] before:bg-gradient-to-t before:from-black"
              >
                {/* Background */}
                <Image src={data.image} alt={data.title} sizes="170px" fill className="object-cover" />

                {/* Title */}
                <p className="z-10 flex items-center gap-2 text-xl font-semibold">
                  {data.title} <ChevronRight className="shrink-0" />
                </p>

                {/* Content */}
                <span className="z-10">{data.content}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
