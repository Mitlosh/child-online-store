import styled from "styled-components";
import carriage from "../assets/icons/catalog-icons/carriage.svg";
import room from "../assets/icons/catalog-icons/room.svg";
import chair from "../assets/icons/catalog-icons/chair.svg";
import feeding from "../assets/icons/catalog-icons/feeding.svg";
import soap from "../assets/icons/catalog-icons/soap.svg";
import autochair from "../assets/icons/catalog-icons/autochair.svg";
import car from "../assets/icons/catalog-icons/car.svg";
import toy from "../assets/icons/catalog-icons/toy.svg";
import clothes from "../assets/icons/catalog-icons/clothes.svg";
import newIcon from "../assets/icons/catalog-icons/new.svg";
import { Link } from "react-router-dom";

const CatalogAside = () => {
  return (
    <CatalogAsideWrapper>
      <aside>
        <ul className="catalog-list">
          <li className="catalog-item">
            <img src={carriage} className="catalog-img" alt="" />
            <Link to="/products" state={{ title: "Дитячі коляски" }} ><p className="catalog-text">Дитячі коляски</p></Link>
          </li>
          <li className="catalog-item">
            <img src={room} className="catalog-img" alt="" />
            <Link to="/products" state={{ title: "Дитяча кімната" }} ><p className="catalog-text">Дитяча кімната</p></Link>
          </li>
          <li className="catalog-item">
            <img src={chair} className="catalog-img" alt="" />
            <Link to="/products" state={{ title: "Стільці і шезлонги" }} ><p className="catalog-text">Стільці і шезлонги</p></Link>
          </li>
          <li className="catalog-item">
            <img src={feeding} className="catalog-img" alt="" />
            <Link to="/products" state={{ title: "Для годування" }} ><p className="catalog-text">Для годування</p></Link>
          </li>
          <li className="catalog-item">
            <img src={soap} className="catalog-img" alt="" />
            <Link to="/products" state={{ title: "Гігієна і догляд" }} ><p className="catalog-text">Гігієна і догляд</p></Link>
          </li>
          <li className="catalog-item">
            <img src={autochair} className="catalog-img" alt="" />
            <Link to="/products" state={{ title: "Автокрісла" }} ><p className="catalog-text">Автокрісла</p></Link>
          </li>
          <li className="catalog-item">
            <img src={car} className="catalog-img" alt="" />
            <Link to="/products" state={{ title: "Дитячий транспорт" }} ><p className="catalog-text">Дитячий транспорт</p></Link>
          </li>
          <li className="catalog-item">
            <img src={toy} className="catalog-img" alt="" />
            <Link to="/products" state={{ title: "Іграшки" }} ><p className="catalog-text">Іграшки</p></Link>
          </li>
          <li className="catalog-item">
            <img src={clothes} className="catalog-img" alt="" />
            <Link to="/products" state={{ title: "Одяг" }} ><p className="catalog-text">Одяг</p></Link>
          </li>
          <li className="catalog-item">
            <img src={newIcon} className="catalog-img" alt="" />
            <Link to="/products" state={{ title: "Новий товар" }} ><p className="catalog-text">Новий товар</p></Link>
          </li>
        </ul>
      </aside>
    </CatalogAsideWrapper>
  )
}

export default CatalogAside

const CatalogAsideWrapper = styled.div`
border-radius: 0 0 20px 20px;
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
.catalog-list {
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 30px;
  width: 234px;
}
.catalog-item {
  display: flex;
  align-items: center;
  gap: 10px;
}
.catalog-img {
  width: 25px;
}

@media screen and (max-width: 1000px) {
  display: none;
}
`