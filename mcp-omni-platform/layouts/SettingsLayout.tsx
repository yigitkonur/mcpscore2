import { ReactNode } from 'react';
import { SettingsSidebarNav } from '@/components/shared/SettingsSidebarNav';

export default function SettingsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex">
      <SettingsSidebarNav />
      <div className="flex-grow p-4">{children}</div>
    </div>
  );
}
