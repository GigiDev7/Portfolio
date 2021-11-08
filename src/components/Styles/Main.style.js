import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 30%;
  left: 20%;

  @media only screen and (max-width: 480px) {
    top: 20%;
    left: 30%;
  }
`;

export const Text = styled.h1`
  color: #fff;
  font-size: 3rem;
  word-spacing: 5px;
  line-height: 145%;

  @media only screen and (max-width: 480px) {
    font-size: 1.4rem;
    word-spacing: 1px;
  }
`;

export const Paragraph = styled.p`
  color: #fff;
  font-size: 1.1rem;
  word-spacing: 7px;
  line-height: 145%;
  width: 500px;
  margin-top: 20px;

  a {
    text-decoration: none;
    color: orange;
  }

  @media only screen and (max-width: 480px) {
    font-size: 0.8rem;
    width: 150px;
  }
`;
