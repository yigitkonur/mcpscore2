import { Server } from '@/types/mcp';
import { Badge, Select, SelectContent, SelectItem, SelectTrigger } from '@/components/ui';
import { McpIcon } from '@/components/shared/McpIcon';

export default function ServerHeader({ server }: { server: Server }) {
  return (
    <div className="flex flex-col gap-2 p-4 border-b">
      <h1 className="text-2xl font-bold">{server.displayName}</h1>
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <span>by {server.author}</span>
        {server.isVerifiedAuthor && <McpIcon name="shield" className="text-blue-500" />}
        {server.statusBadge && <Badge variant="outline">{server.statusBadge}</Badge>}
      </div>
      <Select>
        <SelectTrigger>{server.version}</SelectTrigger>
        <SelectContent>
          {server.versions.map(v => <SelectItem key={v} value={v}>{v}</SelectItem>)}
        </SelectContent>
      </Select>
      <div className="flex flex-wrap gap-2 mt-2">
        <Badge variant="secondary"><McpIcon name="api" className="mr-1" /> {server.apiType}</Badge>
        <Badge variant="secondary"><McpIcon name={server.hostingContext === 'Hosted by Omni' ? 'omnilogo' : 'externallink'} className="mr-1" /> {server.hostingContext}</Badge>
      </div>
      <div className="flex flex-wrap gap-1 mt-2">
        {server.tags.map(tag => <Badge key={tag} variant="outline">{tag}</Badge>)}
      </div>
    </div>
  );
}
