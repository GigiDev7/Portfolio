import styled from 'styled-components';

export const Container = styled.div`
  width: 40%;
  display: inline-block;
  margin: 80px 40px;
  transition: all 0.3s ease;

  /* :hover {
    transform: scale(1.2);
  } */
`;

export const Div1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  img {
    width: 300px;
    overflow: hidden;
    box-shadow: 11px 15px 28px 6px rgba(0, 0, 0, 0.75);

    @media only screen and (max-width: 480px) {
      width: 150px;
    }
  }

  h2 {
    color: #e4d5ea;
    margin-top: 20px;

    @media only screen and (max-width: 480px) {
      font-size: 0.8rem;
    }
  }
`;

export const Div2 = styled.div`
  color: #fff;
  p {
    margin-top: 10px;
    font-size: 1.1rem;
    margin-bottom: 10px;

    @media only screen and (max-width: 480px) {
      font-size: 0.8rem;
    }
  }

  h3 {
    font-size: 1.1rem;

    @media only screen and (max-width: 480px) {
      font-size: 0.8rem;
    }
  }
`;

export const Div3 = styled.div`
  margin-top: 5px;
  p {
    color: #fff;
    font-size: 0.9rem;

    @media only screen and (max-width: 480px) {
      font-size: 0.7rem;
    }
  }
`;

export const Div4 = styled.div`
  margin-top: 15px;

  button {
    padding: 8px 15px;
    background-color: #6d0808;
    color: #fff;
    border: none;
    border-radius: 15px;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 300;
    transition: all 0.3s ease;

    @media only screen and (max-width: 480px) {
      font-size: 0.8rem;
    }
  }

  button:hover {
    background-color: #580000;
  }

  .srcBtn {
    margin-left: 30px;

    @media only screen and (max-width: 480px) {
      margin-top: 10px;
      display: block;
      margin-left: 0;
    }
  }
`;
