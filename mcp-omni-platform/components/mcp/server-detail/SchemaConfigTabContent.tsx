import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui'
import { Server, UserPermissions } from '@/types/mcp'

interface Props { server: Server; permissions: UserPermissions | null }

export default function SchemaConfigTabContent({ server, permissions }: Props) {
  return (
    <Tabs value="connection" className="p-4">
      <TabsList>
        <TabsTrigger value="connection">Connection</TabsTrigger>
        <TabsTrigger value="runtimeconfig">Runtime Config</TabsTrigger>
        <TabsTrigger value="manifest">Manifest</TabsTrigger>
      </TabsList>
      <TabsContent value="connection"><div>Connection info placeholder</div></TabsContent>
      <TabsContent value="runtimeconfig"><div>Runtime config placeholder</div></TabsContent>
      <TabsContent value="manifest"><div>Manifest placeholder</div></TabsContent>
    </Tabs>
  )
}
