import { TabsContent } from '@/components/ui'
import { Server, UserPermissions } from '@/types/mcp'

interface Props { server: Server; permissions: UserPermissions | null }

export default function ToolsTabContent({ server, permissions }: Props) {
  return (
    <TabsContent value="tools">
      <div className="p-4 text-sm text-muted-foreground">Tools placeholder</div>
    </TabsContent>
  )
}
