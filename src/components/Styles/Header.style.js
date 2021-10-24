import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;

  @media only screen and (max-width: 480px) {
    justify-content: center;
  }

  .active {
    border-bottom: 2px solid orange;
  }
`;

export const Div1 = styled.div`
  display: flex;
  align-items: center;
  @media only screen and (max-width: 480px) {
    //margin-left: 20px;
    display: none;
  }
  a {
    color: #fff;
    text-decoration: none;
    font-size: 1.2rem;
    padding-left: 5px;

    @media only screen and (max-width: 480px) {
      font-size: 0.8rem;
    }
  }
`;

export const Div2 = styled.div`
  @media only screen and (max-width: 480px) {
    display: none;
  }
  a {
    color: #fff;
    text-decoration: none;
    font-size: 1.2rem;
    transition: color 0.5s ease;
    margin-left: 50px;
    padding-bottom: 5px;

    @media only screen and (max-width: 480px) {
      font-size: 0.8rem;
      margin-left: 30px;
    }
  }

  a:hover {
    color: #e4d5ea;
    border-bottom: 2px solid orange;
  }
`;

export const Div3 = styled.div`
  @media only screen and (max-width: 480px) {
    margin-left: 20px;
  }
  a {
    color: #fff;
    margin-right: 20px;
    font-size: 1.3rem;

    @media only screen and (max-width: 480px) {
      font-size: 0.8rem;
      margin-left: 15px;
      margin-right: 0;
    }
  }
`;

export const MobileBars = styled.div`
  color: #fff;
  display: none;
  align-items: center;
  position: relative;

  @media only screen and (max-width: 480px) {
    display: flex;
    margin-right: 40px;
  }
`;

export const MobileDiv = styled.div`
  position: absolute;
  top: 7%;
  left: 15%;
  animation: animateOn 0.5s;

  @keyframes animateOn {
    from {
      transform: translateY(-500%);
    }
    to {
      transform: translateY(0);
    }
  }

  a {
    color: #fff;
    text-decoration: none;
    font-size: 0.7rem;
    transition: color 0.5s ease;
    margin-left: 50px;
    padding-bottom: 5px;
    display: block;
  }

  a:hover {
    color: #e4d5ea;
    border-bottom: 2px solid orange;
  }
`;
