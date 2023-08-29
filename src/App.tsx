// Components
import ImagesPage from './pages/ImagesPage';
import { MainLayout } from './layouts/main';
import { CommonProvider } from './context/CommonContext';

// CSS
import './App.css';

function App() {
  return (
    <CommonProvider>
      <MainLayout>
        <ImagesPage />
      </MainLayout>
    </CommonProvider>
  );
}

export default App;
