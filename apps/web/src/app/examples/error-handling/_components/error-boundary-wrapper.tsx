"use client";

import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "./fallbacks";

interface ErrorBoundaryWrapperProps {
  children: React.ReactNode;
}

export function ErrorBoundaryWrapper({ children }: ErrorBoundaryWrapperProps) {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={(error) => console.error("Error caught by boundary:", error)}
    >
      {children}
    </ErrorBoundary>
  );
}