import { TabsContent } from '@/components/ui'
import { Server, UserPermissions } from '@/types/mcp'

interface Props { server: Server; permissions: UserPermissions | null }

export default function SecurityScoreTabContent({ server, permissions }: Props) {
  return (
    <TabsContent value="security">
      <div className="p-4 text-sm text-muted-foreground">Security & Score placeholder</div>
    </TabsContent>
  )
}
