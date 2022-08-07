import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import images from '../utils/images';
import backgroundImg from '../assets/bgIMG.png'
import { heroBubble } from '../utils/animations';
import { AppWrap } from '../wrapper';

const Header = () => {
    return (
        <StyledHeader className='app__header app__flex'>
            <motion.div

                className="app__header-info"
            >
                <motion.div className="app__header-badge"
                    whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                    transition={{ duration: 0.75 }}
                >
                    <div className="badge-cmp app__flex">
                        <span>👋</span>
                        <div style={{ marginLeft: 20 }}>
                            <p className="p-text">Hello, I am</p>
                            <h1 className="head-text">Mark</h1>
                        </div>
                    </div>
                    <div className="tag-cmp app__flex" >
                        <p className="p-text">Full Stack Web Developer</p>
                        <p className="p-text">Front-end Specialist</p>
                    </div>
                </motion.div>
            </motion.div>

            <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5, delayChildren: 0.5 }}
                className="app__header-img"
            >
                <img src={images.fig2} alt="profile_bg" />
                <motion.img
                    whileInView={{ scale: [0, 1] }}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                    src={images.circle}
                    alt="profile_circle"
                    className="overlay_circle"
                />
            </motion.div>

            <motion.div
                variants={heroBubble}
                whileInView={heroBubble.whileInView}
                className="app__header-stacks"
            >
                {[images.javascript, images.react, images.typescript].map((circle, index) => (
                    <div className="stack-cmp app__flex" key={`stack-${index}`}>
                        <img src={circle} alt="profile_bg" />
                    </div>
                ))}

            </motion.div>
            <motion.div
                variants={heroBubble}
                whileInView={heroBubble.whileInView}
                className="app__header-stacks secondary"
            >
                {[images.html, images.rails, images.node, images.sass].map((circle, index) => (
                    <div className="stack-cmp app__flex" key={`stack-${index}`}>
                        <img src={circle} alt="profile_bg" />
                    </div>
                ))}

            </motion.div>

        </StyledHeader>
    );
};

const StyledHeader = styled(motion.div)`
    position: relative;
    background: url(${backgroundImg});
    background-size: cover;
    background-repeat: repeat;
    background-position: center;
    width: 100%;
    height: 100%;
    /* min-height: var(--min-height); */
    /* margin-top: 70px; */
    /* flex: 1; */
    /* padding: 2rem 2rem 0; */
    padding-top: 2rem;
    gap: 2rem;

    @media (min-width: 2000px) {
        /* margin-top: 100px; */
        /* padding-top: 6rem; */
        gap: 3rem;
    }

    @media (max-width: 1400px) {
        flex-direction: column;
    }

    @media (max-width: 450px) {
        /* padding: 0rem 1rem 2rem; */
    }
    
    .app__header-info {
        /* flex: 0.65; */
        display: flex;
        flex-basis: 20%;

        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        height: 100%;
        margin-left: 2rem;

        @media (max-width: 1400px) {
            /* width: 100%; */
            margin-right: 0rem;
            /* justify-content: flex-start; */
                align-self: flex-start;
                flex-basis: initial;

            /* align-self: flex-end; */

        }

        .app__header-badge {
            width: 100%;
            display: flex;
            justify-content: flex-end;
            align-items: flex-end;
            flex-direction: column;

            .badge-cmp,
            .tag-cmp {
                padding: 1rem 2.5rem;
                background: var(--white-color);
                border-radius: 1.5rem;
                box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
            }

            .tag-cmp {
                flex-direction: column;
                margin-top: 3rem;

                p {
                    width: 100%;
                    text-transform: uppercase;
                    text-align: right;
                }
            }

            span {
                font-size: 2.5rem;

                @media (min-width: 2000px) {
                    font-size: 5rem;
                }
            }

            /* @media (max-width: 1200px) {
                justify-content: flex-start;
                align-items: flex-start;
            } */
        }
    }

    .app__header-img {
        display: flex;
        /* justify-content: flex-end; */
        align-items: flex-end;
        flex: 1;
        height: 100%;
        flex-basis: 50%;
        position: relative;

        img {
            width: 100%;
            object-fit: contain;
            z-index: 1;
            display: block;
        }

        .overlay_circle {
            position: absolute;
            left: 0;
            right: 0;
            bottom: -10%;
            z-index: 0;
            width: 100%;
            height: 90%;
        }

        @media  (max-width: 1400px) {
            margin: 2rem 0;
            flex-basis: initial;

        }

    }

    .app__header-stacks {
        display: flex; 
        flex: 0.75;
        flex-direction: column;
        gap: 2rem;
        position: relative;
        flex-basis: 12.5%;

        .stack-cmp {
            width: 8rem;
            height: 8rem;
            border-radius: 50%;
            background: white;

            img {
                width: 60%;
                height: 60%;
            }

            &:nth-child(1) {
                width: 100px;
                height: 100px;
            }

            &:nth-child(2) {
                margin: 0 1.75rem;
                width: 150px;
                height: 150px;
            }

            &:nth-child(3) {
                width: 100px;
                height: 100px;
            }

            @media screen and (min-width: 2000px) {
                &:nth-child(2) {
                    width: 250px;
                    height: 250px;
                }

                &:nth-child(3) {
                    width: 170px;
                    height: 170px;
                }

                &:nth-child(1) {
                    width: 170px;
                    height: 170px;
                }
            }
            
        }


        &.secondary {
             margin-left: -2rem;

             div:nth-child(1), div:nth-child(4) {
                width: 80px;
                height: 80px;
                margin-left: -2rem;
            }

             div:nth-child(2) {
                margin: 0;
                width: 120px;
                height: 120px;
            }

            div:nth-child(3) {
                width: 120px;
                height: 120px;
            }

            @media screen and (min-width: 2000px) {
                div:nth-child(2) {
                    width: 200px;
                    height: 200px;
                }

                div:nth-child(3) {
                    width: 200px;
                    height: 200px;
                }

                div:nth-child(1), div:nth-child(4) {
                    width: 150px;
                    height: 150px;
                }
            }

            @media (max-width: 1400px) {
                div {
                    margin: 0 !important;

                }
            }

        }

            @media  (max-width: 1400px) {
                width: 100%;
                flex-direction: row;
                flex-wrap: wrap;
                justify-content: space-evenly
                ;
                /* margin-left: 0; */

                .stack-cmp {
                    width: 8rem !important;
                    height: 8rem !important;

                    img {
                        width: 30% ;
                        height: 30% ;
                    }
                }
            }

            @media  (max-width: 800px) {
                .stack-cmp {
                    width: 5rem !important;
                    height: 5rem !important;
                    margin: 0 !important;
                }
            }

            @media  (max-width: 560px) {
                flex: 1;
                flex-basis: initial;

                .stack-cmp {
                    width: 3rem !important;
                    height: 3rem !important;
                }
            }

            @media  (max-width: 400px) {

                .stack-cmp {
                    width: 2.2rem !important;
                    height: 2.2rem !important;
                }
            }
    }
`

export default AppWrap(Header, 'home');
// export default Header;