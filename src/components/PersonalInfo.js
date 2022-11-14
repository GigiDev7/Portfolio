import React from 'react';
import {
  Container,
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
import { motion } from 'framer-motion';

const PersonalInfo = () => {
  return (
    <>
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ x: [-100, 0], opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Div1>
            <Wrapper1>
              <h2>2020</h2>
              <p>Started my journey</p>
            </Wrapper1>
          
              <BsArrowRightCircleFill style={{color: 'white', fontSize: '40px', marginRight: '15px'}} />
          
            <Wrapper1>
              <h2>2021</h2>
              <p>
                Coded 10+ projects, Constantly improving, Learning new
                technologies, Expanding knowledge
              </p>
            </Wrapper1>
          
              <BsArrowRightCircleFill style={{color: 'white', fontSize: '40px', marginRight: '15px'}} />
           
            <Wrapper1>
              <h2>02/2022</h2>
              <p>Internship at Exadel</p>
            </Wrapper1>
          
              <BsArrowRightCircleFill style={{color: 'white', fontSize: '40px', marginRight: '15px'}} />
           
            <Wrapper1>
              <h2>06/2022 to Present</h2>
              <p>Full Stack Developer at Exadel</p>
            </Wrapper1>
          </Div1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ x: [100, 0], opacity: 1 }}
          transition={{ duration: 1 }}
        >
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
                <p>Certificates from different online learning courses.</p>
              </Wrapper2>
              <Wrapper2>
                <p>10 + projects</p>
              </Wrapper2>
            </Div3>
          </Div2>
        </motion.div>
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
