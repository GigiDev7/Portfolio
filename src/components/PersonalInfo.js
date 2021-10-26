import React from 'react';
import {
  Container,
  IconContainer,
  Div1,
  Wrapper1,
  Div2,
  Div3,
  Wrapper2,
  InfoContainer,
  Info,
} from './Styles/PersonalInfo.style';
import { BsArrowRightCircleFill, BsFillPhoneFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { HiHome } from 'react-icons/hi';

const PersonalInfo = () => {
  return (
    <>
      <Container>
        <Div1>
          <Wrapper1>
            <h2>2020</h2>
            <p>Started my journey</p>
          </Wrapper1>
          <IconContainer>
            <BsArrowRightCircleFill />
          </IconContainer>
          <Wrapper1>
            <h2>2021</h2>
            <p>
              Coded 15+ projects, Constantly improving, Learning new
              technologies, Expanding knowledge
            </p>
          </Wrapper1>
        </Div1>
        <Div2>
          <h1>Personal Achievements</h1>
          <Div3>
            <Wrapper2>
              <p>Official Cisco CCNA Certificate</p>
            </Wrapper2>
            <Wrapper2>
              <p>4 month Frontend Course in DevNet,Kutaisi</p>
            </Wrapper2>
            <Wrapper2>
              <p>15 + projects</p>
            </Wrapper2>
            <Wrapper2>
              <p>Certificates from different online learning courses.</p>
            </Wrapper2>
          </Div3>
        </Div2>
        <InfoContainer>
          <Info>
            <BsFillPhoneFill style={{ fontSize: '1.2rem', color: '#c4751a' }} />
            <p>(+995) 571778985</p>
          </Info>
          <Info>
            <MdEmail style={{ fontSize: '1.2rem', color: '#c4751a' }} />
            <p>gigivadachkoria@gmail.com</p>
          </Info>
          <Info>
            <HiHome style={{ fontSize: '1.2rem', color: '#c4751a' }} />
            <p>Georgia, Kutaisi</p>
          </Info>
        </InfoContainer>
      </Container>
    </>
  );
};

export default PersonalInfo;