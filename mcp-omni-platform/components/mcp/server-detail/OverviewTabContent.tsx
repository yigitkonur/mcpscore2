import { TabsContent } from '@/components/ui'
import { Server, UserPermissions } from '@/types/mcp'

interface Props { server: Server; permissions: UserPermissions | null }

export default function OverviewTabContent({ server, permissions }: Props) {
  return (
    <TabsContent value="overview">
      <div className="p-4 text-sm text-muted-foreground">Overview placeholder</div>
    </TabsContent>
  )
}
