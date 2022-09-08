import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import images from '../utils/images';
import { AppWrap, MotionWrap } from '../wrapper';
import { client } from '../client';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isSubmitDisabled, setIsSubmitDiabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const form = useRef(null);
  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    const inputs = form.current.querySelectorAll('.input');
    for (const input of [...inputs]) {
      if (input.value.length == 0) {
        return setIsSubmitDiabled(true)
      }
    }
    return setIsSubmitDiabled(false);
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <StyledFooter>
      <h2 className="head-text">Take a coffee & chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:markkong30@gmail.com" className="p-text">markkong30@gmail.com</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+44 07743187767" className="p-text">+44 07743187767</a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex" ref={form}>
          <div className="app__flex">
            <input className="p-text input" type="text" placeholder="Your Name" name="username" value={username} onChange={handleChangeInput} autoComplete='off' />
          </div>
          <div className="app__flex">
            <input className="p-text input" type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} autoComplete='off' />
          </div>
          <div>
            <textarea
              className="p-text input"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
              autoComplete='off'
            />
          </div>
          {isSubmitDisabled ?
            <button type="button" className="p-text disabled">Send Message</button>
            :
            <motion.button type="button" className="p-text" onClick={handleSubmit}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >{!loading ? 'Send Message' : 'Sending...'}</motion.button>
          }
        </div>
      ) : (
        <div>
          <h3 className="head-text">
            Thank you for getting in touch!
          </h3>
        </div>
      )}
    </StyledFooter>
  );
};

const StyledFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  width: 100%;
  padding: 5% 10%;

  @media (max-width: 450px) {
    padding: 5%;

  }

  .app__footer-cards {
    width: 60%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    margin: 4em 2rem 2rem;

    .app__footer-card {
      min-width: 290px;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;

      margin: 1rem 0;
      padding: 1rem;
      border-radius: 10px;
      cursor: pointer;
      background-color: #fef4f5;

      transition: all 0.3s ease-in-out;

      img {
        width: 40px;
        height: 40px;
        margin: 0 0.7rem;
      }

      p {
        font-weight: 500;
      }
      a {
        text-decoration: none;
        font-weight: 500;
      }
      &:hover {
        box-shadow: 0 0 25px #fef4f5;
      }

      @media screen and (max-width: 450px) {
        width: 100%;
      }
    }

    @media screen and (max-width: 1300px) {
      width: 80%;
    }

    @media screen and (max-width: 1000px) {
      width: 100%;
    }
  }

  .app__footer-cards .app__footer-card:last-child {
    background-color: #f2f7fb;
  }

  .app__footer-cards .app__footer-card:last-child:hover {
    box-shadow: 0 0 25px #f2f7fb;
  }

  .app__footer-form {
    width: 60%;
    flex-direction: column;
    margin: 1rem 2rem;

    div {
      width: 100%;

      margin: 0.75rem 0;
      border-radius: 10px;
      cursor: pointer;
      background-color: var(--primary-color);

      transition: all 0.3s ease-in-out;

      input,
      textarea {
        width: 100%;
        padding: 0.95rem;
        border: none;
        border-radius: 7px;
        background-color: var(--primary-color);

        font-family: var(--font-base);
        color: var(--secondary-color);
        outline: none;
      }

      textarea {
        height: 170px;
      }

      &:hover {
        box-shadow: 0 0 25px var(--primary-color);
      }
    }

    button {
      padding: 1rem 2rem;
      border-radius: 10px;
      border: none;
      background-color: var(--secondary-color);

      font-weight: 500;
      color: var(--white-color);
      outline: none;
      margin: 2rem 0 0 0;
      font-family: var(--font-base);

      transition: cubic-bezier(0.55, 0.085, 0.68, 0.53);
      cursor: pointer;

      &:hover {
        background-color: #2430af;
      }

      &.disabled {
        background-color: #565fad;
        cursor: not-allowed;
      }
    }
    
    @media screen and (max-width: 1300px) {
      width: 80%;
      margin: 1rem 0;
    }

    @media screen and (max-width: 1000px) {
      width: 100%;
      /* margin: 1rem 0; */
    }
}
`

export default AppWrap(
  MotionWrap(Contact, 'app__contact'),
  'contact',
  'app__whitebg',
);