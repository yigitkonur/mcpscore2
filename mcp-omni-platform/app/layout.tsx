import './globals.css';
import { ReactNode } from 'react';
import AppLayout from '@/layouts/AppLayout';
import { ErrorBoundary } from '@/components/shared/ErrorBoundary';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ErrorBoundary>
          <AppLayout>{children}</AppLayout>
        </ErrorBoundary>
      </body>
    </html>
  );
}
