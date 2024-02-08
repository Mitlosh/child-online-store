import styled from "styled-components";
import logoPink from "../assets/images/logo-pink.png";
import google from "../assets/images/google.svg";
import facebook from "../assets/images/facebook.svg";
import Button from "../components/Button";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
  const email = useRef();
  const password = useRef();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email && !password) return
    localStorage.setItem("userEmail", email.current.value);
    localStorage.setItem("userPassword", password.current.value);
    navigate('/');
  }

  return (
    <AuthWrapper>
      <header>
        <img src={logoPink} alt="" className="logo"/>
      </header>
      <h1 className="headline">Вхід</h1>
      <form action="submit" onSubmit={(e) => handleSubmit(e)} className="form">
        <input type="text" ref={email} placeholder="Телефон або e-mail"     className="form-input"/>
        <input type="password" ref={password} placeholder="Пароль" className="form-input"/>
        <div className="form-btn">
          <Button text="Забули пароль?" btnStyle={3} />
        </div>
        <div className="form-btn">
          <Button text="Увійти" />
        </div>
        <div className="form-btn">
          <Button text="У мене немає аккаунта" btnStyle={2} />
        </div>
      </form>
      <footer>
        <div className="divider">
          <div className="divider-item"></div>
          <p className="divider-text">Або</p>
          <div className="divider-item"></div>
        </div>
        <p className="footer-text">Увійти за допомогою</p>
        <div className="socials">
          <img src={google} alt="" className="socials-item"/>
          <img src={facebook} alt="" className="socials-item"/>
        </div>
      </footer>
    </AuthWrapper>
  )
}

export default AuthPage

const AuthWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
max-width: 328px;
margin: 0 auto;
margin-bottom: 120px;

.logo {
  width: 190px;
  margin: 40px 0;
}

.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin: 30px 0;
  
  .form-input {
    width: 328px;
    padding: 20px;
    border-radius: 5px;
    border: 1px solid var(--clr-lightgrey);
  }
  .form-btn button{
    width: 328px;
  }
}

.divider {
  display: flex;
  align-items: center;
  gap: 20px;
  width: 328px;
  margin-bottom: 30px;
  
  .divider-text {
    color: var(--clr-grey);
  }
  .divider-item {
    width: 100%;
    height: 1px;
    background: var(--clr-lightgrey);
  }
}

.footer-text {
  margin-bottom: 15px;
}

.socials {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;

  &-item {
    width: 40px;
  }
}
`