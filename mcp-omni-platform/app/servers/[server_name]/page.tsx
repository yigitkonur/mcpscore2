'use client';
import { useEffect } from 'react';
import { useParams } from 'next/navigation';
import { useServerDetailStore } from '@/store/server-detail-store';
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import ServerHeader from '@/components/mcp/server-detail/ServerHeader';
import RightSidebar from '@/components/mcp/server-detail/RightSidebar';
import InstallHelperModal from '@/components/mcp/server-detail/InstallHelperModal';
import OverviewTabContent from '@/components/mcp/server-detail/OverviewTabContent';
import ToolsTabContent from '@/components/mcp/server-detail/ToolsTabContent';
import SchemaConfigTabContent from '@/components/mcp/server-detail/SchemaConfigTabContent';
import InstallationUsageTabContent from '@/components/mcp/server-detail/InstallationUsageTabContent';
import SecurityScoreTabContent from '@/components/mcp/server-detail/SecurityScoreTabContent';
import ReviewsTabContent from '@/components/mcp/server-detail/ReviewsTabContent';
import UseCasesTabContent from '@/components/mcp/server-detail/UseCasesTabContent';
import RelatedItemsTabContent from '@/components/mcp/server-detail/RelatedItemsTabContent';
import VersionsTabContent from '@/components/mcp/server-detail/VersionsTabContent';
import DeploymentMonitoringTabContent from '@/components/mcp/server-detail/DeploymentMonitoringTabContent';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui';

export default function ServerDetailPage() {
  const params = useParams<{ server_name: string }>();
  const { serverData, isLoading, fetchServerData, activeTab, setActiveTab, openInstallHelperModal } = useServerDetailStore();

  useEffect(() => {
    if (params?.server_name) {
      fetchServerData(params.server_name, true);
    }
  }, [params?.server_name, fetchServerData]);

  if (isLoading || !serverData) return <div>Loading...</div>;

  const crumbs = [
    { href: '/', label: 'MCP Omni' },
    { href: '/servers', label: 'Servers' },
    { href: `/servers/${serverData.server_name}`, label: serverData.displayName }
  ];

  return (
    <div className="flex gap-4">
      <div className="flex-1">
        <Breadcrumbs items={crumbs} />
        <ServerHeader server={serverData} />
        <Tabs value={activeTab} className="mt-4">
          <TabsList>
            <TabsTrigger value="overview" onClick={() => setActiveTab('overview')}>Overview</TabsTrigger>
            <TabsTrigger value="tools" onClick={() => setActiveTab('tools')}>Tools</TabsTrigger>
            <TabsTrigger value="schemaconfig" onClick={() => setActiveTab('schemaconfig')}>Schema & Config</TabsTrigger>
            <TabsTrigger value="installation" onClick={() => setActiveTab('installation')}>Installation & Usage</TabsTrigger>
            <TabsTrigger value="security" onClick={() => setActiveTab('security')}>Security & Score</TabsTrigger>
            <TabsTrigger value="reviews" onClick={() => setActiveTab('reviews')}>Reviews & Comments</TabsTrigger>
            <TabsTrigger value="usecases" onClick={() => setActiveTab('usecases')}>Use Cases</TabsTrigger>
            <TabsTrigger value="related" onClick={() => setActiveTab('related')}>Related Items</TabsTrigger>
            <TabsTrigger value="versions" onClick={() => setActiveTab('versions')}>Versions</TabsTrigger>
            {serverData.hostingContext === 'Hosted by Omni' && (
              <TabsTrigger value="deployment" onClick={() => setActiveTab('deployment')}>Deployment & Monitoring</TabsTrigger>
            )}
          </TabsList>
          <OverviewTabContent server={serverData} permissions={null} />
          <ToolsTabContent server={serverData} permissions={null} />
          <SchemaConfigTabContent server={serverData} permissions={null} />
          <InstallationUsageTabContent server={serverData} permissions={null} />
          <SecurityScoreTabContent server={serverData} permissions={null} />
          <ReviewsTabContent server={serverData} permissions={null} />
          <UseCasesTabContent server={serverData} permissions={null} />
          <RelatedItemsTabContent server={serverData} permissions={null} />
          <VersionsTabContent server={serverData} permissions={null} />
          {serverData.hostingContext === 'Hosted by Omni' && (
            <DeploymentMonitoringTabContent server={serverData} permissions={null} />
          )}
        </Tabs>
      </div>
      <div className="w-72">
        <RightSidebar server={serverData} permissions={null} onManage={() => setActiveTab('deployment')} onGetInfo={openInstallHelperModal} />
      </div>
      <InstallHelperModal server={serverData} />
    </div>
  );
}
