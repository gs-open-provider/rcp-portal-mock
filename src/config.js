import themes from './themes';

const ENVIRONEMTS = {
  dev: {
    auth: 'http://localhost:8080/',
    provider: 'http://localhost:9090/',
    news: 'http://localhost:8081/'
  },
  gcloudAsia: {
    auth: 'http://localhost:8080/',
    provider: 'http://localhost:9090/',
    news: 'http://localhost:8081/'
  },
  gcloudEurope: {
    auth: 'http://localhost:8080/',
    provider: 'http://localhost:9090/',
    news: 'http://localhost:8081/'
  }
};

const API_CONFIG = {
  ...ENVIRONEMTS.dev
};

export const API = {
  getLanguages: `${API_CONFIG.provider}v1/admin/languages`,
  getLanguageJSON: `${API_CONFIG.provider}v1/admin/languages/json`
};

export const configuredTheme = themes[0].theme;

export const configuredLayout = {
  currentLayout: 'classic',
  notificationsOpen: false
};
