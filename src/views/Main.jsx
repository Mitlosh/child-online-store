import styled from "styled-components"
import Carousel from "../components/Carousel"
import Sale from "../components/Sale"
import CategoriesGrid from "../components/CategoriesGrid"
import brand1 from "../assets/images/brands/brand-1.png"
import brand2 from "../assets/images/brands/brand-2.png"
import brand3 from "../assets/images/brands/brand-3.png"
import brand4 from "../assets/images/brands/brand-4.png"
import brand5 from "../assets/images/brands/brand-5.png"
import CatalogAside from "../components/CatalogAside"


const Main = () => {

  return (
    <MainWrapper>
      <div className="container main-section">
        <section className="main-section hero">
          <CatalogAside />
          <Carousel />
        </section>
        <section className="main-section">
          <Sale title="акція!" subtitle="sale"/>
        </section>
        <section className="main-section">
          <CategoriesGrid />
        </section>
        <section className="main-section">
          <h1 className="headline">
            Популярні бренди
          </h1>
          <ul className="brands">
            <li className="brand-item"><img src={brand1} alt="" /></li>
            <li className="brand-item"><img src={brand2} alt="" /></li>
            <li className="brand-item"><img src={brand3} alt="" /></li>
            <li className="brand-item"><img src={brand4} alt="" /></li>
            <li className="brand-item"><img src={brand5} alt="" /></li>
          </ul>
        </section>
        <section className="main-section more-info">
          <p>
            Інтернет-магазин дитячих товарів Бу-Бу - зона комфорту малюків і їх батьків. Наш асортимент розроблений в діапазоні "від народження до школи", завдяки чому кожен етап розвитку вашої дитини буде максимально правильним, а головне, цікавим і радісним.
          </p>
          <br />
          <p>
            Товари для дітей - особлива категорія продукції, тому ми довіряємо тільки перевіреним виробникам та брендам, які давно і успішно представлені на світовому ринку. Магазин Бу-Бу є дистриб'ютором таких брендів: Anex, X-lander, Leonardo, Bebe Confort, Welldon, Huffy, Fun Time, Lexus Trike, Nino, Maltex, Ceba baby, X-rider, Play WOW, Miniland, Casato, Klups, Radir, Keenway, Adamex, Roan, Tako.
          </p>
          <br />
          <p>
            На сайті інтернет магазину Бу-Бу ви можете купити товари для дітей абсолютно різних категорій, в залежності від потреб:
            дитячі коляски, дитяча кімната, стільці і шезлонги, все для годування, гігієна та догляд, автокрісла, дитячий транспорт, іграшки, дитячий одяг.
          </p>
          <p className="text-center">Докладніше</p>
        </section>
      </div>
    </MainWrapper>
  )
}

export default Main

const MainWrapper = styled.div`
.main-section {
  margin-bottom: 80px;
}
.hero {
  display: flex;
  gap: 30px;
  align-items: flex-end;
}

.brands {
  display: flex;
  gap: 30px;
  margin-top: 30px;
}

.more-info {
  max-width: 1000px;
  margin: 0 auto;
  .text-center{
    color: var(--clr-accent);
    text-decoration: underline;
    font-weight: 700;
    cursor: pointer;
  }
}
`