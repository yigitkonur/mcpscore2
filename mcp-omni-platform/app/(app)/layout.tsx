import { ReactNode } from 'react';
import AppLayout from '@/layouts/AppLayout';

export default function AppSectionLayout({ children }: { children: ReactNode }) {
  return <AppLayout>{children}</AppLayout>;
}
