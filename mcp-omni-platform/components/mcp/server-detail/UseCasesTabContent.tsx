import { TabsContent } from '@/components/ui'
import { Server, UserPermissions } from '@/types/mcp'

interface Props { server: Server; permissions: UserPermissions | null }

export default function UseCasesTabContent({ server, permissions }: Props) {
  return (
    <TabsContent value="usecases">
      <div className="p-4 text-sm text-muted-foreground">Use Cases placeholder</div>
    </TabsContent>
  )
}
