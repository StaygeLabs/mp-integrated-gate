import React from 'react';

// @index(['./**/*Page.tsx'], f => `const ${f.name} = React.lazy(  () => import('${f.path}')  );`)
const HomePage = React.lazy(() => import('./home/HomePage'));
// @endindex

export {
  // @index(['./**/*Page.tsx'], f => `${f.name},`)
  HomePage,
  // @endindex
};
