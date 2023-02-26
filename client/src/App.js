import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import AdminPage from './components/AdminPage/AdminPage';
import AboutPage from './components/AboutPage/AboutPage';
import AdminPageHero from './components/Hero/AdminPageHero';
import ExamPageHero from './components/Hero/ExamPageHero';
import AboutPageHero from './components/Hero/AboutPageHero';
import ExamPage from './components/Exam/ExamPage';
import ExamEdit from './components/Exam/ExamEdit';
import ExamList from './components/Exam/ExamList';
import CreateExamPage from './components/Exam/CreateExamPage';
import ExamInfo from './components/Exam/ExamInfo';
import MainHero from './components/Hero/MainHero';
import Navbar from './components/Navbar/Navbar';
import Button from './components/Buttons/Button';

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
            path='ExamPage/Exam'
            element={
              <div>
                <Navbar />
                <ExamPageHero />
                <ExamInfo />
              </div>
            }
          />
          <Route
            path='ExamList'
            element={
              <div>
                <Navbar />
                <ExamPageHero />
                <ExamList />
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
            path='AdminPage/CreateExam'
            element={
              <div>
                <Navbar />
                <AdminPageHero />
                <CreateExamPage />
              </div>
            }
          />
          <Route
            path='AdminPage/EditExam'
            element={
              <div>
                <Navbar />
                <ExamPageHero />
                <ExamEdit />
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
    </div>
  );
}

export default App;
