import { useState } from 'react';
import Header from './Base/Header';
import Footer from './Base/Footer';
import AboutMe from './Pages/AboutMe';
import LandingPage from './Pages/LandingPage';
import Projects from './Pages/ProjectPage';
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
        {currentPage === PageType.Projects &&
          <Projects />
        }
      </div>
      <Footer />
    </div>
  );
}

export default App;
