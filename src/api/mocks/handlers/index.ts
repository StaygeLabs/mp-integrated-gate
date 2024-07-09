// @index(['./**/handlers.ts'], f => `import { handlers as ${f.path.split('/')[1]}Handlers } from '${f.path}';`)
import { handlers as youmeonHandlers } from './youmeon/handlers';
// @endindex

export const handlers = [
  // @index(['./**/handlers.ts'], f => `...${f.path.split('/')[1]}Handlers,`)
  ...youmeonHandlers,
  // @endindex
];
