import { create } from 'zustand';

type AppID = 'finder' | 'vscode' | 'safari' | 'terminal' | 'mail' | 'settings';

interface AppState {
  openApps: AppID[];
  activeApp: AppID | null;
  isDarkMode: boolean;
  toggleApp: (id: AppID) => void;
  closeApp: (id: AppID) => void;
  bringToFront: (id: AppID) => void;
  toggleTheme: () => void;
}

export const useStore = create<AppState>((set) => ({
  openApps: [],
  activeApp: null,
  isDarkMode: true, // Default to dark
  toggleApp: (id) => set((state) => {
    if (state.openApps.includes(id)) {
      // If open, just focus it
      return { activeApp: id };
    }
    return { openApps: [...state.openApps, id], activeApp: id };
  }),
  closeApp: (id) => set((state) => ({
    openApps: state.openApps.filter((app) => app !== id),
    activeApp: state.openApps.length > 1 ? state.openApps[state.openApps.length - 2] : null,
  })),
  bringToFront: (id) => set({ activeApp: id }),
  toggleTheme: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
}));