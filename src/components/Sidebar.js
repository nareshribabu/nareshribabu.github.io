import React from 'react';
import github from '../assets/icons/github.svg';
import linkedin from '../assets/icons/linkedin.svg';
import nareshri from '../assets/nareshri.jpg';
import resume from '../assets/resume.pdf';

import { motion } from 'framer-motion';

const Sidebar = () => {

    const handleEmailMe = () => {
        window.open("mailto:nareshri.babu@gmail.com")
    }

    const sidebar_variant = {
        hidden: {
            x: '-20vw',
        },
        visible: {
            x: 0,
            transition: {
                delay: 0.2,
                duration: 0.5,
                type: 'spring'
            }
        }
    }

    return (
        <motion.div className="sidebar"
            variants={sidebar_variant}
            initial='hidden'
            animate='visible'
        >
            <img src={nareshri} alt="avatar" className="sidebar__avatar" />
            <div className="sidebar__name"><span>Nareshri </span>Babu</div>
            <div className="sidebar_item__title">Software Engineer</div>

            <div className="sidebar__contact">

                <div className="sidebar__item sidebar__linkedin">
                    <a href="https://www.linkedin.com/in/nareshribabu/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="linkedin" className="sidebar__icon mr-3" />LinkedIn</a>
                </div>
                <div className="sidebar__item sidebar__github">
                    <a href="https://github.com/nareshribabu" target="_blank" rel="noopener noreferrer"><img src={github} alt="github" className="sidebar__icon mr-3" />GitHub</a>
                </div>

            </div>


            <div className="sidebar__info">
                <a href={resume} download="resume.pdf">
                    <div className="sidebar__item sidebar__resume">
                        Resume
                </div>
                </a>
                <div className="sidebar__item sidebar__email" onClick={handleEmailMe}>Contact Me</div>
            </div>
        </motion.div >
    )
}

export default Sidebar;
