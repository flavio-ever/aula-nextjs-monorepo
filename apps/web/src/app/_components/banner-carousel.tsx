import { getBannerData } from "@/lib/api";
import { BannerCarouselClient } from "./banner-carousel-client";

export async function BannerCarousel() {
  const { banners } = await getBannerData();

  return <BannerCarouselClient banners={banners} />;
}
