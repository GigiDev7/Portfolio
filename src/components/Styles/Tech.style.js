import styled from 'styled-components';

export const Container = styled.div`
  width: 60%;
  margin: 100px auto;
  display: flex;
  justify-content: space-around;

  @media only screen and (max-width: 768px) {
    flex-wrap: wrap;
  }
  @media only screen and (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  h2 {
    font-size: 1.1rem;
    color: #d4c8c8;
    margin-top: 10px;
    margin-bottom: 15px;
  }

  p {
    color: #d4c8c8;
    font-size: 0.9rem;
    width: 90%;
  }

  li {
    list-style: none;
    margin-top: 5px;
    color: #d4c8c8;
    font-size: 0.9rem;
  }

  @media only screen and (max-width: 768px) {
    display: inline-block;
    width: 50%;
    margin-bottom: 30px;
  }
`;
