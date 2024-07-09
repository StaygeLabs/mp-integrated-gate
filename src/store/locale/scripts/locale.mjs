require('dotenv').config();

await $`sh ${__dirname}/download.locales.sh`;
await $`yarn zx ${__dirname}/getLocales.mjs`;
await fs.mkdirs('./public/static');
await $`cp -r ${__dirname}/locales public/static`;