import { Server, UserPermissions } from '@/types/mcp';

export const getMockExternalRemoteServer = (name: string): Server => ({
  id: name,
  server_name: name,
  displayName: 'Community GitHub Server (Remote)',
  author: 'community-dev',
  apiType: 'Remote (SSE/HTTP)',
  hostingContext: 'External Server',
  version: '1.0.0',
  versions: ['1.0.0', '0.9.0'],
  tags: ['community'],
  stats: { usage: '1.2k/wk', rating: 4.5, forks: 10, qualityScore: 'B+' },
  dates: { published: '2024-01-15', lastUpdated: '2024-04-20' },
  externalLinks: {
    sourceRepo: 'https://github.com/example/server',
    issueTracker: 'https://github.com/example/server/issues',
    officialDocs: 'https://example.com/docs'
  },
  description: 'An external server hosted on GitHub.',
  readmeContent: '# External Remote Server\nThis is a test server.',
  tools: [
    {
      name: 'sayHello',
      description: 'Returns a greeting',
      parameters: [{ name: 'name', type: 'string', required: true, description: 'Name to greet' }],
      outputSchema: { type: 'string' },
      canonicalPageUrl: '/tools/sayHello'
    }
  ],
  schemaConfig: {
    connection: { baseUrlPattern: 'https://api.example.com/{version}' },
    runtimeConfig: [{ name: 'API_KEY', isSecret: true, description: 'API Key', required: true }],
    manifest: { name, version: '1.0.0' }
  },
});

export const getMockOmniHostedManagedServer = (name: string): Server => ({
  id: name,
  server_name: name,
  displayName: 'My Hosted Salesforce Server',
  author: 'omni-user',
  apiType: 'Remote (SSE/HTTP)',
  hostingContext: 'Hosted by Omni',
  version: '1.0.0',
  versions: ['1.0.0'],
  tags: ['hosted'],
  stats: { usage: '5k/wk', rating: 4.8, forks: 2, qualityScore: 'A' },
  dates: { published: '2024-05-10', lastUpdated: '2024-05-20' },
  description: 'An Omni-hosted server.',
  readmeContent: '# My Hosted Server\nManaged by Omni.',
  tools: [
    {
      name: 'getLead',
      description: 'Fetch lead info',
      parameters: [{ name: 'id', type: 'string', required: true, description: 'Lead ID' }],
      outputSchema: { type: 'object' }
    }
  ],
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
