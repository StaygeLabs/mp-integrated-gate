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

export const MNET_PLUS_URL = 'https://www.mnetplus.world';
export const MNET_PLUS_APP_URL = {
  apple: 'https://apps.apple.com/us/app/mnet-plus/id6443405421',
  google: 'https://play.google.com/store/apps/details?id=world.mnetplus',
};

export const PLUS_CON_APP_URL = {
  apple: 'https://apps.apple.com/kr/app/pluscon/id6479585955',
  google: 'https://play.google.com/store/apps/details?id=com.mkconbase',
};

export const PLUS_CHAT_APP_URL = {
  apple: 'https://apps.apple.com/kr/app/plus-chat-플러스챗/id6446480483',
  google:
    'https://play.google.com/store/apps/details?id=world.mnetplus.talk.aos',
};
