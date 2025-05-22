import { ReactNode } from 'react';
import SettingsLayout from '@/layouts/SettingsLayout';

export default function SettingsSectionLayout({ children }: { children: ReactNode }) {
  return <SettingsLayout>{children}</SettingsLayout>;
}
