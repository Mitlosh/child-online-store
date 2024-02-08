import styled from "styled-components"
import productsData from "../data/items.json"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ArrowButton from "../components/ArrowButton";
import Sale from "../components/Sale";
import Button from "../components/Button";
import location from "../assets/icons/location.svg"
import desc1 from "../assets/images/desc-1.png"
import desc2 from "../assets/images/desc-2.png"
import Testimonials from "../components/Testimonials";
import StarRating from "../components/StarRating";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/store/cartSlice";

function ProductDetails() {
  const { productId } = useParams();
  const [selectedProduct, setSelectedProduct] = useState({});
  const [isBoy, setIsBoy] = useState(true);
  const dispatch = useDispatch()

  useEffect(() => {
    setSelectedProduct(productsData.find(item => item.id == productId));
  }, [productId]);

  const addCart = () => dispatch(addToCart(selectedProduct));
  

  return (
    <ProductDetailsWrapper>
      <div className="container">
        <div className="product-page">
          <div className="product-header d-flex flex-column">
            <p>Головна - Дитячі коляски - </p>
            <div className="product-title">
              <h1 className="headline">{selectedProduct.name}</h1>
              <p>У вибране</p>
              <p>Порівняти</p>
            </div>
            <div className="product-subheader">
              <p className="availible">В наявності</p>
              <p className="code">Код: EP-01</p>
              <div className="rating">
                <StarRating number="4.5"/><a href="#">9 відгуків</a>
              </div>
            </div>
          </div>
          <div className="product-hero d-flex">
            <ul className="product-img-list">
              <li><img src={selectedProduct.image} alt="product-image" /></li>
              <li><img src={selectedProduct.image} alt="product-image" /></li>
              <li><img src={selectedProduct.image} alt="product-image" /></li>
              <li><img src={selectedProduct.image} alt="product-image" /></li>
              <li><img src={selectedProduct.image} alt="product-image" /></li>
              <li><img src={selectedProduct.image} alt="product-image" /></li>
            </ul>
            <div className="product-img-container d-flex align-items-center justify-content-center">
              <img src={selectedProduct.image} alt="product-image" className="product-image" />
              <div className="product-img-btn">
                <ArrowButton />
              </div>
              <div className="btn-left">
                <ArrowButton />
              </div>
            </div>
            <div className="product-hero-content">
              <div className="hero-color">
                <p className="hero-title">Колір:</p>
                <div className="hero-color-list">
                  <div className="color-box"></div>
                  <div className="color-box"></div>
                  <div className="color-box"></div>
                </div>
              </div>
              <div className="hero-gender">
                <p className="hero-title">Стать:</p>
                <div className="hero-gender-list">
                  <p className={`hero-gender-item ${isBoy && "gender-active"}`} onClick={(() => setIsBoy(true))}>Хлопчик</p>
                  <p className={`hero-gender-item ${!isBoy && "gender-active"}`} onClick={(() => setIsBoy(false))}>Дівчинка</p>
                </div>
              </div>
              <div className="hero-price d-flex align-items-center">
                {selectedProduct.is_for_sale ? <del>{selectedProduct.price} грн.</del> :
                  <p> {selectedProduct.price}  грн.</p>}
                {selectedProduct.is_for_sale ? <p className="sale-price">{selectedProduct.sale_price} грн.</p> : ""}
                {selectedProduct.is_for_sale ? <p className="sale-percent">{selectedProduct.sale_perc}</p> : ""}
              </div>
              <div className="hero-btns d-flex" onClick={() => addCart()}>
                <Button text="Купити" />
                <Button text="Купити в 1 клік" btnStyle={2} />
              </div>
              <div className="hero-delivery-banner d-flex flex-column">
                <p className="delivery-title">Ви з Одеси? Заберіть товар у магазині</p>
                <p className="delivery-body">
                  <img src={location} alt="location" className="delivery-icon"/>
                  Одеса, вул. Михайлівська, 8 (10:00-19:00 щодня)
                </p>
                <Button text="Забрати сьогодні" btnStyle={3}/>
              </div>
              <div className="hero-links">
                <ul className="d-flex">
                  <li className="link-item">
                    <a href="#">
                      Оплата і доставка
                    </a>
                  </li>
                  <li className="link-item">
                    <a href="#">
                      Повернення і обмін
                    </a>
                  </li>
                  <li className="link-item">
                    <a href="#">
                      Контакти
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Sale title="З цим також купують" />
        <div className="product-description d-grid">
          <section>
            <h1 className="description-title headline">Опис</h1>
            <div className="description-info d-flex flex-column">
              <p className="info-text">
                {selectedProduct.description?.split(".").slice(0,2).join(".")}
              </p>
              <img src={desc1} alt="desc1" className="info-img"/>
              <p className="info-text">
                {selectedProduct.description?.split(".").slice(2, -1).join(".")}
              </p>
              <img src={desc2} alt="desc1" className="info-img"/>
              <div className="description-info-btn">
                <Button text="Докладніше" btnStyle={3} />
              </div>
            </div>
          </section>
          <section>
            <h1 className="description-title headline">Характеристики</h1>
            <div className="description-info characteristic d-flex flex-column">
              <div className="description-info-item">
                <p className="info-text">Виробник</p>
                <div className="divider"></div>
                <p className="info-text">{selectedProduct.manufacturer}</p>
              </div>
              <div className="description-info-item">
                <p className="info-text">Країна</p>
                <div className="divider"></div>
                <p className="info-text">{selectedProduct.country}</p>
              </div>
              <div className="description-info-item">
                <p className="info-text">Колір</p>
                <div className="divider"></div>
                <p className="info-text">{selectedProduct.color}</p>
              </div>
              <div className="description-info-item">
                <p className="info-text">Стать</p>
                <div className="divider"></div>
                <p className="info-text">{selectedProduct.sex}</p>
              </div>
              <div className="description-info-item">
                <p className="info-text">Вага</p>
                <div className="divider"></div>
                <p className="info-text">{selectedProduct.weight}</p>
              </div>
              <div className="description-info-item">
                <p className="info-text">Розмір (ДхШхВ)</p>
                <div className="divider"></div>
                <p className="info-text">{selectedProduct.size}</p>
              </div>
            </div>
          </section>
          <section className="descriptions-testimonials">
            <Testimonials />
            <div className="description-info-btn">
              <Button text="Показати більше" btnStyle={3} />
            </div>
          </section>
        </div>
        <section className="watched-section">
          <Sale title="Ви переглядали" />
        </section>
      </div>
    </ProductDetailsWrapper>
  );
}

export default ProductDetails

const ProductDetailsWrapper = styled.div`
.product-page {
  margin: 60px 0;
  .product-title {
    display: flex;
    align-items: center;
    gap: 30px;
  }
  .product-title p:nth-child(2) {
    color: var(--clr-accent);
  }
  .headline {
    text-transform: none;
    margin-right: auto;
  }
}
.product-header {
  gap: 20px;
}
.product-header > p {
  color: var(--clr-accent);
}
.product-subheader {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 25px;
  p {
    border-radius: 10px;
    padding: 13px;
  }
  .availible {
    color: #23F911;
    background-color: #E9FFE7;
  }
  .code {
    color: var(--clr-grey);
    background-color: #F2F2F2;
  }

  .rating {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .rating a {
    text-decoration: underline;
  }
}
// -------------------------------------------------
.product-hero-content {
  display: flex;
  flex-direction: column;
  gap: 30px;
}
.hero-title {
  color: var(--clr-grey);
  font-weight: 300;
  margin-bottom: 12px;
}

.hero-color-list {
  display: flex;
  gap: 15px;
}
.color-box {
  width: 30px;
  height: 30px;
  border-radius: 10px;
}
.color-box:nth-child(1) {
  background-color: #34CBFF;
}
.color-box:nth-child(2) {
  background-color: #FF3636;
}
.color-box:nth-child(3) {
  background-color: #4AFF3A;
}

.hero-gender-list {
  display: flex;
  gap: 15px;
}
.hero-gender-item {
  padding: 13px;
  border-radius: 10px;
  background-color: var(--clr-white);
  border: 1px solid var(--clr-lightgrey);
  cursor: pointer;
}
.gender-active {
  border: 1px solid var(--clr-accent);
  background-color: var(--clr-accent-light)
}

.hero-price {
  gap: 15px;
  font-weight: 700;
  font-size: 20px;
  .sale-price {
    font-size: 24px;
    color: var(--clr-discount);
    margin-left: 5px;
  }
}
.sale-percent {
  color: var(--clr-white);
  background: var(--clr-discount);
  display: inline-flex;
  padding: 7px;
  border-radius: 5px;
}

.hero-btns {
  gap: 20px;
   button {
    padding: 30px 50px;
   }
}
// -------------------------------------------------
.product-img-container {
  width: 540px;
  position: relative;
  margin: 0 30px 0 10px;

  img {
    background-size: contain;
    width: 313px;
  }
  .product-img-btn {
    position: absolute;
    top: 45%;
    right: 20px;
    button {
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    }
  }
  .btn-left {
    position: absolute;
    top: 45%;
    left: 20px;
    button {
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      transform: rotate(180deg);
    }
  }
}

.product-img-list{
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.product-img-list li{
  display: flex;
  align-items: center;
  justify-content; center;
  border-radius: 10px;
  width: 80px;
  height: 80px;
  padding: 0 15px;
  &:nth-child(1) {
    border: 1px solid var(--clr-accent);
  }
}

.hero-delivery-banner {
  max-width: 628px;
  padding: 30px;
  // padding-right: 210px;
  background-color: var(--clr-lightpurple);
  border-radius: 10px;
  gap: 20px;
  .delivery-title {
    font-weight: 700;
  }
  .delivery-body{
    display: flex;
    align-items: center;
    gap: 10px;
    .delivery-icon {
      width: 13px;
      height: 18px;
    }
  }
}

.hero-links ul {
  gap: 20px;

  li a{
    color: var(--clr-grey);
    text-decoration: underline;
  }
}

// -------------------------------------------------
.product-description {
  box-shadow: 0 0 0 100vmax var(--clr-accent-light);
  background-color: var(--clr-accent-light);
  clip-path: inset(0 -100vmax);
  padding: 80px 0;
  gap: 30px;
  grid-template-rows: auto auto;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 80px;

  .description-title {
    margin-bottom: 20px;
  }
}
.description-info {
  width: 740px;
  // width: 100%;
  padding: 35px 30px;
  border-radius: 10px;
  line-height: 1.5;
  background-color: var(--clr-white);
  gap: 30px;

  &-btn button {
    width: 100%;
  }

  .info-img {
    width: 340px;
  }
  &-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    
    .divider {
      flex-grow: 1;
      border-bottom: 1px solid #E1E1E1;
    }
  }
}
.characteristic {
  width: 520px;
}

.descriptions-testimonials {
  grid-column: span 2;
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.watched-section {
  margin: 80px 0;
}
`