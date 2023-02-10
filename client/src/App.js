import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainHero from './components/MainHero/MainHero';
import AdminPageHero from './components/MainHero/AdminPageHero';
import IndexPageHero from './components/MainHero/IndexPageHero';
import Main from './components/Main/Main';
import Navbar from './components/Navbar/Navbar';
import IndexPage from './components/IndexPage/IndexPage';
import AdminPage from './components/AdminPage/AdminPage';
import ExamInfo from './components/ExamInfo/ExamInfo';
import './App.css';

import { useApi } from './hooks/use-api';

function App() {
  const { response } = useApi();
  return (
    <div className='App'>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route
          path='/'
          element={
            <div className='page'>
            <div>
              <MainHero />
              {/* <Main /> */}
            </div>
            </div>
          }
        />
        <Route
          path='IndexPage'
          element={
            <div className='page'>
              <IndexPageHero />
              <IndexPage />
            </div>
          }
        />
        <Route
          path='AdminPage'
          element={ 
            <div className='page'>
              <AdminPageHero />
              <AdminPage />
            </div>
          }
        />
        <Route
          path='IndexPage/Exam' 
          element={ 
            <div className='page'>
              <ExamInfo/>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
