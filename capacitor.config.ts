import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  // Confirm this package/bundle identifier matches the app registered in AdMob.
  appId: process.env.CAPACITOR_APP_ID || 'com.danat.quiz',
  appName: 'Danat Quiz',
  webDir: 'dist',
  android: {
    allowMixedContent: false
  }
};

export default config;
