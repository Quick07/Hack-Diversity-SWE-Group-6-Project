import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainHero from './components/MainHero/MainHero';
import AdminPageHero from './components/MainHero/AdminPageHero';
import AboutPageHero from './components/MainHero/AboutPageHero';
import ExamPageHero from './components/MainHero/ExamPageHero';
import Main from './components/Main/Main';
import Navbar from './components/Navbar/Navbar';
import AboutPage from './components/AboutPage/AboutPage';
import AdminPage from './components/AdminPage/AdminPage';
import ExamPage from './components/ExamPage/ExamPage';
import './App.css';

import { useApi } from './hooks/use-api';

function App() {
  const { response } = useApi();
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <div>
              <Navbar />
              <MainHero />
              <Main />
            </div>
          }
        />
        <Route
          path='AdminPage'
          element={
            <div>
              <Navbar />
              <AdminPageHero />
              <AdminPage />
            </div>
          }
        />
        <Route
          path='ExamPage'
          element={
            <div>
              <Navbar />
              <ExamPageHero />
              <ExamPage />
            </div>
          }
        />
        <Route
          path='AboutPage'
          element={
            <div>
              <Navbar />
              <AboutPageHero />
              <AboutPage />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
