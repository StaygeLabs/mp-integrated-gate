export const REACT_APP_FALLBACK_LANGUAGE = 'en';
export const SUPPORTED_LANGUAGES = [
  'en',
  'ko',
  'ja',
  'zh-cn',
  'zh-tw',
] as const;
export const APP_ID = 'root';

export const DEFAULT_STALE_TIME = 30000 as const; // 30초

export const CONFIG = {
  apiEndpoint: {
    live: 'https://www.mnetplus.world',
    dev: 'https://rtc-api-dev.stayge.net',
    stg: 'https://www.mnet-stg.stayge.io',
  }[import.meta.env.MODE]!,
  accountUrl: {
    live: 'https://id.mnetplus.world',
    dev: 'https://id-mnet.stayge.net',
    stg: 'https://id.mnet-stg.stayge.io',
  }[import.meta.env.MODE!],
};
