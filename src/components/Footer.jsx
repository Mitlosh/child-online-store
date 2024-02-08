import styled from "styled-components";
import { AiOutlineInstagram, AiOutlineYoutube } from "react-icons/ai";
import bgFooter from "../assets/images/bg-footer.png"
import motherBaby from "../assets/images/mother-playing-with-her-baby.png"
import arrowRight from "../assets/icons/arrow-right.svg"
import mastercard from "../assets/images/mastercard.png"
import visa from "../assets/images/visa.png"
import liqpay from "../assets/images/liqpay.png"
import Input from "./Input";
import { TbBrandFacebook } from "react-icons/tb";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="footer-top">
        <div className="footer-content container">
          <div className="footer-content-info">
            <p className="headline">ОТРИМУЙТЕ ПРОМОКОДИ ТА ЕКСКЛЮЗИВНІ ПРОПОЗИЦІЇ</p>
            <form className="newsletter-form">
              <Input placeholder="Ваш email" className="form-input"/>
              <button className="form-btn">
                <img src={arrowRight} alt="arrow-right" className="form-btn-icon" />
              </button>
            </form>
          </div>
          <img src={motherBaby} alt="mother-playing-with-her-baby" className="footer-top-image"/>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-content">
          <div className="footer-item footer-banner">
            <a href="#" className="headline">
            (063) 128-46-09
            </a>
            <a href="mailto:bubu.shop2018@gmail.com" className="para-text">bubu.shop2018@gmail.com</a>
            <p className="para-text">
            Одеса, вул. Михайлівська 8 (щодня з 10:00 до 20:00)
            </p>
            <ul className="connect-list">
              <li className="connect-item">
                <Link to="/" className="connect-link">
                  <AiOutlineInstagram size={22} />
                </Link>
              </li>
              <li className="connect-item">
                <Link to="/" className="connect-link">
                  <AiOutlineYoutube size={23}/>
                </Link>
              </li>
              <li className="connect-item">
                <Link to="/" className="connect-link">
                  <TbBrandFacebook size={22} />
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-info d-flex">
            <div className="footer-item">
              <h5 className="footer-item-title headline">Інформація</h5>
              <ul className="footer-item-links">
                <li>
                  <a href="#" className="footer-link">
                    Про нас
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Контакти
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Доставка і оплата
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Повернення та обмін
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Політика конфеденційності
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-item">
              <h5 className="footer-item-title headline">Каталог</h5>
              <div className="catalog-info d-flex">
                <ul className="footer-item-links">
                  <li>
                    <a href="#" className="footer-link">
                      Дитячі коляски
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer-link">
                      Дитяча кімната
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer-link">
                      Стільці і шезлонги
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer-link">
                      Гігієна та догляд
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer-link">
                      Гігієна та догляд
                    </a>
                  </li>
                </ul>

                <ul className="footer-item-links">
                  <li>
                    <a href="#" className="footer-link">
                      Автокрісла
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer-link">
                      Дитячий транспорт
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer-link">
                      Іграшки
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer-link">
                      Дитячий одяг
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer-link">
                      Новий товар
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-item container">
          <p className="footer-bottom-text">© Bubu 2022. Всі права захищені..</p>
          <ul className="footer-bottom-links d-flex">
            <li>
              <a href="#" className="footer-link">
                <img src={mastercard} alt="mastercard" />
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                <img src={visa} alt="mastercard" />
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                <img src={liqpay} alt="mastercard" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.footer`
.headline {
  font-size: 20px;
  font-weight: bold;
  color: var(--clr-white);
  line-height: 1.5;
  text-transform: uppercase;
}
.footer-top {
  height: 260px;
  background-image: url(${bgFooter});
  
  .footer-top-image {
    width: 345px;
  }
}

.footer-content {
  display: flex;
  align-items: center;
  gap: 110px;

  &-info {
    display: flex;
    align-items: center;
    gap: 30px;
    width: 55%;
  }

  .newsletter-form {
    display: flex;
    gap: 15px;

    .form-input {
      width: 300px
    }
    .form-btn {
      padding: 12px;
      background-color: var(--clr-white);
      border-radius: 50%;
      .form-btn-icon {
        width: 22px;
        height: 22px;
      }
    }
  }
}

.footer-bottom {
  background: var(--clr-accent);
  padding: 60px 0;

  &-content{
    display: flex;

  }
}

.footer-banner {
  background: var(--clr-accent-active);
  border-radius: 20px;
  margin-right: 140px;
  padding: 30px;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  gap: 15px;

  .para-text{
    font-size: 15px;
    font-weight: 300;
    line-height: 1.3;
  }

  .connect-list {
    display: flex;
    align-items: center;
    gap: 25px;
    color: var(--clr-accent-light);
  }
}

.footer-info {
  gap: 100px;
}
.footer-item {
  color: var(--clr-white);
  font-weight: 300;
  
  .footer-item-links {
    li {
      margin: 15px 0;
  
      a {
        color: var(--clr-white);
  
        &:hover {
          color: var(--clr-white);
          text-decoration: underline;
        }
      }
    }
  }
  .catalog-info {
    gap: 50px;
  }
}

.footer-bottom-links {
  margin-top: 10px;
  gap: 10px;
}
.footer-bottom-text {
  margin-top: 40px;
  color: var(--clr-accent-light);
}

// .navbar-brand {
//   font-weight: 700;
//   font-size: 32px;
//   margin-bottom: 18px;

//   span {
//     color: var(--clr-green-normal);
//   }
// }

// .footer-item {
//   text-align: center;

//   .para-text {
//     max-width: 380px;
//     margin-right: auto;
//     margin-left: auto;
//   }
// }

// .footer-item-links {
//   li {
//     margin: 6px 0;

//     a {
//       color: var(--clr-white);

//       &:hover {
//         color: var(--clr-white);
//         text-decoration: underline;
//       }
//     }
//   }
// }

// .footer-item-title {
//   margin-bottom: 12px;
//   font-size: 20px;
//   letter-spacing: 0.03em;
//   font-weight: 700;
// }

// .newsletter-form {

//   .input-group {
//     height: 48px;
//     max-width: 284px;
//     width: 100%;
//     margin-right: auto;
//     margin-left: auto;
//     transition: var(--transition-default);

//     :has(.input-group-field:focus) {
//       box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
//     }

//     &-field {
//       background: var(--clr-violet-dark-active);
//       padding-left: 22px;
//       padding-right: 22px;
//       color: var(--clr-white);
//       flex: 1;

//       &::placeholder {
//         color: var(--clr-white);
//         opacity: 0.8;
//       }
//     }

//     &-btn {
//       color: #0c0a24;
//       width: 48px;

//       &:hover {
//         transform: scale(1.1);
//       }
//     }
//   }
// }

// .footer-bottom {
//   background: var(--clr-accent);
//   padding: 20px 0;
//   &-text {
//     font-weight: 500;
//   }

//   li {
//     margin-left: 18px;
//   }

//   &-links {
//     margin-top: 12px;
//   }
// }

// @media screen and (min-width: 768px) {

//   .footer-bottom {
//     & > .container {
//       flex-direction: var(--clr-white);
//       justify-content: space-between;
//     }

//     li {
//       margin-left: 32px;
//     }
//     &-links {
//       margin-top: 0;
//     }
//   }
// }

// @media screen and (min-width: 992px) {

//   .footer-bottom-links {
//     justify-content: center;
//   }
// }
`;
