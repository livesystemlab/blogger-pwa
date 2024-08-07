import type { Config } from './types';

export default {
  version: '1.0',
  id: '/',
  name: 'The Pentester Diaries 2.0',
  shortName: 'Pentester Diaries 2.0 ',
  description: 'A cybersecurity and infosec , penetration testing blog with steroids!!',
  direction: 'auto',
  language: 'en-US',
  backgroundColor: '#000',
  themeColor: '#000',
  display: 'standalone',
  orientation: 'any',
  scope: '/',
  startUrl: 'https://thepentesterdiaries.blogspot.com',
  appleStatusBarStyle: 'black-translucent',
  preferRelatedApplications: false,
  shortcuts: [
    {
      name: 'Shortcut 1',
      shortName: 'Shortcut 1',
      description: 'Shortcut 1 description goes here...',
      url: '/search/label/shortcut-1?utm_source=homescreen',
    },
    {
      name: 'Shortcut 2',
      shortName: 'Shortcut 2',
      description: 'Shortcut 2 description goes here...',
      url: '/search/label/shortcut-2?utm_source=homescreen',
    },
  ],
  pwa: {
    logs: true,
    // OneSignal is not available if you are not using cloudflare workers
    oneSignalEnabled: false,
    oneSignalConfig: {
      appId: '********-****-****-****-************',
      allowLocalhostAsSecureOrigin: true,
    },
  },
  // Please replace with your blog url if you are using CDN (JsDelivr)
  origin: 'https://thepentesterdiaries.blogspot.com',
} satisfies Config;
