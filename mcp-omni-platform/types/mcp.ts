export type ServerHostingType = 'External Server' | 'Hosted by Omni';
export type ServerApiType = 'Remote (SSE/HTTP)' | 'Local (STDIO)';
export type ServerStatusBadge = 'Official' | 'Verified' | 'Community';
export type DeploymentStatus = 'Running' | 'Stopped' | 'Building' | 'Failed' | 'Starting' | 'Stopping...';

export interface EnvVar {
  name: string;
  value?: string;
  isSecret: boolean;
  description?: string;
  required?: boolean;
  defaultValue?: string;
}

export interface ToolParameter {
  name: string;
  type: string;
  required: boolean;
  description: string;
  default?: any;
}

export interface ToolDefinition {
  name: string;
  description: string;
  parameters: ToolParameter[];
  outputSchema?: any;
  canonicalPageUrl?: string;
}

export interface ServerSchemaConfig {
  connection: { [key: string]: any };
  runtimeConfig: EnvVar[];
  manifest?: any;
}

export interface Server {
  id: string;
  server_name: string;
  displayName: string;
  namespace?: string;
  author?: string;
  isVerifiedAuthor?: boolean;
  statusBadge?: ServerStatusBadge;
  version: string;
  versions: string[];
  apiType: ServerApiType;
  hostingContext: ServerHostingType;
  tags: string[];
  stats?: {
    usage?: string;
    rating?: number;
    ratingCount?: number;
    forks?: number;
    rank?: string;
    qualityScore?: string;
    securityStatus?: 'Passed' | 'Failed' | 'N/A';
  };
  dates?: {
    published: string;
    lastUpdated: string;
  };
  externalLinks?: {
    sourceRepo?: string;
    issueTracker?: string;
    officialDocs?: string;
  };
  description: string;
  readmeContent: string;
  tools: ToolDefinition[];
  schemaConfig: ServerSchemaConfig;
  deploymentDetails?: {
    status: DeploymentStatus;
    instanceId?: string;
    sseEndpointUrl?: string;
    resourceUsage?: { cpu: string; memory: string; networkIO: string; callCounts: number; errorRate: number };
    configuredEnvVars?: EnvVar[];
    buildLogs?: string[];
    runtimeLogs?: string[];
    lastDeployed?: string;
  };
  registrySources?: { name: string; logoUrl?: string; sourceUrl: string }[];
}

export interface User {
  id: string;
  name?: string;
  email: string;
  avatarUrl?: string;
}

export interface UserPermissions {
  canManageDeployment: boolean;
  canEditOrgSettings: boolean;
}
