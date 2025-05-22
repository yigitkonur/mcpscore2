import { ReactNode } from 'react';
import { MainNav } from '@/components/shared/MainNav';
import { Footer } from '@/components/shared/Footer';

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <MainNav />
      <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
      <Footer />
    </div>
  );
}
