export function Badge({ children, variant }: { children: React.ReactNode; variant?: string }) {
  return <span className={`px-2 py-1 border rounded ${variant}`}>{children}</span>;
}

export function Button({ children, onClick, variant = 'default', size = 'default' }: { children: React.ReactNode; onClick?: () => void; variant?: string; size?: string }) {
  const styles = variant === 'outline' ? 'border' : 'bg-blue-600 text-white'
  return (
    <button onClick={onClick} className={`px-2 py-1 rounded ${styles}`}>{children}</button>
  )
}

export function Select({ children }: { children: React.ReactNode }) { return <div>{children}</div>; }
export function SelectTrigger({ children }: { children: React.ReactNode }) { return <button>{children}</button>; }
export function SelectContent({ children }: { children: React.ReactNode }) { return <div>{children}</div>; }
export function SelectItem({ children }: { children: React.ReactNode; value: string }) { return <div>{children}</div>; }

export function Tabs({ children, value, className }: { children: React.ReactNode; value?: string; className?: string }) { return <div className={className}>{children}</div> }
export function TabsList({ children }: { children: React.ReactNode }) { return <div className="flex gap-2 border-b mb-2">{children}</div> }
export function TabsTrigger({ children, value }: { children: React.ReactNode; value: string }) { return <button className="px-2 py-1" data-value={value}>{children}</button> }
export function TabsContent({ children, value }: { children: React.ReactNode; value: string }) { return <div data-value={value}>{children}</div> }

export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={`border p-1 rounded ${props.className||''}`} />
}

export function Dialog({ children, open, onOpenChange }: { children: React.ReactNode; open?: boolean; onOpenChange?: (v:boolean)=>void }) { return open ? <div>{children}</div> : null }
export function DialogTrigger({ children }: { children: React.ReactNode }) { return <>{children}</> }
export function DialogContent({ children }: { children: React.ReactNode }) { return <div className="border p-4 bg-white rounded shadow-md">{children}</div> }
export function DialogHeader({ children }: { children: React.ReactNode }) { return <div className="mb-2">{children}</div> }
export function DialogTitle({ children }: { children: React.ReactNode }) { return <h3 className="text-lg font-semibold">{children}</h3> }
export function DialogDescription({ children }: { children: React.ReactNode }) { return <p className="text-sm text-muted-foreground">{children}</p> }
export function DialogClose({ children, asChild }: { children: React.ReactNode; asChild?: boolean }) { return <div className="mt-2">{children}</div> }
