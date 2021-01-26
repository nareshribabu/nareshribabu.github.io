import React, { useState } from 'react';
import data_projects from './data/projects_data';
import ProjectCard from './ProjectCard';

import { motion } from 'framer-motion';

const Projects = () => {

    const [projects, setProjects] = useState(data_projects);

    const [active, setActive] = useState('All');

    const handleFilterCategory = (name) => {
        const new_array = data_projects.filter(project => project.category.includes(name))
        setProjects(new_array)
        setActive(name)
    }

    const projects_variant = {
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

        <motion.div className="container projects"
            variants={projects_variant}
            initial='hidden'
            animate='visible'
            exit='exit'
        >

            <div className="projects__navbar">
                <div className={active === 'All' && 'projects__navbar-active'} onClick={
                    () => {
                        setProjects(data_projects)
                        setActive("All")
                    }

                }>All</div>
                <div className={active === 'websites' && 'projects__navbar-active'} onClick={() => handleFilterCategory('websites')}>Websites</div>
                <div className={active === 'AI' && 'projects__navbar-active'} onClick={() => handleFilterCategory('AI')}>Artificial Intelligence</div>
                <div className={active === 'AR' && 'projects__navbar-active'} onClick={() => handleFilterCategory('AR')}>Augmented Reality</div>
                <div className={active === 'Apps' && 'projects__navbar-active'} onClick={() => handleFilterCategory('Apps')}>Apps</div>
                <div className={active === 'CommandLine' && 'projects__navbar-active'} onClick={() => handleFilterCategory('CommandLine')}>Command Line</div>
            </div>

            <div className="row">
                {
                    projects.map(project =>
                        <ProjectCard key={project.name} project={project} />)
                }
            </div>

        </motion.div>
    );
};

export default Projects;