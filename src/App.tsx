import { useState } from 'react';
import { delay } from './Base/CommonLogic';
import Footer from './Base/Footer';
import Introduction from './Base/Introduction';
import RedirectBlocks from './Base/RedirectBlocks';
import AboutMe from './Pages/AboutMe';
import Contact from './Pages/Contact';
import Projects from './Pages/ProjectPage';
import Puzzle from './Base/Puzzle/Puzzle';
import { PageType } from './Structures/Enums';
import './App.css';
import React from 'react';

function App() {
  let [currentSection, setCurrentSection] = useState(PageType.AboutMe);
  const introductionComponent = React.useMemo(() => <Introduction />, [])

  async function moveToSection(id: string, section: number) {
    if (section !== currentSection) {
      let selectedElement = document.getElementsByClassName('redirect-block-selected');
      if (selectedElement.length > 0) {
        selectedElement[0].classList.remove('redirect-block-selected');
      }

      setCurrentSection(PageType.None);

      await delay(1000).then(() => {
        document.getElementById(id)?.scrollIntoView();
        setCurrentSection(section);
      });
    }
  }

  return (
    <div className="app">
      <div className='app-body no-select'>
        <div className='app-body-redirect-blocks'>
          <RedirectBlocks
            currentSection={currentSection}
            moveToSection={moveToSection} />
        </div>
        <div className='app-body-split'>
          <div className='app-body-left-side'>
            {introductionComponent}
          </div>
          <div className='app-body-right-side'>
            <div className={currentSection === PageType.AboutMe ? 'app-body-right-side-visible' : 'app-body-right-side-hidden'}>
              <AboutMe />
            </div>
            <div className={currentSection === PageType.Contact ? 'app-body-right-side-visible' : 'app-body-right-side-hidden'}>
              <Contact />
            </div>
            <div className={currentSection === PageType.Projects ? 'app-body-right-side-visible' : 'app-body-right-side-hidden'}>
              <Projects />
            </div>
          </div>
        </div>
      </div>
      <Puzzle />
      <Footer />
    </div>
  );
}

export default App;
