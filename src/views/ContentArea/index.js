import React from 'react';
import Projects from '../Projects';
import Home from '../Home';
import { home, projects, about, contact } from '../../pages';

function ContentArea(props) {
  const getPageArea = (page) => {
      switch(page) {
        case(home):
            return (<Home />);
        case(projects):
            return (<Projects />);
        default:
            return (<Home />);
    }};

  return (
    <div className='p-10'>
        {getPageArea(props.page)}
    </div>
  )
}

export default ContentArea;