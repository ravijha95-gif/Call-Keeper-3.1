import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.callkeeper.score',
  appName: 'Call Keeper',
  webDir: 'www',
  bundledWebRuntime: false,
  backgroundColor: '#0e1014',
  android: {
    allowMixedContent: false
  }
};

export default config;
