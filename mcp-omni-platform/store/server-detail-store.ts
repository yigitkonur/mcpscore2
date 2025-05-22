import { create } from 'zustand';
import { Server, UserPermissions } from '@/types/mcp';
import { getMockExternalRemoteServer, getMockOmniHostedManagedServer, getMockUserPermissions } from '@/_mock_data/servers';

interface ServerDetailState {
  serverData: Server | null;
  isLoading: boolean;
  error: string | null;
  activeTab: string;
  isInstallHelperModalOpen: boolean;
  currentUserPermissions: UserPermissions | null;

  fetchServerData: (serverName: string, isUserAdminForThisServer: boolean) => void;
  setActiveTab: (tabId: string) => void;
  openInstallHelperModal: () => void;
  closeInstallHelperModal: () => void;
  updateServerEnvVar: (name: string, value: string) => void;
}

export const useServerDetailStore = create<ServerDetailState>((set, get) => ({
  serverData: null,
  isLoading: false,
  error: null,
  activeTab: 'overview',
  isInstallHelperModalOpen: false,
  currentUserPermissions: null,

  fetchServerData: (serverName, isUserAdminForThisServer) => {
    set({ isLoading: true, error: null });
    let mockServer: Server;
    if (serverName === 'external-remote-test') {
      mockServer = getMockExternalRemoteServer(serverName);
    } else {
      mockServer = getMockOmniHostedManagedServer(serverName);
    }
    const permissions = getMockUserPermissions(isUserAdminForThisServer);
    setTimeout(() => {
      set({ serverData: mockServer, currentUserPermissions: permissions, isLoading: false, activeTab: 'overview' });
    }, 500);
  },
  setActiveTab: (tabId) => set({ activeTab: tabId }),
  openInstallHelperModal: () => set({ isInstallHelperModalOpen: true }),
  closeInstallHelperModal: () => set({ isInstallHelperModalOpen: false }),
  updateServerEnvVar: (name, value) => {
    const currentServer = get().serverData;
    if (currentServer && currentServer.deploymentDetails?.configuredEnvVars) {
      const updatedEnvVars = currentServer.deploymentDetails.configuredEnvVars.map(ev =>
        ev.name === name ? { ...ev, value } : ev
      );
      set(state => ({
        serverData: {
          ...state.serverData!,
          deploymentDetails: {
            ...state.serverData!.deploymentDetails!,
            configuredEnvVars: updatedEnvVars,
          }
        }
      }));
      console.log(`Mocked ENV VAR update: ${name} = ${value}`);
    }
  },
}));
