import React, { useState } from 'react';
import styled from 'styled-components';
import images from '../utils/images';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';
import backgroundImg from '../assets/bgWhite.png'
import { slideIn } from '../utils/animations';

const Navbar = () => {
    const navItems = ['home', 'about', 'work', 'skills', 'testimonial', 'contact'];
    const [toggle, setToggle] = useState(false);

    return (
        <StyledNav>
            <div className='logo' onClick={() => window.scrollTo({ top: 0, left: 0 })}>
                <img src={images.mark} alt="" />
            </div>
            <ul className='nav'>
                {navItems.map(item => (
                    <li key={`link-${item}`} className='app__flex p-text'>
                        <div className='gradient'></div>
                        <a href={`#${item}`}>{item}</a>
                    </li>
                ))}
            </ul>
            <div className="sm-nav">
                <HiMenuAlt4 onClick={() => setToggle(true)} />
                <AnimatePresence>
                    {toggle && (
                        <motion.div variants={slideIn} initial="hidden" animate="show" exit="exit">
                            <HiX onClick={() => setToggle(false)} />
                            <ul className='sm-ul'>
                                {navItems.map(item => (
                                    <li key={`link-${item}`} className='app__flex p-text'>
                                        <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>
        </StyledNav>
    );
};

const StyledNav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    min-height: 70px;
    padding: 1rem 2rem;
    background: rgba(255, 255, 255, 0.25);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    position: fixed;
    top: 0;
    z-index: 2;

    @media (min-width: 2000px) {
        min-height: 100px;
    }

    .logo {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        cursor: pointer;

        img {
            width: 90px;
            height: 30px;
            filter: contrast(0.8);
            transform: scale(1.2);

            @media (min-width: 2000px) {
                width: 180px;
                height: 40px;
            }
        }
    }

    ul.nav {
        display: flex;
        flex: 1;
        /* justify-content: center; */
        justify-content: space-evenly;
        align-items: center;

        li {
            position: relative;
            margin: 0 1rem;
            cursor: pointer;
            /* flex-direction: column; */

            .mask {
                width: 5px;
                height: 5px;
                background: transparent;
                border-radius: 50%;
                margin-bottom: 5px;
            }

            .gradient {
                position: absolute;
                bottom: 0;
                left: -10%;
                width: 120%;
                height: 2px;
                margin-bottom: -4px;
                background: #A770EF;  /* fallback for old browsers */
                background: -webkit-linear-gradient(to right, #FDB99B, #CF8BF3, #A770EF);  /* Chrome 10-25, Safari 5.1-6 */
                background: linear-gradient(to right, #FDB99B, #CF8BF3, #A770EF); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
                transform: scaleX(0);
                opacity: 0;
                transition: all 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                transform-origin: left;

            }

            &:hover {
                .gradient {
                    transform: scaleX(1);
                    opacity: 1;
                }
                   
            }

            a {
                color: var(--gray-color);
                text-decoration: none;
                flex-direction: column;
                text-transform: uppercase;
                font-weight: 500px;
                transition: all 0.3s ease-in-out;

                &:hover {
                    color: var(--secondary-color);
                }
            }

            /* &:hover {
                div {
                    background: var(--secondary-color);
                }
            } */
        }

        @media (max-width: 900px) {
            display: none;
        }
    }

    .sm-nav {
        width: 35px;
        height: 35px;
        border-radius: 50%;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        background: var(--secondary-color);

        svg {
            width: 70%;
            height: 70%;
            color: var(--white-color);
            cursor: pointer;
        }

        div {
            position: fixed;
            top: 0;
            bottom: 0;
            right: 0;
            left: 0;
            z-index: 5;

            padding: 1rem;

            width: 100%;
            height: 100vh;
            
            display: flex;
            justify-content: flex-end;
            align-items: flex-end;
            flex-direction: column;
            
            background: url(${backgroundImg});
            background-color: var(--white-color);
            background-size: cover;
            background-repeat: repeat;

            /* top box shadow */
            box-shadow: 0px 0px 20px rgba(168, 168, 168, 0.15);

            svg {
                width: 35px;
                height: 35px;
                color: var(--secondary-color);
                margin: 0.5rem 1rem;
            }

            .sm-ul {
                list-style: none;
                margin: 0;
                padding: 0;
                height: 100%;
                width: 100%;

                display: flex;
                justify-content: flex-start;
                align-items: flex-start;
                flex-direction: column;

                li {
                    margin: 1rem;

                    a {
                        color: var(--gray-color);
                        text-decoration: none;
                        font-size: 1rem;
                        text-transform: uppercase;
                        font-weight: 500;

                        transition: all 0.3s ease-in-out;

                        &:hover {
                            color: var(--secondary-color);
                        }
                    }
                }
            }

        }

        @media (min-width: 900px) {
                display: none;
            }
    }

`

export default Navbar;