import Link from 'next/link';

export function DashboardSidebarNav() {
  return (
    <nav className="p-4 space-y-2 border-r">
      <Link href="/dashboard/hosted-servers">Hosted Servers</Link>
    </nav>
  );
}
