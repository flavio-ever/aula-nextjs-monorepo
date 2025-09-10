import { Skeleton } from "@/components/ui/skeleton";

export function HeaderSkeleton() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/95">
      <div className="container mx-auto max-w-6xl flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo skeleton */}
        <Skeleton className="h-8 w-32" />
        
        {/* Search bar skeleton */}
        <div className="mx-8 flex-1 max-w-2xl hidden md:block">
          <Skeleton className="h-10 w-full" />
        </div>
        
        {/* User menu skeleton */}
        <div className="flex items-center space-x-4">
          <Skeleton className="h-8 w-8" />
          <Skeleton className="h-8 w-24" />
        </div>
      </div>

      {/* Navigation skeleton */}
      <div className="border-t hidden md:block">
        <div className="container mx-auto max-w-6xl px-4 md:px-6 py-3">
          <div className="flex space-x-6">
            <Skeleton className="h-6 w-20" />
            <Skeleton className="h-6 w-16" />
            <Skeleton className="h-6 w-18" />
          </div>
        </div>
      </div>
    </header>
  );
}

export function BannerSkeleton() {
  return (
    <section className="relative w-full bg-background">
      <div className="relative w-full h-90 md:h-90 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-teal-600/20">
          <div className="relative z-10 container mx-auto max-w-6xl px-6 md:px-8 h-full flex items-center">
            <div className="w-full text-center md:text-left max-w-2xl mx-auto md:mx-0 space-y-6">
              {/* Title skeleton */}
              <div className="space-y-3">
                <Skeleton className="h-10 md:h-12 w-full bg-white/20" />
                <Skeleton className="h-8 md:h-10 w-4/5 bg-white/20" />
              </div>
              
              {/* Subtitle skeleton */}
              <Skeleton className="h-6 w-3/4 bg-white/15" />
              
              {/* Description skeleton */}
              <div className="space-y-2">
                <Skeleton className="h-4 w-full bg-white/15" />
                <Skeleton className="h-4 w-5/6 bg-white/15" />
              </div>
              
              {/* Button skeleton */}
              <Skeleton className="h-12 w-40 bg-white/30" />
            </div>
          </div>
          <div className="absolute inset-0 bg-black/20" />
        </div>
      </div>
      
      {/* Carousel dots skeleton */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-2">
          {Array.from({ length: 3 }).map((_, i) => (
            <Skeleton
              key={i}
              className={`h-2 bg-white/50 ${
                i === 0 ? 'w-8' : 'w-2'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServicesSkeleton() {
  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        {/* Header skeleton */}
        <div className="text-center mb-8">
          <Skeleton className="h-8 w-48 mx-auto mb-3" />
          <Skeleton className="h-4 w-96 mx-auto" />
        </div>

        {/* Services grid skeleton - matches 2 columns layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="bg-white border-2 border-gray-200 rounded-xl p-4 dark:bg-gray-800 dark:border-gray-700"
            >
              <div className="flex items-center gap-4">
                {/* Icon skeleton - matches ServiceCard structure */}
                <Skeleton className="w-12 h-12 rounded-lg flex-shrink-0" />
                
                {/* Content skeleton */}
                <div className="flex-1 min-w-0 space-y-2">
                  <Skeleton className="h-5 w-full" />
                  <Skeleton className="h-4 w-4/5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}