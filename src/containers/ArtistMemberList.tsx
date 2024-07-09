import { Locale } from 'api/generated/youmeon/data-contracts';
import { useArtistMemberListQuery } from 'store/artistMember/hooks/useArtistMemberListQuery';

const ArtistMemberList = () => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } =
    useArtistMemberListQuery({
      locale: Locale.Ko,
    });

  if (status === 'pending') {
    return <div>Loading...</div>;
  }

  if (status === 'error') {
    return <div>Error occurred while fetching data.</div>;
  }

  return (
    <div>
      <ul>
        {data.map((page) =>
          page.map((member) => <li key={member.id}>{member.nickname}</li>),
        )}
      </ul>
      {hasNextPage && (
        <button
          type='button'
          onClick={() => fetchNextPage()}
          disabled={isFetchingNextPage}
        >
          {isFetchingNextPage ? 'Loading more...' : 'Load More'}
        </button>
      )}
    </div>
  );
};

export default ArtistMemberList;
