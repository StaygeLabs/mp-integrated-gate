// @index(['./**/*.tsx', '!./helper/*', '!./index.ts'], f => `import  ${f.name}  from '${f.path}';`)
import GlobalButton from './GlobalButton';
import GnbButton from './GnbButton';
// @endindex

export {
  // @index(['./**/*.tsx', '!./helper/*', '!./index.ts'], f => `${f.name},`)
  GlobalButton,
  GnbButton,
  // @endindex
};
