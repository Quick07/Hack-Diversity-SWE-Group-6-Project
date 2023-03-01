import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import AdminPage from './components/AdminPage/AdminPage';
import AboutPage from './components/AboutPage/AboutPage';
import AdminPageHero from './components/Hero/AdminPageHero';
import ExamPageHero from './components/Hero/ExamPageHero';
import AboutPageHero from './components/Hero/AboutPageHero';
import ExamPage from './components/Exam/ExamPage';
import ExamEdit from './components/ExamEdit/ExamEdit';
import ExamList from './components/Exam/ExamList';
// import SignUp from './components/Exam/CreateExamPage';
import ExamInfo from './components/ExamInfo/ExamInfo';
import MainHero from './components/Hero/MainHero';
import Navbar from './components/Navbar/Navbar';
import Button from './components/Buttons/Button';

import './App.css';

import { useApi } from './hooks/use-api';
import Examstable from './components/Exam/Examstable';
import TablePage from './components/Exam/TablePage';
import SignUp from './components/Exam/CreateExamPage';

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
            path='Exams'
            element={
              <div>
                <Navbar />
                <ExamPageHero />
                <ExamPage />
              </div>
            }
          />
          <Route
          // Table of all exams
            path='Exams/ViewList'
            element={
              <div>
                <Navbar />
                <TablePage/>
              </div>
            }
          />
          <Route
          // View a single exam
            path='Exams/ViewExam'
            element={
              <div>
                <Navbar />
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
                <Examstable />
              </div>
            }
          />
          <Route
          //Admin page
            path='Admin'
            element={
              <div>
                <Navbar />
                <AdminPageHero />
                <AdminPage />
              </div>
            }
          />
          <Route
          //Create a new exam
            path='Admin/CreateExam'
            element={
              <div>
                <Navbar />
                {/* <AdminPageHero /> */}
                <SignUp />
              </div>
            }
          />
          <Route
          //Editing a single exam
            path='Admin/EditExam'
            element={
              <div>
                <Navbar />
                <ExamEdit/>
              </div>
            }
          />
          <Route
            path='About'
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
