/* eslint-disable */


const serviceMode = 'production';
const s3Url = `s3://files.mnet.world/static/locales`;

try {
  await $`yarn zx ${__dirname}/../locale.mjs`;
  await $`aws s3 cp --region ap-northeast-2 build/static/locales ${s3Url} --acl public-read --recursive`;
  await $`aws cloudfront create-invalidation --distribution-id ESKJICGCGEBWZ --paths "/static/locales/*"`;
  await echo(chalk.blue(`[${serviceMode}] Locale deploy completed successfully`));
} catch (error) {
  await echo(chalk.red(`[${serviceMode}] Locale deploy failed`));
  throw error;
}