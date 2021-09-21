import React, { useState } from 'react';
import Navbar from './components/Navbar/';
import ContentArea from './views/ContentArea/';
import NavbarBrand from './components/NavbarBrand';
import NavbarItem from './components/NavbarItem';
import { home, projects, about, contact } from './pages';

function App() {
  const [page, setPage] = useState('default');
  return (
    <>
      <Navbar setPage={setPage}>
        <NavbarBrand onClickHandler={() => setPage(home)}>Brendan Holmes</NavbarBrand>
        <NavbarItem onClickHandler={() => setPage(projects)}>Projects</NavbarItem>
        <NavbarItem onClickHandler={() => setPage(about)}>About</NavbarItem>
        <NavbarItem onClickHandler={() => setPage(contact)}>Contact</NavbarItem>
      </Navbar>
      <ContentArea page={page}/>
    </>
  )
}

export default App;
