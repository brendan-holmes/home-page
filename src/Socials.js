import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Socials = () => {
    return (
        <>
            <div>
                <FontAwesomeIcon icon={faGithub} className="margin-right"/>
                <a href="https://github.com/brendan-holmes">GitHub</a>
            </div>
            <div>
                <FontAwesomeIcon icon={faLinkedin} className="margin-right"/>
                <a href="https://au.linkedin.com/in/brendan-holmes">LinkedIn</a>
            </div>
        </>
    );
}

export default Socials;