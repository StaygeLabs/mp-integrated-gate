/* eslint-disable no-template-curly-in-string */
import { PropsWithChildren } from 'react';
import { I18nextProvider } from 'react-i18next';
import { useAsync } from 'react-use';

import i18next from 'i18next';
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector';
import I18NextChainedBackend from 'i18next-chained-backend';
import I18NextHttpBackend from 'i18next-http-backend';
import makeResourcesToBackend from 'i18next-resources-to-backend';

import { REACT_APP_FALLBACK_LANGUAGE, SUPPORTED_LANGUAGES } from 'CONSTANT';

interface LanguageProviderProps {}

type MergeProps = PropsWithChildren<LanguageProviderProps>;

const I18nextResourcesToBackend = makeResourcesToBackend(
  async (language: string, namespace: string) =>
    import(`./fallbackLocales/${language}/${namespace}.json`)
);

function LanguageProvider({ children }: MergeProps) {
  const state = useAsync(async () => {
    if (i18next.isInitialized) {
      return;
    }
    const t = await i18next
      .use(I18NextChainedBackend)
      .use(I18nextBrowserLanguageDetector)
      .init({
        backend: {
          backends: [I18NextHttpBackend, I18nextResourcesToBackend],
          backendOptions: [
            {
              // If allowMultiLoading is false, languages and namespaces will have only one element each
              loadPath: () => `/static/locales/{{lng}}/{{ns}}.json`,
            },
          ],
        },
        supportedLngs: SUPPORTED_LANGUAGES,
        lowerCaseLng: true,
        detection: {
          order: [
            'querystring',
            'localStorage',
            'navigator',
            'cookie',
            'htmlTag',
          ],
        },
        nsSeparator: '@',
        fallbackLng: REACT_APP_FALLBACK_LANGUAGE,
        react: {
          useSuspense: true,
        },
        ns: 'rtc',
        debug: process.env.NODE_ENV === 'development',
      });

    return t;
  }, []);
  if (state.loading) {
    return null;
  }
  return <I18nextProvider i18n={i18next}>{children}</I18nextProvider>;
}

LanguageProvider.defaultProps = {};

export default LanguageProvider;
