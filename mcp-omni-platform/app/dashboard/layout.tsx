import { ReactNode } from 'react';
import DashboardLayout from '@/layouts/DashboardLayout';

export default function DashboardSectionLayout({ children }: { children: ReactNode }) {
  return <DashboardLayout>{children}</DashboardLayout>;
}
