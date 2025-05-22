import { TabsContent } from '@/components/ui'
import { Server, UserPermissions } from '@/types/mcp'

interface Props { server: Server; permissions: UserPermissions | null }

export default function ReviewsTabContent({ server, permissions }: Props) {
  return (
    <TabsContent value="reviews">
      <div className="p-4 text-sm text-muted-foreground">Reviews placeholder</div>
    </TabsContent>
  )
}
