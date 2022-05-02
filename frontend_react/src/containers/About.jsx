import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { client, urlFor } from '../client';
import { AppWrap, MotionWrap } from '../wrapper';

const About = () => {
    const [abouts, setAbouts] = useState([]);

    useEffect(() => {
        const query = '*[_type == "abouts"]';

        client.fetch(query).then((data) => {
            setAbouts(data.reverse());
        });
    }, [])

    return (
        <StyledAbout>
            <h2 className="head-text">I Know that <span>Good Web {window.innerWidth > 1200 ? 'Development' : 'Dev'}</span> <br />means  <span>Good Business</span></h2>

            <div className="app__profiles">
                {abouts.map((about, index) => (
                    <motion.div
                        whileInView={{ opacity: 1 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5, type: 'tween' }}
                        className="app__profile-item"
                        key={about.title + index}
                    >
                        <img src={urlFor(about.imgUrl)} alt={about.title} />
                        <h2 className="bold-text">{about.title}</h2>
                        <p className="p-text">{about.description}</p>
                    </motion.div>
                ))}
            </div>
        </StyledAbout>
    );
};

const StyledAbout = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: initial;
    padding: 0 5%;
    flex: 1;
    
    @media (max-width: 700px) {
        padding: 0;
    }

    .app__profiles {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 3rem;
        padding: 3rem;

        @media (min-width: 2000px) {
            gap: 5rem;
            
        }

        @media (max-width: 1250px) {
            grid-template-columns: repeat(2, minmax(200px, 1fr));
        }

        @media (max-width: 700px) {
            grid-template-columns: repeat(1, minmax(200px, 1fr));
        }

        .app__profile-item {

            img {
                aspect-ratio: 3/2;
                width: 100%;
                /* height: 170px; */
                border-radius: 15px;
                object-fit: cover;
            }

        }
    }

    .head-text {
        padding: 3rem;
    }

    .bold-text {
        margin-top: 20px;
    }

    .p-text {
        margin-top: 10px;
    }
    
`

export default AppWrap(
    MotionWrap(About, 'app__about'),
    'about',
    'app__whitebg'
);