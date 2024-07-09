import App from 'App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { startMocking } from 'api/mocks/startMocking';
import './styles/index.css';
import { APP_ID } from 'CONSTANT';
import LanguageProvider from 'store/locale/LanguageProvider';

startMocking().then(() => {
  ReactDOM.createRoot(document.getElementById(APP_ID)!).render(
    <React.StrictMode>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </React.StrictMode>,
  );
});
