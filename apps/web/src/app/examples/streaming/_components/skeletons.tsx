export function ComponentSkeleton() {
  return (
    <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg animate-pulse">
      <div className="flex items-center gap-2 mb-2">
        <div className="h-5 w-5 bg-gray-300 rounded-full"></div>
        <div className="h-4 w-32 bg-gray-300 rounded"></div>
      </div>
      <div className="space-y-2">
        <div className="h-3 w-full bg-gray-300 rounded"></div>
        <div className="h-3 w-3/4 bg-gray-300 rounded"></div>
      </div>
    </div>
  );
}

export function DataSkeleton({}: { label: string }) {
  return (
    <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg animate-pulse">
      <div className="flex items-center gap-2 mb-2">
        <div className="h-5 w-5 bg-gray-300 rounded-full"></div>
        <div className="h-4 w-20 bg-gray-300 rounded"></div>
      </div>
      <div className="h-8 w-16 bg-gray-300 rounded mb-1"></div>
      <div className="h-3 w-24 bg-gray-300 rounded"></div>
    </div>
  );
}