"use client";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { type Banner } from "@/lib/api";
import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

interface BannerCarouselClientProps {
  banners: Banner[];
}

const gradientMap = {
  1: "from-emerald-600 to-teal-600",
  2: "from-blue-600 to-indigo-600",
  3: "from-orange-600 to-red-600",
  default: "from-purple-600 to-pink-600",
};

export function BannerCarouselClient({ banners }: BannerCarouselClientProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section className="relative w-full bg-background">
      <Carousel
        setApi={setApi}
        plugins={[
          Autoplay({
            delay: 5000,
            stopOnInteraction: true,
            stopOnMouseEnter: true,
          }),
        ]}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {banners.map((banner, _) => (
            <CarouselItem key={banner.id}>
              <div className="relative w-full h-90 md:h-90 overflow-hidden">
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${
                    gradientMap[banner.id as keyof typeof gradientMap] ||
                    gradientMap.default
                  }`}
                >
                  <div className="relative z-10 container mx-auto max-w-6xl px-6 md:px-8 h-full flex items-center">
                    <div className="w-full text-white text-center md:text-left max-w-2xl mx-auto md:mx-0">
                      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                        {banner.title}
                      </h2>

                      <p className="text-lg md:text-xl text-white/90 mb-2 leading-relaxed max-w-xl mx-auto md:mx-0">
                        {banner.subtitle}
                      </p>

                      <p className="text-base text-white/80 mb-8 leading-relaxed max-w-xl mx-auto md:mx-0">
                        {banner.description}
                      </p>

                      <Button
                        asChild
                        size="lg"
                        className="bg-white text-gray-900 hover:bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300 group text-base px-8 py-3"
                      >
                        <Link
                          href={banner.ctaLink}
                          className="flex items-center space-x-2"
                        >
                          <span className="font-semibold">
                            {banner.ctaText}
                          </span>
                          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </Button>
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-black/20" />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-2">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                current === index + 1
                  ? "bg-white w-8"
                  : "bg-white/50 hover:bg-white/70"
              )}
              onClick={() => api?.scrollTo(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
