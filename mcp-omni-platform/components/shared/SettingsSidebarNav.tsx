import Link from 'next/link';

export function SettingsSidebarNav() {
  return (
    <nav className="p-4 space-y-2 border-r">
      <Link href="/settings/profile">Profile</Link><br />
      <Link href="/settings/organization">Organization</Link><br />
      <Link href="/settings/members">Members</Link><br />
      <Link href="/settings/billing">Billing</Link><br />
      <Link href="/settings/api-tokens">API Tokens</Link><br />
      <Link href="/settings/serversets">Serversets</Link>
    </nav>
  );
}
