import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <StyledFooter>
      <p>© 2022 Personal Portfolio by Mark Kong</p>
    </StyledFooter>
  );
};

const StyledFooter = styled.div`
  min-height: 50px;
  padding: 1rem 2rem;
  background-color: white;
  border-top: 1px solid rgba(0, 0, 0, 0.1);

  p {
    font-size: 0.8rem;
    color: grey;
  }
`


export default Footer;