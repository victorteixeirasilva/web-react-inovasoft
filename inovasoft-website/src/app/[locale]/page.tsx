import { setRequestLocale } from "next-intl/server";

import HomePageContent from "@/components/home/home-page-content";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Home({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <HomePageContent />;
}
