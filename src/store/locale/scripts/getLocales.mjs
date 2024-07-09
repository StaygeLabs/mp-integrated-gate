import { readFile } from 'fs/promises';

import convertInterpolation from './convertInterpolation.mjs';
import getResourceFromCSV from './getResourceFromCSV.mjs';

const CONSTANT = JSON.parse(
  await readFile(
    new URL('../../../CONSTANT.json', import.meta.url)
  )
);

await $`sh ${path.join(__dirname, '/download.locales.sh')}`

async function generateJson(locale, filepath) {
  let [json, fallbackJson] = await getResourceFromCSV(path.join(__dirname, '/csv/rtc_locale_script.csv'), locale);
  // make json
  json = await convertInterpolation(json);
  await fs.mkdirs(path.join(__dirname, `/locales/${filepath ?? locale}`));
  await fs.writeJson(path.join(__dirname, `/locales/${filepath ?? locale}/rtc.json`), json);

  // make fallback json
  fallbackJson = await convertInterpolation(fallbackJson);
  await fs.mkdirs(path.join(__dirname, `../fallbackLocales/${filepath ?? locale}`));
  await fs.writeJson(path.join(__dirname, `../fallbackLocales/${filepath ?? locale}/rtc.json`), fallbackJson);
}

for (const locale of CONSTANT.SUPPORTED_LANGUAGES) {
  await generateJson(locale);
  // 미국가 언어 세팅
  if (locale === 'zh-cn') {
    await generateJson('zh-cn', 'zh');
  }
}
