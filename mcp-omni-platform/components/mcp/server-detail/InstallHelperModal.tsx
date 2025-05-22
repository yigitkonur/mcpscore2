'use client'
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose, Tabs, TabsList, TabsTrigger, TabsContent, Button } from '@/components/ui'
import { Server } from '@/types/mcp'
import { useServerDetailStore } from '@/store/server-detail-store'
import { McpIcon } from '@/components/shared/McpIcon'

export default function InstallHelperModal({ server }: { server: Server }) {
  const { isInstallHelperModalOpen, closeInstallHelperModal } = useServerDetailStore()
  return (
    <Dialog open={isInstallHelperModalOpen} onOpenChange={closeInstallHelperModal}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Connection Info</DialogTitle>
          <DialogDescription>Use these snippets to connect</DialogDescription>
        </DialogHeader>
        <Tabs value="json">
          <TabsList>
            <TabsTrigger value="json">JSON</TabsTrigger>
            <TabsTrigger value="url">URL</TabsTrigger>
          </TabsList>
          <TabsContent value="json">
            <pre className="bg-muted p-2 rounded text-sm overflow-auto">{JSON.stringify({endpoint: server.deploymentDetails?.sseEndpointUrl}, null, 2)}</pre>
          </TabsContent>
          <TabsContent value="url">
            <div className="flex items-center gap-2"><input className="w-full border p-1" readOnly value={server.deploymentDetails?.sseEndpointUrl}/><Button size="icon"><McpIcon name="copy"/></Button></div>
          </TabsContent>
        </Tabs>
        <DialogClose asChild>
          <Button variant="outline">Close</Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  )
}
