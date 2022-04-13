import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import ReactTooltip from 'react-tooltip';
import { AppWrap, MotionWrap } from '../wrapper';
import { urlFor, client } from '../client';

const Skills = () => {
    const [experiences, setExperiences] = useState([]);
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        const query = '*[_type == "experiences"] | order(order asc)';
        const skillsQuery = '*[_type == "skills"] | order(order desc)';

        client.fetch(query).then((data) => {
            setExperiences(data);
        });

        client.fetch(skillsQuery).then((data) => {
            setSkills(data);
        });
    }, []);


    return (
        <StyledSkills>
            <h2 className="head-text">Skills & Experiences</h2>

            <div className="app__skills-container">
                <motion.div className="app__skills-list">
                    {skills.map(skill => (
                        <motion.div
                            whileInView={{ opacity: [0, 1] }}
                            transition={{ duration: 0.2 }}
                            className="app__skills-item app__flex"
                            key={skill.name}
                        >
                            <div
                                className="app__flex icon"
                                style={{ backgroundColor: skill.bgColor || '#F2F3F5' }}
                            >
                                <img src={urlFor(skill.icon)} alt={skill.name} />
                            </div>
                            <p className="p-text">{skill.name}</p>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div className="app__skills-exp-works">
                    {experiences.map((experience) => (
                        <motion.div
                            className='app__skills-exp-item'
                            key={experience.year}
                        >
                            <div className="app__skills-exp-year">
                                <p className="bold-text">{experience.year}</p>
                            </div>
                            <motion.div className='app__skills-exp-works'>
                                {experience.works?.map((work, i) => (
                                    <React.Fragment key={i}>
                                        <motion.div
                                            whileInView={{ opacity: [0, 1] }}
                                            transition={{ duration: 0.2 }}
                                            className="app__skills-exp-work"
                                            data-tip
                                            data-for={work.name}

                                        >
                                            <h4 className="bold-text">{work.name}</h4>
                                            <p className="p-text">{work.company}</p>
                                        </motion.div>
                                        <ReactTooltip
                                            id={work.name}
                                            effect="solid"
                                            arrowColor="#fff"
                                            className="skills-tooltip"
                                            backgroundColor="white"
                                            textColor='#6b7688'
                                        >
                                            {work.desc}
                                        </ReactTooltip>
                                    </React.Fragment>
                                ))}

                            </motion.div>
                        </motion.div>

                    ))}
                </motion.div>
            </div>

        </StyledSkills>
    );
};

const StyledSkills = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 5% 10%;

   
    @media (max-width: 600px) {
            padding: 5%;
        }

    h2 {
        padding-bottom: 3rem;
    }

    @media (min-width: 2000px) {
        h2 {
            padding-bottom: 5rem;
        }
    }

    .app__skills-container {
        display: flex;
        gap: 3rem;

        @media (min-width: 2000px) {
            gap: 5rem;
        }

        @media (max-width: 850px) {
            flex-direction: column;
            justify-content: center;
            align-items: center;
        } 

        .app__skills-list {
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-start;
            align-items: flex-start;
            flex-basis: 60%;

            @media (max-width: 850px) {
                justify-content: center;
                align-items: center;
            } 
            

            .app__skills-item {
                display: flex;
                flex-direction: column;
                align-items: center;
                text-align: center;
                margin: 1rem;
                flex-basis: 8%;
                transition: all 0.3s ease-in-out;

                .icon {
                    width: 100px;
                    height: 100px;
                    border-radius: 50%;
                    /* background-color: white; */

                    img {
                        width: 50%;
                        height: 50%;
                        /* object-fit: cover; */
                        
                    }

                    &:hover {
                        box-shadow: 0 0 25px #fef4f5;

                        img {
                            filter: brightness(1.1);

                        }
                    }

                    @media (min-width: 2000px) {
                        width: 150px;
                        height: 150px;
                    }

                    @media (max-width: 600px) {
                        width: 80px;
                        height: 80px;
                    }

                    @media (max-width: 450px) {
                        width: 60px;
                        height: 60px;
                    }
                }

                p {
                    font-weight: 500;
                    margin-top: 0.5rem;
                    text-align: center;

                }

                @media (min-width: 2000px) {
                    margin: 1rem 2rem;

                    p {
                        margin-top: 1rem;
                    }
                }
            }

        }
    }

    .app__skills-exp-works {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        flex-basis: 40%;
        /* margin-top: 1rem */

        @media (max-width: 850px) {
            /* margin-top: 2rem; */

        }

        .app__skills-exp-item {
            width: 100%;
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            margin: 1rem 0;
            gap: 3rem;

            @media (max-width: 450px) {
                gap: 1rem;
            }

            .app__skills-exp-works {
                flex: 1;
                flex-basis: 80%;

                .app__skills-exp-work {
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    align-items: flex-start;
                    margin-bottom: 1rem;
                    cursor: pointer;

                    &:not(:nth-child(1)) {
                        margin: 1rem 0;
                    }

                    h4 {
                        font-weight: 500;
                    }

                    p {
                        font-weight: 400;
                        color: var(--gray-color);
                        margin-top: 5px;
                    }
                }
            }

            .app__skills-exp-year {
                flex-basis: 20%;
                display: flex;
                justify-content: flex-end;
                /* text-align: right; */

                p {
                    font-weight: 800;
                    color: var(--secondary-color);
                }
            }

            .skills-tooltip {
                max-width: 300px !important;
                box-shadow: 0 0 25px rgba(0, 0, 0, 0.1) !important;
                border-radius: 5px !important;
                padding: 1rem !important;
                text-align: center !important;
                line-height: 1.5 !important;
                opacity: 1 !important;

                @media screen and (min-width: 2000px) {
                    font-size: 1.75rem !important;
                    max-width: 500px !important;
                    line-height: 2 !important;
                }

            }
        }
    }
`


export default AppWrap(
    MotionWrap(Skills, 'app__skills'),
    'skills',
    'app__whitebg'
);