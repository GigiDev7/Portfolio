import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { GrReactjs } from 'react-icons/gr';
import {
  Container,
  Div1,
  Div2,
  Div3,
  MobileBars,
  MobileDiv,
} from './Styles/Header.style';
import { GoThreeBars } from 'react-icons/go';

const Header = () => {
  const [isShown, setIsShown] = useState(false);

  const handleClick = () => {
    setIsShown(!isShown);
  };

  const handleClose = () => {
    setIsShown(false);
  };

  return (
    <Container>
      <MobileBars>
        <GoThreeBars
          onClick={handleClick}
          style={{ fontSize: '1.2rem', cursor: 'pointer' }}
        />
      </MobileBars>
      {isShown && (
        <MobileDiv isShown={isShown}>
          <NavLink
            onClick={handleClose}
            activeClassName="active"
            to="/projects"
          >
            Projects
          </NavLink>
          <NavLink
            onClick={handleClose}
            activeClassName="active"
            to="/technologies"
          >
            Technologies
          </NavLink>
          <NavLink onClick={handleClose} activeClassName="active" to="/about">
            About
          </NavLink>
        </MobileDiv>
      )}

      <Div1>
        <GrReactjs style={{ color: '#fff', fontSize: '1.1rem' }} />
        <Link to="/">Portfolio</Link>
      </Div1>
      <Div2>
        <NavLink activeClassName="active" to="/projects">
          Projects
        </NavLink>
        <NavLink activeClassName="active" to="/technologies">
          Technologies
        </NavLink>
        <NavLink activeClassName="active" to="/about">
          About
        </NavLink>
      </Div2>
      <Div3>
        <a href="https://github.com/GigiDev7" target="_blank" rel="noreferrer">
          <BsGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/gigi-vadachkoria-b86547179/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
      </Div3>
    </Container>
  );
};

export default Header;
