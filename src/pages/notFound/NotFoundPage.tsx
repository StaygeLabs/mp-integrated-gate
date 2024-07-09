import { useNavigate } from 'react-router';

function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <div>
      <main>404 not found error</main>
      <button
        type='button'
        color='gradient1'
        onClick={() => {
          navigate('/');
        }}
      >
        홈으로
      </button>
    </div>
  );
}

export default NotFoundPage;
