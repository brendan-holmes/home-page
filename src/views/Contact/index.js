import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

import './style.css';

const Contact = () => {
    return (
        <>
            <div>
                <FontAwesomeIcon icon={faGithub} className="marginRight"/>
                <a href="https://github.com/brendan-holmes">GitHub</a>
            </div>
            <div>
                <FontAwesomeIcon icon={faLinkedin} className="marginRight"/>
                <a href="https://au.linkedin.com/in/brendan-holmes">LinkedIn</a>
            </div>
        </>
    );
}

export default Contact;