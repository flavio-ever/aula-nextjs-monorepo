import { Suspense } from "react";
import { BannerCarousel } from "./_components/banner-carousel";
import { ServicesGrid } from "./_components/services-grid";
import { BannerSkeleton, ServicesSkeleton } from "./_components/skeletons";


export default function Home() {
  return (
    <>
      <Suspense fallback={<BannerSkeleton />}>
        <BannerCarousel />
      </Suspense>

      <Suspense fallback={<ServicesSkeleton />}>
        <ServicesGrid />
      </Suspense>
    </>
  );
}
