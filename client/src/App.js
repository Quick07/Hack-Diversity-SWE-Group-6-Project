import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainHero from './components/Hero/MainHero';
import AdminPageHero from './components/Hero/AdminPageHero';
import ExamPageHero from './components/Hero/ExamPageHero';
import Navbar from './components/Navbar/Navbar';
import ExamPage from './components/ExamPage/ExamPage';
import ExamEdit from './components/ExamEdit/ExamEdit';
import ExamInfo from './components/ExamInfo/ExamInfo';
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
