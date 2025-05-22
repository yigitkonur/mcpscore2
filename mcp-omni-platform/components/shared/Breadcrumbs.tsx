import Link from 'next/link'
import { McpIcon } from './McpIcon'

interface Crumb { href: string; label: string }

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav className="text-sm mb-2">
      {items.map((c, i) => (
        <span key={i} className="mr-1">
          {i > 0 && <McpIcon name="chevronright" className="inline-block mx-1" />}
          <Link href={c.href} className="text-blue-600 hover:underline">{c.label}</Link>
        </span>
      ))}
    </nav>
  )
}
