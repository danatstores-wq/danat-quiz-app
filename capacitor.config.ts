import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.danat.quiz',
  appName: 'Danat Quiz',
  webDir: 'dist',
  bundledWebRuntime: false,
  android: {
    allowMixedContent: false
  }
};

export default config;
