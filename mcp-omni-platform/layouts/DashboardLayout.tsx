import { ReactNode } from 'react';
import { DashboardSidebarNav } from '@/components/shared/DashboardSidebarNav';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex">
      <DashboardSidebarNav />
      <div className="flex-grow p-4">{children}</div>
    </div>
  );
}
