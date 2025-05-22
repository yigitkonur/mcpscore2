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
      {server.stats && (
        <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
          {server.stats.usage && <span><McpIcon name="download" className="mr-1" />{server.stats.usage}</span>}
          {server.stats.rating && <span><McpIcon name="star" className="mr-1" />{server.stats.rating}</span>}
          {server.stats.forks && <span><McpIcon name="fork" className="mr-1" />{server.stats.forks}</span>}
          {server.stats.qualityScore && <span><McpIcon name="deployment" className="mr-1" />{server.stats.qualityScore}</span>}
        </div>
      )}
      {server.dates && (
        <div className="text-sm text-muted-foreground">
          Published {server.dates.published} • Updated {server.dates.lastUpdated}
        </div>
      )}
      {server.externalLinks && (
        <div className="flex gap-2 text-sm">
          {server.externalLinks.sourceRepo && <a className="text-blue-600" href={server.externalLinks.sourceRepo}>Source</a>}
          {server.externalLinks.issueTracker && <a className="text-blue-600" href={server.externalLinks.issueTracker}>Issues</a>}
          {server.externalLinks.officialDocs && <a className="text-blue-600" href={server.externalLinks.officialDocs}>Docs</a>}
        </div>
      )}
    </div>
  );
}
