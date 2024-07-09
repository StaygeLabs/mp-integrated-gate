import { http } from 'msw';

import { YOUMEON_API_FRONT_BASE_URL } from 'CONSTANT';
// @index(['**/*.json'], (f, _) => `import ${_.camelCase(f.path.replace('data/', '')).replace('_', '')} from '${f.path}.json';`)
import v1ArtistMemberListLocaleKo from './v1/artist/member/list/locale_ko.json';
import v1ArtistMemberListLocaleKoCursorMde3MdUwNDgyNtn5VgVlZ1BhaHBzamJqdHlxNmdpRzg from './v1/artist/member/list/locale_ko+cursor_MDE3MDUwNDgyNTN5VGVlZ1BhaHBzamJqdHlxNmdpRzg.json';
import v1ArtistMemberListNull from './v1/artist/member/list/null.json';
// @endindex

const makeUrl = (url: string) =>
  new URL(url, `${YOUMEON_API_FRONT_BASE_URL}/api/youmeon/`).toString();

export const handlers = [
  http.get(makeUrl('./v1/artist/member/list'), (info) => {
    const url = new URL(info.request.url);
    const locale = url.searchParams.get('locale');
    const cursor = url.searchParams.get('cursor');
    console.log('locale', locale);
    let data;
    if (locale === 'ko') {
      if (cursor === 'MDE3MDUwNDgyNTN5VGVlZ1BhaHBzamJqdHlxNmdpRzg') {
        data =
          v1ArtistMemberListLocaleKoCursorMde3MdUwNDgyNtn5VgVlZ1BhaHBzamJqdHlxNmdpRzg;
      } else {
        data = v1ArtistMemberListLocaleKo;
      }
    } else {
      data = v1ArtistMemberListNull;
    }
    return new Response(JSON.stringify(data), {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }),
];
