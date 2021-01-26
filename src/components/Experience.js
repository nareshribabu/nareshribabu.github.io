import React from 'react';

import { motion } from 'framer-motion';

const Experience = () => {

    const experiences_variant = {
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

        <motion.div className="container experience"
            variants={experiences_variant}
            initial='hidden'
            animate='visible'
            exit='exit'

        >
            <div className="row">

                {/* Education */}
                <div className="col-lg-6 experience-card">
                    <h4 className="experience-card__heading">
                        Education
                    </h4>

                    <ul>
                        <li>
                            <div className="experience-card__body">
                                <h5 className="experience-card__title">
                                    Software Engineering
                                </h5>
                                <p className="experience-card__name">
                                    University Of Guelph (2018 - 2022)
                                </p>
                                <p className="experience-card__details">
                                    Business Minor
                                </p>
                                <p className="experience-card__details">
                                    GPA: 4.0
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className="experience-card__body">
                                <h5 className="experience-card__title">
                                    Accounting and Financial Management
                                </h5>
                                <p className="experience-card__name">
                                    University Of Waterloo (2016 - 2018)
                                </p>
                                <p className="experience-card__details">

                                </p>
                            </div>
                        </li>
                    </ul>
                </div>

                {/* Experience */}
                <div className="col-lg-6 experience-card">
                    <h4 className="experience-card__heading">
                        Work
                    </h4>

                    <ul>
                        <li>
                            <div className="experience-card__body">
                                <h5 className="experience-card__title">
                                    Teaching Assistant
                        </h5>
                                <p className="experience-card__name">
                                    University Of Guelph
                        </p>
                                <p className="experience-card__details">
                                    Jan 2021 - April 2021
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className="experience-card__body">
                                <h5 className="experience-card__title">
                                    Computer Science Tutor
                        </h5>
                                <p className="experience-card__name">
                                    Self-Employed
                        </p>
                                <p className="experience-card__details">
                                    Sept 2019 - Present
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className="experience-card__body">
                                <h5 className="experience-card__title">
                                    Tax and Administration Intern
                        </h5>
                                <p className="experience-card__name">
                                    United Parcel Service (UPS)
                        </p>
                                <p className="experience-card__details">
                                    Jan 2018 - Apr 2018
                                </p>
                            </div>
                        </li>
                    </ul>

                </div>

            </div>

        </motion.div>
    );
};

export default Experience;