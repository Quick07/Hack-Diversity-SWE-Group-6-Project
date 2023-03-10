import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import AdminPage from './components/AdminPage/AdminPage';
import AboutPage from './components/AboutPage/AboutPage';
import AdminPageHero from './components/Hero/AdminPageHero';
import ExamPageHero from './components/Hero/ExamPageHero';
import AboutPageHero from './components/Hero/AboutPageHero';
import ExamPage from './components/Exam/ExamPage';
import ExamEdit from './components/ExamEdit/ExamEdit';
import ExamInfo from './components/ExamInfo/ExamInfo';
import MainHero from './components/Hero/MainHero';
import Navbar from './components/Navbar/Navbar';
import PatientsList from './components/PatientsPage/PatientsList';
import CreateExam from './components/CreateExam/CreateExam';
import ViewPatient from './components/ViewPatient/ViewPatient';

import './App.css';

import { useApi } from './hooks/use-api';
import Examstable from './components/Exam/Examstable';
import TablePage from './components/Exam/TablePage';

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
                <TablePage />
              </div>
            }
          />
          <Route
            // View a single exam
            path='Exams/ViewExam/:_id'
            element={
              <div>
                <Navbar />
                <ExamInfo />
              </div>
            }
          />
          <Route
            // Table of patients
            path='Exams/ViewPatients'
            element={
              <div>
                <Navbar />
                <PatientsList />
              </div>
            }
          />
          <Route
            // View single patient info and exams
            path='Exams/ViewPatients/:_id'
            element={
              <div>
                <Navbar />
                <ViewPatient />
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
                <CreateExam />
              </div>
            }
          />
          <Route
            //Editing a single exam
            path='Admin/EditExam'
            element={
              <div>
                <Navbar />
                <ExamEdit />
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
