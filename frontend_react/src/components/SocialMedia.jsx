import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const SocialMedia = () => {
  return (
    <div className='app__social'>
      <div>
        <a href="https://github.com/markkong30" target="_blank">
          <BsGithub />
        </a>
      </div>
      <div>
        <a href="mailto:markkong30@gmail.com" target="_blank">
          <MdEmail />
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/yuen-kei-kong-810981225/" target="_blank">
          <BsLinkedin />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;