import AppFeedback from 'components/feedback/AppFeedback';
import NotFoundPage from 'pages/notFound/NotFoundPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ThemeProvider } from 'utils/tailwind/ThemeProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { DEFAULT_STALE_TIME } from 'CONSTANT';
import { ArtistMemberListPage } from 'pages/artistMember/ArtistMemberListPage';
import { HomePage } from './pages';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: DEFAULT_STALE_TIME,
      retry: 1,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <AppFeedback>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/artist-member' element={<ArtistMemberListPage />} />
              <Route path='*' element={<NotFoundPage />} />
            </Routes>
          </BrowserRouter>
        </AppFeedback>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
