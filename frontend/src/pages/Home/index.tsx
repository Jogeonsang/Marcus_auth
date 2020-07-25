import React from 'react';
import styled, {keyframes} from 'styled-components';
import {AiOutlineRight, AiOutlineExclamationCircle, AiOutlinePhone} from 'react-icons/ai';

const Home: React.FC = () => {
    return (
        <Container>
            <Content>
                <Header>
                    <Logo><img src="https://www.twilio.com/console/bundles/core/img/logo.png" alt="twilio_logo"/></Logo>
                    <h1>Get started with a Marcus account, <br/> Authentication uses email or phone. </h1>
                </Header>
                <Container>
                    <Card>
                        <div className="card_guide">
                            <h1>Welcome:</h1>
                            <div>
                                <h2>
                                    <AiOutlineExclamationCircle/>
                                    <span>Authenticated by phone?</span>
                                </h2>
                                <button>
                                    <AiOutlineRight color="white"/>
                                </button>
                            </div>
                        </div>
                        <div className="card_form">
                            <InputWrapper>
                                <AiOutlinePhone/>
                                <Input/>
                                <FormBtn>SET</FormBtn>
                            </InputWrapper>
                        </div>
                    </Card>
                </Container>
            </Content>
        </Container>
    )
};

export default Home

const buttonAnimation = keyframes`
    10% {
    transform: translateX(3px) rotate(2deg);
  }
  20% {
    transform: translateX(-3px) rotate(-2deg);
  }
  30% {
    transform: translateX(3px) rotate(2deg);
  }
  40% {
    transform: translateX(-3px) rotate(-2deg);
  }
  50% {
    transform: translateX(2px) rotate(1deg);
  }
  60% {
    transform: translateX(-2px) rotate(-1deg);
  }
  70% {
    transform: translateX(2px) rotate(1deg);
  }
  80% {
    transform: translateX(-2px) rotate(-1deg);
  }
  90% {
    transform: translateX(1px) rotate(0);
  }
  100% {
    transform: translateX(-1px) rotate(0);
  }
`;

const Container = styled.div`
  margin: 0 auto;
  padding: 0 10px;
  width: 740px;
  
  @media screen and (max-width: 991px) {
    width: auto;
    padding: 0;
  }
  @media screen and (min-width:  992px) {
    width: 960px;
  }
  @media screen and (min-width:  1200px) {
    width: 1200px;
  }
`;

const Content = styled.div`
  margin-bottom: 60px;
`;

const Header = styled.div`
    text-align: center;
    color: #fff;
    line-height: 1.4;
    margin-top: 80px;
    padding: 40px 0;
    
    h1 {
      font-size: 30px;
      font-weight: 300;
      line-height: 1.4;
      color: #fff;
      margin: 0;
      padding: 40px 10px;
    }
`;

const Logo = styled.div`
  img {
    width: 40px;
    height: 40px;
  }
`;

const Card = styled.div`
  max-width: 780px;
  margin: 0 auto;
  display: flex;
  
  .card_guide {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: linear-gradient(304deg,hsla(0,0%,100%,.4),#fff);
    min-height: 450px;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
    width: 45%;
    padding: 76px 56px;
    color: #233659;
    text-align: center;
    h1 {
      font-family: "Whitney SSm A";
      font-size: 18px;
      text-transform: uppercase;
      letter-spacing: .04em;
      margin-bottom: 24px;
      font-weight: 500;
      text-align: left;
    }
    
    div {
      h2 {
      text-align: left;
      font-size: 18px;
      font-weight: 400;
      letter-spacing: .04em;
      margin-bottom: 24px;
        svg {
          width: 20px;
          height: 20px;
        }
        span {
          position: relative;
          bottom: 3px;
          margin-left: 10px;
        }
      }
      button {
        width: 35px;
        height: 35px;
        border: none;
        border-radius: 50%;
        background-color: #233659;
        box-shadow: 0 10px 25px hsla(214,3%,59%,.9965);
        outline: none;
        cursor: pointer;
        transform: perspective(1px) translateZ(0);
        &:hover {
          animation: ${buttonAnimation} 0.75s linear 1;
        }
      
        svg {
          width: 15px;
          height: 15px;
          margin: 3px auto 0;
        }
      } 
    } 
  }
  
  .card_form {
    width: 55%;
    background: #fff;
    flex: 1;
    padding: 30px 50px;
    margin-left: 0;
    margin-right: 0;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
  }
`;

const InputWrapper = styled.div`
  position: relative;
  svg {
    position: absolute;
    width: 20px;
    height: 20px;
    top: 10px;
    left: 9px;
  }
`;
const Input = styled.input`
  padding-left: 35px;
  width: 100%;
  height: 40px;
  outline: none;
`;

const FormBtn = styled.button`
  display: block;
  line-height: 1.5;
  transition: all .2s ease-out;
  border-radius: 4px;
  background: #f22f46;
  box-shadow: 0 5px 30px hsla(214,3%,59%,.996);
  color: white;
  padding: 1.2em 2em;
  outline: none;
  margin-top: 30px;
  font-size: 15px;
  width: 100%;
  text-align: center;
  border: none;
`;