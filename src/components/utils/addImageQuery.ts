import { memoize } from 'lodash';
import { webpSupportAsync } from './image';

/**
 * @ref https://stackoverflow.com/questions/5573096/detecting-webp-support
 */
function supportsFormatWebp() {
  const elem = document.createElement('canvas');

  if (elem.getContext && elem.getContext('2d')) {
    // was able or not to get WebP representation
    return elem.toDataURL('image/webp').indexOf('data:image/webp') === 0;
  }
  // very old browser like IE 8, canvas not supported
  return false;
}

const memoizeSupportsFormatWebp = memoize(supportsFormatWebp);

function isDataUri(uri?: string) {
  return uri?.startsWith('data:');
}

/**
 * @ref https://www.freecodecamp.org/news/how-to-validate-urls-in-javascript/
 */
function isValidUrl(str: string) {
  try {
    const temp = new URL(str);
    console.log(temp);
    return true;
  } catch (err) {
    return false;
  }
}

function addDprQuery(
  url: URL,
  width?: number,
  height?: number,
  fixDpr?: boolean,
) {
  const nextUrl = new URL(url);

  const dpr = fixDpr ? 2 : Math.max(window.devicePixelRatio, 2);
  if (width)
    nextUrl.searchParams.set(
      'w',
      width ? Math.round(width * dpr).toString() : '',
    );
  if (height)
    nextUrl.searchParams.set(
      'h',
      height ? Math.round(height * dpr).toString() : '',
    );
  return nextUrl;
}

function addWebpQuery(url: URL) {
  const nextUrl = new URL(url);
  nextUrl.searchParams.set('webp', '1');
  return nextUrl;
}

export function addImageQuery(
  uri: string,
  width?: number,
  height?: number,
  options?: {
    isProfile?: boolean;
  },
) {
  let w;
  if (width) {
    w = width > 992 ? 620 : width;
  }
  if (
    (memoizeSupportsFormatWebp() || webpSupportAsync) &&
    !isDataUri(uri) &&
    isValidUrl(uri)
  ) {
    let url = new URL(uri);
    url = addWebpQuery(url);
    if (width || height) url = addDprQuery(url, w, height, options?.isProfile);
    return url.toString();
  }
  return uri;
}
