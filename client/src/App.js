import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainHero from './components/MainHero/MainHero';
import AdminPageHero from './components/AdminPage/AdminPageHero';
import MainExamPageHero from './components/MainExamPage/MainExamPageHero';
import Navbar from './components/Navbar/Navbar';
import MainExamPage from './components/MainExamPage/MainExamPage';
import AdminPage from './components/AdminPage/AdminPage';
import './App.css';

import { useApi } from './hooks/use-api';

function App() {
  const { response } = useApi();
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={
              <div>
                <MainHero />
              </div>
            }
          />
          <Route
            path='MainExamPage'
            element={
              <div>
                <Navbar />
                <MainExamPageHero />
                <MainExamPage />
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
            path='IndexPage/Exam'
            element={
              <div>
                <Navbar />
                <ExamInfo />
              </div>
            }
          />
          <Route
            path='AdminPage/EditExam'
            element={
              <div>
                <Navbar />
                <ExamEdit />
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
