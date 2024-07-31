import { useState } from 'react';
import Header from './Base/Header';
import Footer from './Base/Footer';
import AboutMe from './Pages/AboutMe';
import LandingPage from './Pages/LandingPage';
import { PageType } from './Structures/Enums';
import './App.css';

function App() {
  let [currentPage, setCurrentPage] = useState(PageType.LandingPage);

  return (
    <div className="app">
      <Header
        currentPage={currentPage}
        setCurrentPage={setCurrentPage} />
      <div className='app-body'>
        {currentPage === PageType.LandingPage &&
          <LandingPage
            setCurrentPage={setCurrentPage} />
        }
        {currentPage === PageType.AboutMe &&
          <AboutMe />
        }
      </div>
      <Footer />
      <div>TEMP, DELETING</div>
    </div>
  );
}

export default App;
