import styled from "styled-components";
import logo  from "../assets/images/logo.png";
import instagram from "../assets/icons/socials/instagram.svg";
import youtube from "../assets/icons/socials/youtube.svg";
import facebook from "../assets/icons/socials/facebook.svg";
import cart from "../assets/icons/cart.svg";
import comparison from "../assets/icons/сomparison.svg";
import favorite from "../assets/icons/favorite.svg";
import searchIcon from "../assets/icons/search.svg";
import userIcon from "../assets/icons/user.svg"

import { Link, useNavigate } from "react-router-dom";
import { RiMenuFill  } from "react-icons/ri";
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { MdClose } from "react-icons/md";

import { useDispatch, useSelector } from "react-redux";
import { selectSidebarStatus, setSidebarOff, setSidebarOn } from "../redux/store/sidebarSlice";
import { useState } from "react";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const sidebarStatus = useSelector(selectSidebarStatus);
  const cartItems = useSelector(state => state.cart.cart);
  const getEmail = localStorage.getItem("userEmail");
  const getPassword = localStorage.getItem("userPassword");

  const search = async (arg) => {};
  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  }

  return (
    <NavbarWrapper>
      <div className="container w-100 navbar">
        <div className="navbar-content">
          <div className="d-flex align-items-center justify-content-between">
            <button type="button" className="navbar-show-btn text-white" onClick={() => dispatch(setSidebarOn())}>
              <HiOutlineMenuAlt2 size={25} />
            </button>
            <Link to="/" className="navbar-brand">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className={`navbar-collapse ${sidebarStatus ? "show" : ""}`}>
            <button type="button" className="navbar-hide-btn text-white" onClick={() => dispatch(setSidebarOff())}>
              <MdClose size={25} />
            </button>

            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Про нас
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/catalog" className="nav-link">
                  Контакти
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/product" className=" nav-link">
                  Доставка і оплата
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Повернення та обмін
                </Link>
              </li>
            </ul>
            <div className="separate-line"></div>
            <ul className="connect-list">
              <li className="connect-phone">(063) 128-46-09</li>
              <div className="connect-socials">
                <li className="connect-item">
                  <Link to="/" className="connect-link">
                    <img src={instagram} alt="" />
                  </Link>
                </li>
                <li className="connect-item">
                  <Link to="/" className="connect-link">
                    <img src={youtube} alt="" />
                  </Link>
                </li>
                <li className="connect-item">
                  <Link to="/" className="connect-link">
                    <img src={facebook} alt="" />
                  </Link>
                </li>
              </div>
              <li className="connect-text">Укр | Рус</li>
              <li className="connect-text d-flex align-items-center">
                <div className="d-flex align-items-center">
                  <img src={userIcon} alt="" />
                    {getEmail && getPassword ? (
                      <p onClick={() => handleLogout()} className="ms-2 c-pointer">Вихід</p>
                    ) : (
                      <Link to="/auth" className="ms-2">Вхід</Link>
                      )}
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="navbar-search">
          <div className="catalog-menu">
            <RiMenuFill size={25} className="catalog-icon"/>
            <p>Каталог</p>
          </div>
          <div className="d-flex search">
            <input
              className="search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Я шукаю ..."
              onSubmit={(e) => {
                if (e.key === "Enter") search(searchTerm);
              }}
              type="text"
            />
            <button
              className="search-btn"
              onClick={() => {
                search(searchTerm);
              }}>
              <img src={searchIcon} alt="" />
            </button>
          </div>
          <div className="d-flex align-items-center text-white">
            <img src={comparison} alt="" />
            <p className="ms-2">0</p>
          </div>
          <div className="d-flex align-items-center text-white">
            <img src={favorite} alt="" />
            <p className="ms-2">0</p>
          </div>
          <div className="d-flex align-items-center text-white">
            <img src={cart} alt="" />
            <p className="ms-2">{cartItems?.length}</p>
          </div>
        </div>
      </div>
    </NavbarWrapper>
  );
};

export default Navbar;

const NavbarWrapper = styled.div`
background: var(--clr-accent);

.navbar-content {
  display: flex;
  padding: 20px 0;
 }

.navbar-show-btn {
  display: none;
}
.navbar-hide-btn {
  display: none;
}

.navbar-brand {
  margin-right: 30px;
  width: 138px;
  height: 32px;
}

.navbar-collapse {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navbar-nav {
  display: flex;
  gap: 20px;
  
  .nav-item {
    color: var(--clr-white);
    font-size: 14px;
    font-weight: 300;
  }
}

.separate-line {
  display: none;
}

.connect-list {
  color: var(--clr-white);
  display: inline-flex;
  align-items: center;
  gap: 30px;

  .connect-phone {
    font-size: 17px;
  }
  .connect-socials {
    display: flex;
    align-items: center;
    gap: 20px;
    color: var(--clr-accent-light);
  }

  .connect-link img{
    width: 20px;
    height: 20px;
  }
}

.navbar-search {
  display: flex;
  align-items: center;
  gap: 30px;

  .search {
    flex: 1 0 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    padding: 15px;
    border-radius: 10px;
    border: 1px solid #FFF;
    background: rgba(255, 255, 255, 0.15);
    
    .search-input {
      background: transparent;
      min-width: 251px;
      &::placeholder {
        font-size: 15px;
        color: var(--clr-white);
      }
    }
  }
  
  .catalog-menu {
    display: flex;
    align-items: center;
    width: 234px;
    height: 79px;
    font-size: 17px;
    text-transform: uppercase;
    gap: 10px;
    padding: 30px;
    border-radius: 20px 20px 0px 0px;
    background-color: var(--clr-white);
    // background: var(--lightpurple, #FFEAF1);
    .catalog-icon {
      color: var(--clr-accent);
    }
  }
}

// -----------------------------------------------------------------------------
@media screen and (max-width: 1000px) {
  .navbar {
    display: flex;
    gap: 30px;
    padding: 14px 30px;
  }

  .navbar-show-btn {
    display: block;
    transition: var(--transition-default);
    &:hover {
      transform: scale(1.2);
    }
  }

  .navbar-hide-btn {
    display: block;
    position: absolute;
    top: 20px;
    right: 20px;
    transition: var(--transition-default);
    &:hover {
      transform: scale(1.2);
    }
  }

  .navbar-brand {
    margin: 0;
    margin-left: 30px;
  }

  .navbar-search {
    width: 100%;

    .catalog-menu {
      display: none;
    }
  }
  
  .navbar-collapse {
    position: fixed;
    left: -532px;
    top: 0;
    width: 266px;
    height: 100%;
    background-color: var(--clr-accent);
    padding: 30px 16px;
    text-align: center;
    transform: translateX(100%);
    transition: var(--transition-default);
    z-index: 999;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    
    &.show {
      transform: translateX(532px);
    }
  }
  
  .navbar-nav {
    flex-direction: column;
    align-items: flex-start;
    gap: 30px;
  }

  .connect-list {
    flex-direction: column;
    align-items: flex-start;
  }

  .separate-line {
    display: block;
    width: 100%;
    height: 1px;
    background-color: var(--clr-accent-light);
    margin: 40px 0;
  }
}



// -----------------------------------------------------------------------------
@media screen and (max-width: 480px) {
  .navbar-content {
    padding: 0;
  }
  .navbar-brand {
    margin-left: 10px;
    width: 90px;
    height: 20px;
  }
  
  .navbar-search {
    gap: 20px;
    justify-content: flex-end;

    .search {
      flex: 0;
      padding: 0;
      border: none;
      background: none;

    }

    .search-input {
      display: none;
    }
  }
}
`;
