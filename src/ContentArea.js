import React from 'react';
import Projects from './Projects';
import Socials from './Socials';
import About from './About';
import Home from './Home';
import { home, projects, about, socials } from './pages';

function ContentArea(props) {
  const getPageArea = (page) => {
      switch(page) {
        case(home):
            return (<Home />);
        case(projects):
            return (<Projects />);
        case(about):
            return (<About />);
        case(socials):
            return (<Socials />);
        default:
            return (<Home />);
    }};

  return (
    <>
        <style type="text/css">
                {`
                .content-area {
                    margin-left: 10%;
                    margin-right: 10%;
                }
                `}
        </style>
        <div className='content-area'>
            {getPageArea(props.page)}
        </div>
    </>
  )
}

export default ContentArea;