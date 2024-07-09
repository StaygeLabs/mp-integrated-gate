export const REACT_APP_FALLBACK_LANGUAGE = 'en';
export const SUPPORTED_LANGUAGES = [
  'en',
  'ko',
  'ja',
  'zh',
  'zh-cn',
  'zh-tw',
  'dev',
] as const;
export const APP_ID = 'root';

export const DEFAULT_STALE_TIME = 30000 as const; // 30초

export const IS_LIVE = window.location.href.indexOf('youmeon.live') !== -1;
export const YOUMEON_API_FRONT_BASE_URL = IS_LIVE
  ? 'https://www.youmeon.live'
  : 'https://youmeon-dev.stayge.net';
