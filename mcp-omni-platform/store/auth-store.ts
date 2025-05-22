import { create } from 'zustand';
import { User, UserPermissions } from '@/types/mcp';

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  permissions: UserPermissions | null;
  login: (user: User, permissions: UserPermissions) => void;
  logout: () => void;
  setServerSpecificPermissions: (canManageDeployment: boolean) => void;
}

export const useAuthStore = create<AuthState>((set, get) => ({
  isAuthenticated: false,
  user: null,
  permissions: null,
  login: (user, permissions) => set({ isAuthenticated: true, user, permissions }),
  logout: () => set({ isAuthenticated: false, user: null, permissions: null }),
  setServerSpecificPermissions: (canManageDeployment) => {
    const currentPermissions = get().permissions;
    set({ permissions: { ...currentPermissions, canManageDeployment } as UserPermissions });
  }
}));
