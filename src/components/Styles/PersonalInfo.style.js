import styled from 'styled-components';

export const Container = styled.div`
  width: 60%;
  margin: 100px auto;
`;

export const Div1 = styled.div`
  display: flex;
  position: relative;
  margin-left: 20px;

  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }

  ::after {
    content: '';
    width: 60px;
    height: 5px;
    background: linear-gradient(to right, #6d8ecf, purple);
    border-radius: 5px;
    position: absolute;
    bottom: -80px;
  }
`;

export const IconContainer = styled.div`
  position: absolute;
  left: 25%;
  color: #d4c8c8;
  font-size: 1.4rem;

  @media only screen and (max-width: 1024px) {
    left: 34%;
  }

  @media only screen and (max-width: 768px) {
    left: 35%;
  }

  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

export const Wrapper1 = styled.div`
  width: 40%;

  @media only screen and (max-width: 1024px) {
    width: 65%;
  }

  @media only screen and (max-width: 768px) {
    width: 60%;
  }
  @media only screen and (max-width: 480px) {
    margin-top: 15px;
  }

  h2,
  p {
    color: #d4c8c8;
    @media only screen and (max-width: 480px) {
      font-size: 0.8rem;
    }
  }

  p {
    margin-top: 10px;
  }
`;

export const Div2 = styled.div`
  margin-top: 100px;
  color: #d4c8c8;
  border-bottom: 2px solid #071e3e;
  padding-bottom: 70px;

  h1 {
    margin-left: 20px;

    @media only screen and (max-width: 480px) {
      font-size: 1rem;
    }
  }
`;

export const Div3 = styled.div`
  display: flex;
  margin-top: 50px;

  @media only screen and (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

export const Wrapper2 = styled.div`
  width: 30%;
  background-color: #1b3d6c;
  margin-left: 20px;
  border-radius: 15px;
  padding-left: 15px;
  padding-top: 15px;
  padding-bottom: 50px;

  @media only screen and (max-width: 768px) {
    width: 45%;
    margin-top: 20px;
    padding-right: 10px;
  }

  p {
    color: #d4c8c8;
    font-size: 1.1rem;

    @media only screen and (max-width: 480px) {
      font-size: 0.8rem;
    }
  }
`;

export const InfoContainer = styled.div`
  margin-top: 100px;
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  p {
    margin-left: 20px;
    color: #d4c8c8;
    @media only screen and (max-width: 480px) {
      font-size: 0.8rem;
    }
  }
`;
