import Link from 'next/link';
import { McpIcon } from './McpIcon';

export function MainNav() {
  return (
    <nav className="border-b p-4 flex justify-between items-center">
      <Link href="/" className="font-bold text-lg flex items-center">
        <McpIcon name="OmniLogo" className="h-6 w-6 mr-2" />
        MCP Omni
      </Link>
      <div className="space-x-4">
        <Link href="/registry">Registry</Link>
        <Link href="/playground">Playground</Link>
        <Link href="/dashboard/hosted-servers">Dashboard</Link>
        <Link href="/posts">Blog</Link>
        <Link href="/pricing">Pricing</Link>
        <Link href="/settings/profile">Settings</Link>
      </div>
    </nav>
  );
}
