import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', {
  state: (): {
    primary: string;
    secondary: string;
  } => {
    return {
      primary: '#0054a4',
      secondary: '#a45000',
    }
  },
  getters: {
    primaryColor: (state) => state.primary
  },
  actions: {
    changeColors(primary: string, secondary: string) {
      this.primary = primary
      this.secondary = secondary
    },
  }
})