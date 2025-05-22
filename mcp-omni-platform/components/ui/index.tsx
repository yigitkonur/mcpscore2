export function Badge({ children, variant }: { children: React.ReactNode; variant?: string }) {
  return <span className={`px-2 py-1 border rounded ${variant}`}>{children}</span>;
}

export function Select({ children }: { children: React.ReactNode }) { return <div>{children}</div>; }
export function SelectTrigger({ children }: { children: React.ReactNode }) { return <button>{children}</button>; }
export function SelectContent({ children }: { children: React.ReactNode }) { return <div>{children}</div>; }
export function SelectItem({ children }: { children: React.ReactNode; value: string }) { return <div>{children}</div>; }
