import { TabsContent } from '@/components/ui'
import { Server, UserPermissions } from '@/types/mcp'

interface Props { server: Server; permissions: UserPermissions | null }

export default function DeploymentMonitoringTabContent({ server, permissions }: Props) {
  return (
    <TabsContent value="deployment">
      <div className="p-4 text-sm text-muted-foreground">Deployment & Monitoring placeholder</div>
    </TabsContent>
  )
}
