import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../wrapper';
import { urlFor, client } from '../client';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';

const Work = () => {
    const [works, setWorks] = useState([]);
    const [filterWork, setFilterWork] = useState([]);
    const [activeFilter, setActiveFilter] = useState('Featured');
    const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

    useEffect(() => {
        const query = '*[_type == "works"]';

        client.fetch(query).then((data) => {
            console.log(data)
            const works = data.sort((a, b) => b.tags.length - a.tags.length)
            const filtered = works.filter((work) => work.categories.includes('Featured'));

            setWorks(works);
            setFilterWork(filtered);
        });
    }, []);

    const handleWorkFilter = (item) => {
        setActiveFilter(item);
        setAnimateCard([{ y: 100, opacity: 0 }]);

        setTimeout(() => {
            setAnimateCard([{ y: 0, opacity: 1 }]);

            if (item === 'All') {
                setFilterWork(works);
            } else {
                const filtered = works.filter((work) => work.categories.includes(item));

                setFilterWork(filtered);
            }
        }, 500);
    };

    return (
        <StyledWork>
            <h2 className="head-text">My Creative <span>Portfolio</span> </h2>

            <div className="app__work-filter">
                {['Featured', 'Full Stack', 'Frontend', 'All'].map((item, index) => (
                    <div
                        key={index}
                        onClick={() => handleWorkFilter(item)}
                        className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
                    >
                        {item}
                    </div>
                ))}
            </div>
            <motion.div
                animate={animateCard}
                transition={{ duration: 0.5, delayChildren: 0.5 }}
                className="app__work-portfolio"
            >

                {filterWork.map((work, index) => (
                    <motion.div className="app__work-item app__flex" key={index}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.8 }}
                        onClick={() => window.open(work.projectLink, '_blank').focus()}
                    >
                        <div className="app__work-img app__flex">
                            <img src={urlFor(work.imgUrl)} alt={work.title} />
                            <motion.div
                                whileHover={{ opacity: [0, 1] }}
                                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                                className="app__work-hover app__flex"
                            >
                                <a href={work.projectLink} target="_blank" rel="noreferrer" >
                                    <motion.div
                                        whileInView={{ scale: [0, 1] }}
                                        whileHover={{ scale: [1, 0.90] }}
                                        transition={{ duration: 0.25 }}
                                        className="app__flex icon"
                                    >
                                        <AiFillEye />
                                    </motion.div>
                                </a>
                                <a href={work.codeLink} target="_blank" rel="noreferrer" onClick={e => e.stopPropagation()}>
                                    <motion.div
                                        whileInView={{ scale: [0, 1] }}
                                        whileHover={{ scale: [1, 0.90] }}
                                        transition={{ duration: 0.25 }}
                                        className="app__flex icon"
                                    >
                                        <AiFillGithub />
                                    </motion.div>
                                </a>
                            </motion.div>
                        </div>

                        <div className="app__work-content app__flex">
                            <h4 className="bold-text">{work.title}</h4>
                            <p className="p-text" style={{ marginTop: 10 }}>{work.description}</p>

                            <div className="app__work-tag app__flex">
                                {window.innerWidth > 700 ?
                                    work.tags.map((tag, i) => (
                                        <p key={i} className="p-text tag">{tag}</p>
                                    ))
                                    :
                                    work.tags.slice(0, 3).map((tag, i) => (
                                        <p key={i} className="p-text tag">{tag}</p>
                                    ))
                                }

                            </div>
                        </div>
                    </motion.div>
                ))}

            </motion.div>

        </StyledWork>
    );
};

const StyledWork = styled.div`
    display: flex;
    flex-direction: column;

    .app__work-filter {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        margin: 4rem 0 2rem;
        gap: 1.5rem;
        
        .app__work-filter-item {
            padding: 0.5rem 1rem;
            border-radius: 0.5rem;
            cursor: pointer;
            background-color: white;
            color: black;
            font-weight: bold;
            transition: all 0.3s ease-in-out;

            &:hover {
                background-color: var(--secondary-color);
                color: white;
            }

            @media (min-width: 2000px) {
                padding: 1rem 2rem;
                border-radius: 0.85rem;
            }
        }

        .item-active {
            background-color: var(--secondary-color);
            color: white;

        }
    }

    .app__work-portfolio {
        /* display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center; */

        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
        gap: 3rem;
        padding: 3rem 10%;
        justify-content: center;

        @media (max-width: 500px) {
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

        }

        .app__work-item {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            /* padding: 1rem; */
            border-radius: 0.75rem;
            background-color: white;
            color: black;
            cursor: pointer;
            transition: all 0.3s ease-in-out;

            &:hover {
                box-shadow: 0 0 25px rgba(0, 0, 0, 0.2);
            }

            .app__work-img {
                position: relative;
                width: 100%;

                img {
                    display: block;
                    aspect-ratio: 3.5/2;
                    width: 100%;
                    object-fit: cover;
                    border-radius: 0.75rem;

                }
            }
           
            .app__work-hover {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.5);
                border-radius: 0.75rem;
                opacity: 0;
                transition: all 0.3s ease-in-out;

                .icon {
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    background-color: rgba(0, 0, 0, 0.5);
                    color: white;
                    margin: 1rem;
                    font-family: var(--font-base);
                    font-weight: bold;
                    cursor: pointer;
                    transition: all 0.3s ease;


                    svg {
                        width: 50%;
                        height: 50%;
                        color: var(--white-color);
                    }
                }
            }

            .app__work-content {
                padding: 2rem;
                width: 100%;
                position: relative;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                gap: 1rem;
                h4 {
                    line-height: 1.5;
                    text-align: center;

                }

                p {
                    text-align: justify;

                }

                .app__work-tag {
                    position: absolute;
                    top: 0;
                    transform: translateY(-100%);
                    display: flex;
                    justify-content: center;
                    align-items: flex-end;

                    p {
                        margin-right: 0.5rem;
                        padding: 0.5rem 1rem;
                        border-radius: 5px 5px 0 0;
                        background-color: white;
                        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                        text-align: center;

                    }
                }
            }
        }
    }
    @media (min-width: 2000px) {
        .p-text {
            font-size: 1.2rem !important;

            &.tag {
            font-size: 0.8rem !important;

            }
        }
    
    }

    @media (min-width: 2400px) {
        .p-text {
            font-size: 1.4rem !important;

            &.tag {
                font-size: 1rem !important;

            }
        }
    
    }
    
`


export default AppWrap(
    MotionWrap(Work, 'app__works'),
    'work',
    // 'app__whitebg'
);