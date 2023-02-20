import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainHero from './components/MainHero/MainHero';
import AdminPageHero from './components/AdminPage/AdminPageHero';
import IndexPageHero from './components/IndexPage/IndexPageHero';
// import Main from './components/Main/Main';
import Navbar from './components/Navbar/Navbar';
import IndexPage from './components/IndexPage/IndexPage';
import AdminPage from './components/AdminPage/AdminPage';
import ExamInfo from './components/ExamInfo/ExamInfo';


import './App.css';

import { useApi } from './hooks/use-api';
import ExamEdit from './components/ExamEdit/ExamEdit';

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
              {/* <Navbar /> */}
              <MainHero />
              {/* <Main /> */}
            </div>
          }
        />
        <Route
          path='IndexPage'
          element={
            <div>
              <Navbar />
              <IndexPageHero />
              <IndexPage />
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
              <ExamInfo/>
            </div>
          }
        />
        <Route
          path='AdminPage/EditExam' 
          element={ 
            <div >
                    <Navbar />
              <ExamEdit/>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
