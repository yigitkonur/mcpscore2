import { TabsContent } from '@/components/ui'
import { Server, UserPermissions } from '@/types/mcp'

interface Props { server: Server; permissions: UserPermissions | null }

export default function InstallationUsageTabContent({ server, permissions }: Props) {
  return (
    <TabsContent value="installation">
      <div className="p-4 text-sm text-muted-foreground">Installation & Usage placeholder</div>
    </TabsContent>
  )
}
