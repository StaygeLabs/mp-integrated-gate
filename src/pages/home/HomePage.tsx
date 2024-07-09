import { Hello } from 'containers/Hello';
import { useNavigate } from 'react-router';

function HomePage() {
  const navigate = useNavigate();
  return (
    <div>
      <main>
        <Hello />
        <button
          type='button'
          onClick={() => {
            navigate('/404');
          }}
        >
          [페이지 확인용 버튼] 404에러로 이동
        </button>
      </main>
    </div>
  );
}

export default HomePage;
