import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t p-4 text-center text-sm text-muted-foreground">
      © {new Date().getFullYear()} MCP Omni. All rights reserved.
      <div className="space-x-4 mt-2">
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/terms">Terms</Link>
        <Link href="/privacy">Privacy</Link>
      </div>
    </footer>
  );
}
