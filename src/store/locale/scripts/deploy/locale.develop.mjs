/* eslint-disable */


const serviceMode = 'develop';
const s3Url = `s3://rtc-files.stayge.net/static/locales`;

try {
  await $`yarn zx ${__dirname}/../locale.mjs`;
  await $`aws s3 cp --region ap-northeast-2 ${__dirname}/../locales ${s3Url} --acl public-read --recursive`;
  await echo(chalk.blue(`[${serviceMode}] Locale deploy completed successfully`));
} catch (error) {
  await echo(chalk.red(`[${serviceMode}] Locale deploy failed`));
  throw error;
}