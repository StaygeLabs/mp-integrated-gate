// import { Black, ColorTokens, White } from '@components/colors/colors';
// import { fontFamily, fontFamilyWithJP } from '@components/cssToken/font-family';
// import { BodyTokens } from '@components/fonts/bodys';
// import { CaptionTokens } from '@components/fonts/captions';
// import { HeadingTokens } from '@components/fonts/headings';
// import { css, Global } from '@emotion/react';
// import { getCurrentLocale } from '@store/locale/getCurrentLocale';
// import { ColorMode, themeAtom } from '@store/theme/atom';
// import { checkNeedColorModePage } from '@store/theme/ThemeProvider';
// import { isDarkTheme } from '@store/utils/hooks/useColorMode';
// import { useRecoilValue } from 'recoil';

import { ColorTokens } from 'components/cssToken/colors';
import { CaptionTokens } from 'components/fonts/captions';
import { BodyTokens } from 'components/fonts/bodys';
import { HeadingTokens } from 'components/fonts/headings';
import { Global, css } from '@emotion/react';
import allStar from './css/allstar';
import OmniGothic from './css/omnigothic';
import { globalToastifyCss } from './css/toastifyCss';

interface GlobalStyleProps {}

type MergeProps = GlobalStyleProps;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function GlobalStyle(props: MergeProps) {
  return (
    <Global
      styles={css`
        ${globalToastifyCss}
        * {
          box-sizing: border-box;
          font-family: 'Pretendard';
        }

        @font-face {
          font-family: 'Pretendard';
          font-weight: 900;
          font-display: fallback;
          src:
            local('Pretendard Black'),
            url('/static/fonts/woff2/Pretendard-Black.woff2') format('woff2'),
            url('/static/fonts/woff/Pretendard-Black.woff') format('woff');
        }

        @font-face {
          font-family: 'Pretendard';
          font-weight: 800;
          font-display: fallback;
          src:
            local('Pretendard ExtraBold'),
            url('/static/fonts/woff2/Pretendard-ExtraBold.woff2')
              format('woff2'),
            url('/static/fonts/woff/Pretendard-ExtraBold.woff') format('woff');
        }

        @font-face {
          font-family: 'Pretendard';
          font-weight: 700;
          font-display: fallback;
          src:
            local('Pretendard Bold'),
            url('/static/fonts/woff2/Pretendard-Bold.woff2') format('woff2'),
            url('/static/fonts/woff/Pretendard-Bold.woff') format('woff');
        }

        @font-face {
          font-family: 'Pretendard';
          font-weight: 600;
          font-display: fallback;
          src:
            local('Pretendard SemiBold'),
            url('/static/fonts/woff2/Pretendard-SemiBold.woff2') format('woff2'),
            url('/static/fonts/woff/Pretendard-SemiBold.woff') format('woff');
        }

        @font-face {
          font-family: 'Pretendard';
          font-weight: 500;
          font-display: fallback;
          src:
            local('Pretendard Medium'),
            url('/static/fonts/woff2/Pretendard-Medium.woff2') format('woff2'),
            url('/static/fonts/woff/Pretendard-Medium.woff') format('woff');
        }

        @font-face {
          font-family: 'Pretendard';
          font-weight: 400;
          font-display: fallback;
          src:
            local('Pretendard Regular'),
            url('/static/fonts/woff2/Pretendard-Regular.woff2') format('woff2'),
            url('/static/fonts/woff/Pretendard-Regular.woff') format('woff');
        }

        @font-face {
          font-family: 'Pretendard';
          font-weight: 300;
          font-display: fallback;
          src:
            local('Pretendard Light'),
            url('/static/fonts/woff2/Pretendard-Light.woff2') format('woff2'),
            url('/static/fonts/woff/Pretendard-Light.woff') format('woff');
        }

        @font-face {
          font-family: 'Pretendard';
          font-weight: 200;
          font-display: fallback;
          src:
            local('Pretendard ExtraLight'),
            url('/static/fonts/woff2/Pretendard-ExtraLight.woff2')
              format('woff2'),
            url('/static/fonts/woff/Pretendard-ExtraLight.woff') format('woff');
        }

        @font-face {
          font-family: 'Pretendard';
          font-weight: 100;
          font-display: fallback;
          src:
            local('Pretendard Thin'),
            url('/static/fonts/woff2/Pretendard-Thin.woff2') format('woff2'),
            url('/static/fonts/woff/Pretendard-Thin.woff') format('woff');
        }

        @font-face {
          font-family: 'PretendardJP';
          font-weight: 900;
          font-display: fallback;
          src:
            local('PretendardJP Black'),
            url('/static/fonts/woff2/PretendardJP-Black.woff2') format('woff2'),
            url('/static/fonts/woff/PretendardJP-Black.woff') format('woff');
        }

        @font-face {
          font-family: 'PretendardJP';
          font-weight: 800;
          font-display: fallback;
          src:
            local('PretendardJP ExtraBold'),
            url('/static/fonts/woff2/PretendardJP-ExtraBold.woff2')
              format('woff2'),
            url('/static/fonts/woff/PretendardJP-ExtraBold.woff') format('woff');
        }

        @font-face {
          font-family: 'PretendardJP';
          font-weight: 700;
          font-display: fallback;
          src:
            local('PretendardJP Bold'),
            url('/static/fonts/woff2/PretendardJP-Bold.woff2') format('woff2'),
            url('/static/fonts/woff/PretendardJP-Bold.woff') format('woff');
        }

        @font-face {
          font-family: 'PretendardJP';
          font-weight: 600;
          font-display: fallback;
          src:
            local('PretendardJP SemiBold'),
            url('/static/fonts/woff2/PretendardJP-SemiBold.woff2')
              format('woff2'),
            url('/static/fonts/woff/PretendardJP-SemiBold.woff') format('woff');
        }

        @font-face {
          font-family: 'PretendardJP';
          font-weight: 500;
          font-display: fallback;
          src:
            local('PretendardJP Medium'),
            url('/static/fonts/woff2/PretendardJP-Medium.woff2') format('woff2'),
            url('/static/fonts/woff/PretendardJP-Medium.woff') format('woff');
        }

        @font-face {
          font-family: 'PretendardJP';
          font-weight: 400;
          font-display: fallback;
          src:
            local('PretendardJP Regular'),
            url('/static/fonts/woff2/PretendardJP-Regular.woff2')
              format('woff2'),
            url('/static/fonts/woff/PretendardJP-Regular.woff') format('woff');
        }

        @font-face {
          font-family: 'PretendardJP';
          font-weight: 300;
          font-display: fallback;
          src:
            local('PretendardJP Light'),
            url('/static/fonts/woff2/PretendardJP-Light.woff2') format('woff2'),
            url('/static/fonts/woff/PretendardJP-Light.woff') format('woff');
        }

        @font-face {
          font-family: 'PretendardJP';
          font-weight: 200;
          font-display: fallback;
          src:
            local('PretendardJP ExtraLight'),
            url('/static/fonts/woff2/PretendardJP-ExtraLight.woff2')
              format('woff2'),
            url('/static/fonts/woff/PretendardJP-ExtraLight.woff')
              format('woff');
        }

        @font-face {
          font-family: 'PretendardJP';
          font-weight: 100;
          font-display: fallback;
          src:
            local('PretendardJP Thin'),
            url('/static/fonts/woff2/PretendardJP-Thin.woff2') format('woff2'),
            url('/static/fonts/woff/PretendardJP-Thin.woff') format('woff');
        }

        @font-face {
          font-family: 'webflow-icons';
          src: url('data:application/x-font-ttf;charset=utf-8;base64,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')
            format('truetype');
          font-weight: normal;
          font-style: normal;
        }

        body {
          margin: 0;
          background-color: White;
        }
        ${HeadingTokens}
        ${BodyTokens}
        ${CaptionTokens}
        ${ColorTokens}
        ${OmniGothic}
        ${allStar}
      `}
    />
  );
}

GlobalStyle.defaultProps = {};

export default GlobalStyle;
