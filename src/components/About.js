import React from 'react';
import python from '../assets/icons/languages/python.svg';
import html from '../assets/icons/languages/html.svg';
import css from '../assets/icons/languages/css.svg';
import swift from '../assets/icons/languages/swift.svg';
import javascript from '../assets/icons/languages/javascript.svg';
import c from '../assets/icons/languages/c.svg';
import java from '../assets/icons/languages/java.svg';
import sql from '../assets/icons/languages/sql.svg';
import perl from '../assets/icons/languages/perl.svg';

import git from '../assets/icons/tools/git.svg';
import node from '../assets/icons/tools/node.svg';
import jquery from '../assets/icons/tools/jquery.svg';
import react from '../assets/icons/tools/react.svg';
import linux from '../assets/icons/tools/linux.svg';
import firebase from '../assets/icons/tools/firebase.svg';
import bootstrap from '../assets/icons/tools/bootstrap.svg';
import cocoapods from '../assets/icons/tools/cocoapods.svg';
import apple from '../assets/icons/tools/apple.svg';
import AR from '../assets/icons/tools/AR.svg';
import figma from '../assets/icons/tools/figma.svg';
import trello from '../assets/icons/tools/trello.svg';
import excel from '../assets/icons/tools/excel.svg';

import Skillcard from './Skillcard';

import { motion } from 'framer-motion';

const skills = [
    {
        icon: python,
        title: "Python",
    },
    {
        icon: html,
        title: "HTML",
    },
    {
        icon: css,
        title: "CSS",
    },
    {
        icon: javascript,
        title: "JavaScript",
    },
    {
        icon: swift,
        title: "Swift",
    },
    {
        icon: c,
        title: "C",
    },
    {
        icon: java,
        title: "Java",
    },
    {
        icon: sql,
        title: "SQL",
    },
    {
        icon: perl,
        title: "Perl",
    },

]

const tools = [
    {
        icon: git,
        title: "GIT",
    },
    {
        icon: bootstrap,
        title: "Bootstrap",
    },
    {
        icon: node,
        title: "Node.js",
    },
    {
        icon: jquery,
        title: "jQuery",
    },
    {
        icon: react,
        title: "React",
    },
    {
        icon: linux,
        title: "Linux",
    },
    {
        icon: firebase,
        title: "Firebase",
    },
    {
        icon: cocoapods,
        title: "CocoaPods",
    },
    {
        icon: apple,
        title: "CreateML",
    },
    {
        icon: apple,
        title: "CoreML",
    },
    {
        icon: AR,
        title: "ARKit",
    },
    {
        icon: figma,
        title: "Figma",
    },
    {
        icon: trello,
        title: "Trello",
    },
    {
        icon: excel,
        title: "Excel",
    },


]


const About = () => {

    const about_variant = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.1,
                duration: 0.3,
            }
        },
    }

    return (

        <motion.div className="about"
            variants={about_variant}
            initial='hidden'
            animate='visible'
            exit='exit'
        >

            <p className="about__intro">
            Hi! I am a software engineer based in Toronto, Canada. 
            I enjoy building pixel-perfect tech solutions to life's big and small problems. 
            I build everything from beautiful websites to exquisite apps! 
            My specialty is that I strive for continuous learning and improvement to make a 
            difference in this world.
            
            </p>

            <div className="container about__container">
                <h6 className="about__heading">Languages</h6>

                <div className="row">
                    {
                        skills.map(skill =>
                            <Skillcard skill={skill} />
                        )
                    }
                </div>
            </div>

            <div className="container about__container">
                <h6 className="about__heading">Tools and Frameworks</h6>

                <div className="row">
                    {
                        tools.map(tools =>
                            <Skillcard skill={tools} />
                        )
                    }
                </div>
            </div>

        </motion.div>
    );
};

export default About;