import { TabsContent } from '@/components/ui'
import { Server, UserPermissions } from '@/types/mcp'

interface Props { server: Server; permissions: UserPermissions | null }

export default function RelatedItemsTabContent({ server, permissions }: Props) {
  return (
    <TabsContent value="related">
      <div className="p-4 text-sm text-muted-foreground">Related Items placeholder</div>
    </TabsContent>
  )
}
