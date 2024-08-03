import { useState } from 'react';
import Footer from './Base/Footer';
import LandingPage from './Pages/LandingPage';
import Projects from './Pages/ProjectPage';
import { PageType } from './Structures/Enums';
import './App.css';
import RedirectBlocks from './Base/RedirectBlocks';

function App() {
  let [currentSection, setCurrentSection] = useState(PageType.LandingPage);

  function moveToSection(id: string, section: number) {
    let selectedElement = document.getElementsByClassName('redirect-block-selected');
    if (selectedElement.length > 0) {
      selectedElement[0].classList.remove('redirect-block-selected');
    }

    document.getElementById(id)?.scrollIntoView();
    setCurrentSection(section);
  }

  return (
    <div className="app">
      <div className='app-body'>
        <div>
          <RedirectBlocks moveToSection={moveToSection} />
        </div>
        <div>
          <LandingPage
            moveToSection={moveToSection} />
          <Projects />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
