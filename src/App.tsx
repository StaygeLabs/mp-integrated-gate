import AppFeedback from 'components/feedback/AppFeedback';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ThemeProvider } from 'utils/tailwind/ThemeProvider';
import { HomePage } from './pages';

function App() {
  return (
    <ThemeProvider>
      <AppFeedback>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage />} />
          </Routes>
        </BrowserRouter>
      </AppFeedback>
    </ThemeProvider>
  );
}

export default App;
