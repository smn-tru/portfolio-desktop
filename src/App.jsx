import React from 'react';

import AboutMe from './components/AboutMe';
import Calendar from './components/Calendar';
import Contact from './components/Contact';
import MediaPlayer from './components/MediaPlayer';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Skills from './components/Skills';
import WorkExperience from './components/WorkExperience';
import Search from './components/Search';
import Notes from './components/Notes';
import Weather from './components/Weather';
import Favorites from './components/Favorites';

function App() {
  return (
    <div className='container App'>
      <div className='row component-board'>
        <div className="grid grid-cols-3 gap-4 sm:grid-cols-1 sm:gap-4 md:grid-cols-2 md:gap-4 lg:grid-cols-3 lg:gap-4">
            <AboutMe />
            <Calendar />
            <Contact />
            <MediaPlayer />
            <Projects />
            <div className="grid grid-cols-3 gap-2">
              <Resume />
              <Skills />
              <WorkExperience />
            </div>
            <Search />
            <Notes />
            <Weather />
            <Favorites />
        </div>
      </div>
    </div>
  );
}

export default App;
