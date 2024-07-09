import { readFile } from 'fs/promises';

const CONSTANT = JSON.parse(
  await readFile(
    new URL('../../../CONSTANT.json', import.meta.url)
  )
);

const csvtojson = require('csvtojson');

async function getResourceFromCSV(path, locale) {
  const res = await csvtojson().fromFile(path);

  const field = {
    id: 'web-element',
    attr: 'web-attr',
    locales: CONSTANT.SUPPORTED_LANGUAGES,
  };
  const i18map = {};
  const fallbackI18map = {};

  res.forEach((item) => {
    const id = item[field.id];

    if (id) {
      field.locales.forEach((localeItem) => {
        if (localeItem === locale) {
          i18map[id] = item[localeItem] || '';
          if (typeof id === 'string' && id.startsWith('core:')) {
            fallbackI18map[id] = item[localeItem] || '';
          }
        }
      });
    }
  });

  return [i18map, fallbackI18map];
}

export default getResourceFromCSV;
