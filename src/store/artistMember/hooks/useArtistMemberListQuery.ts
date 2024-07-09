import { useInfiniteQuery } from '@tanstack/react-query';
import { youmeonApi } from 'api';
import { Locale } from 'api/generated/youmeon/data-contracts';

const artistMemberKeys = {
  all: ['artistMember'] as const,
  lists: () => [...artistMemberKeys.all, 'lists'] as const,
  list: (params: ArtistMemberListQueryParams) =>
    [...artistMemberKeys.lists(), params] as const,
};

export type ArtistMemberListQueryParams = {
  locale: Locale;
};

export const useArtistMemberListQuery = (
  params: ArtistMemberListQueryParams,
) => {
  const newParams = params;

  return useInfiniteQuery({
    queryKey: artistMemberKeys.list(params),
    queryFn: ({ pageParam }) =>
      youmeonApi.getArtistMemberList({
        cursor: pageParam,
        ...newParams,
      }),
    getNextPageParam: (lastPage) => lastPage.data.data.cursor,
    initialPageParam: undefined as string | undefined,
    select: (data) => data.pages.map((page) => page.data.data.memberList),
  });
};
