import React from 'react';
import Projects from '../Projects';
import Contact from '../Contact';
import About from '../About';
import Home from '../Home';
import { home, projects, about, contact } from '../../pages';
import './style.css';

function ContentArea(props) {
  const getPageArea = (page) => {
      switch(page) {
        case(home):
            return (<Home />);
        case(projects):
            return (<Projects />);
        case(about):
            return (<About />);
        case(contact):
            return (<Contact />);
        default:
            return (<Home />);
    }};

  return (
    <div className='content-area'>
        {getPageArea(props.page)}
    </div>
  )
}

export default ContentArea;