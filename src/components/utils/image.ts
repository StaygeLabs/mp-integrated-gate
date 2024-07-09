export const USER_PROFILE_IMAGE_WIDTH = {
  tiny: 18,
  small: 44,
  medium: 74,
  large: 130,
};

export const COMMUNITY_PROFILE_IMAGE_WIDTH = {
  tiny: 18,
  small: 44,
  large: 70,
};

export const ARTIST_PROFILE_IMAGE_WIDTH = {
  tiny: 18,
  small: 44,
  large: 70,
};

export const VOTE_RESULT_IMAGE_WIDTH = 66;
export const TOPIC_IMAGE_WIDTH = {
  tiny: 20,
};
export const COMMUNITY_LIST_IMAGE_WIDTH = 104;
export const NOW_IMAGE_WIDTH = 140;
export const BANNER_IMAGE_HEIGHT = 100;
export const NOTIFICATION_IMAGE_WIDTH = 60;
export const NOTIFICATION_IMAGE_HEIGHT = 60;

// eslint-disable-next-line import/no-mutable-exports
export let webpSupportAsync: boolean | undefined;

export async function supportWebp() {
  return new Promise((resolve) => {
    const image = new Image();
    image.onerror = () => {
      webpSupportAsync = false;
      return resolve(false);
    };
    image.onload = () => {
      webpSupportAsync = image.width === 1;
      return resolve(image.width === 1);
    };
    image.src =
      'data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=';
  }).catch(() => {
    webpSupportAsync = false;
    return false;
  });
}

supportWebp();
