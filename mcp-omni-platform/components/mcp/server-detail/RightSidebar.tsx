import { Server, UserPermissions } from '@/types/mcp'
import { Button, Badge } from '@/components/ui'
import { McpIcon } from '@/components/shared/McpIcon'

interface Props {
  server: Server
  permissions: UserPermissions | null
  onManage?: () => void
  onGetInfo?: () => void
}

export default function RightSidebar({ server, permissions, onManage, onGetInfo }: Props) {
  const isHosted = server.hostingContext === 'Hosted by Omni'
  return (
    <aside className="p-4 space-y-4">
      <div className="space-y-2">
        {isHosted && permissions?.canManageDeployment && (
          <Button onClick={onManage}><McpIcon name="settings" className="mr-2"/>Manage Deployment</Button>
        )}
        <Button onClick={onGetInfo}><McpIcon name="code" className="mr-2"/>Get Connection Info</Button>
        <Button variant="outline"><McpIcon name="playground" className="mr-2"/>Test in Playground</Button>
        <Button variant="outline"><McpIcon name="bookmark" className="mr-2"/>Bookmark</Button>
      </div>
      <div className="border p-2 rounded">
        <div className="font-semibold mb-2">Summary</div>
        <div className="text-sm space-y-1">
          <div>Type: <Badge>{server.apiType}</Badge></div>
          <div>Hosting: <Badge>{server.hostingContext}</Badge></div>
          {server.author && <div>Author: {server.author}</div>}
        </div>
      </div>
    </aside>
  )
}
