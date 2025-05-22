import { Server, UserPermissions } from '@/types/mcp';

export const getMockExternalRemoteServer = (name: string): Server => ({
  id: name,
  server_name: name,
  displayName: 'Community GitHub Server (Remote)',
  apiType: 'Remote (SSE/HTTP)',
  hostingContext: 'External Server',
  version: '1.0.0',
  versions: ['1.0.0'],
  tags: ['community'],
  description: 'An external server hosted on GitHub.',
  readmeContent: '# External Remote Server\nThis is a test server.',
  tools: [],
  schemaConfig: { connection: {}, runtimeConfig: [], manifest: {} },
});

export const getMockOmniHostedManagedServer = (name: string): Server => ({
  id: name,
  server_name: name,
  displayName: 'My Hosted Salesforce Server',
  apiType: 'Remote (SSE/HTTP)',
  hostingContext: 'Hosted by Omni',
  version: '1.0.0',
  versions: ['1.0.0'],
  tags: ['hosted'],
  description: 'An Omni-hosted server.',
  readmeContent: '# My Hosted Server\nManaged by Omni.',
  tools: [],
  schemaConfig: { connection: {}, runtimeConfig: [], manifest: {} },
  deploymentDetails: {
    status: 'Running',
    sseEndpointUrl: `wss://${name}.omni.mcphub.ai/`,
    configuredEnvVars: [{ name: 'API_KEY', isSecret: true, value: '****' }],
  },
});

export const getMockUserPermissions = (canManage: boolean): UserPermissions => ({
  canManageDeployment: canManage,
  canEditOrgSettings: canManage,
});
