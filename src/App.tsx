import { useState } from 'react';
import Footer from './Base/Footer';
import AboutMe from './Pages/AboutMe';
import Projects from './Pages/ProjectPage';
import { PageType } from './Structures/Enums';
import './App.css';
import RedirectBlocks from './Base/RedirectBlocks';
import Introduction from './Base/Introduction';

function App() {
  let [currentSection, setCurrentSection] = useState(PageType.AboutMe);

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
        <div className='app-body-redirect-blocks'>
          <RedirectBlocks 
            currentSection={currentSection}
            moveToSection={moveToSection} />
        </div>
        <div className='app-body-split'>
          <div className='app-body-left-side'>
            <Introduction />
          </div>
          <div className='app-body-right-side'>
            {currentSection === PageType.AboutMe &&
              <AboutMe />
            }
            {currentSection === PageType.Projects &&
              <Projects />
            }
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
