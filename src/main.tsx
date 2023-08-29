import React from 'react';
import ReactDOM from 'react-dom/client';

// CSS
import './index.css';

// Third party
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

import App from './App';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
);
