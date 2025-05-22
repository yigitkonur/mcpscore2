import { ReactNode } from 'react';
import MarketingLayout from '@/layouts/MarketingLayout';

export default function MarketingSectionLayout({ children }: { children: ReactNode }) {
  return <MarketingLayout>{children}</MarketingLayout>;
}
