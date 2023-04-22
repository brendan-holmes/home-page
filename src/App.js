import React, { useState } from 'react';
import Navbar from './components/Navbar/';
import ContentArea from './views/ContentArea/';
import NavbarItem from './components/Navbar/NavbarItem';
import { home, projects } from './pages';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

function App() {
  const [page, setPage] = useState('default');
  return (
    <div className='min-h-screen bg-gradient-to-b from-gray-100 to-gray-500'>
      <Navbar setPage={setPage}>
        <NavbarItem onClickHandler={() => setPage(home)}>Brendan Holmes</NavbarItem>
        <NavbarItem onClickHandler={() => setPage(projects)}>Projects</NavbarItem>
        
        <a href="https://github.com/brendan-holmes">
          <NavbarItem>
            <FontAwesomeIcon icon={faGithub}/>
          </NavbarItem>
        </a>
        <a href="https://au.linkedin.com/in/brendan-holmes">
          <NavbarItem>
            <FontAwesomeIcon icon={faLinkedin} />
          </NavbarItem>
        </a>
      </Navbar>
      <ContentArea page={page}/>
    </div>
  )
}

export default App;
