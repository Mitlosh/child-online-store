import styled from 'styled-components'
import ProductCard from '../components/ProductCard'
import ArrowButton from '../components/ArrowButton'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import dropdownArrow from "../assets/icons/dropdown-arrow.svg"

const Products = () => {
  const productsData = useSelector((state) => state.products.products);
  const [products, setProducts] = useState(productsData)
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();
  const { title } = location.state;

  const filterOnsale = () => {
    const filteredProducts = products.filter(item => item.is_for_sale === true)
    setProducts(filteredProducts);
  }
  const filterCategories = (category) => {
    const filteredProducts = products.filter(item => item.category === category)
    setProducts(filteredProducts);
  }
  const filterManufacturer = (manufacturer) => {
    const filteredProducts = products.filter(item => item.manufacturer === manufacturer)
    setProducts(filteredProducts);
  }
  const filterCheapPrice = (arg) => {
    if (arg === "ascending") {
      const filteredProducts = products.toSorted((a, b) => a.price - b.price);
      setProducts(filteredProducts);
    } else {
      const filteredProducts = products.toSorted((a, b) => b.price - a.price);
      setProducts(filteredProducts);
    }
  }
  const returnDefault = () => setProducts(productsData);

  return (
    <ProductsWrapper>
      <div className="container">
      <p className="breadcrumb">Головна -</p>
      <div className="header">
        <h1 className="headline">{title}</h1>
        <ul className="header-list">
          <li className="header-item" onClick={() => returnDefault()}>За замовчуванням</li>
          <li className="header-item" onClick={() => returnDefault()}>По популярності</li>
          <li className="header-item" onClick={() => filterCheapPrice("ascending")}>Дешеві</li>
          <li className="header-item" onClick={() => filterCheapPrice("descending")}>Дорожчі</li>
        </ul>
      </div>
      <main className="products-section d-flex">
        <aside className="filter-section">
          <div className="category-item">
            <div className="cat-title" onClick={() => setIsOpen(prev => !prev)}>
              <h2>Категорія</h2>
              <img src={dropdownArrow} alt="" className={`title-icon ${!isOpen && "open"}`}/>
            </div>
            <ul className={`categories-collapse ${isOpen && "open"}`}>
              <li className="cat-item" onClick={() => filterCategories("Коляски 3в1")}>Коляски 3в1</li>
              <li className="cat-item" onClick={() => filterCategories("Зимові конверти")}>Зимові конверти</li>
              <li className="cat-item" onClick={() => filterCategories("Аксесуари та комплектуючі")}>Аксесуари та комплектуючі</li>
              <li className="cat-item" onClick={() => filterCategories("Коляски для двійні")}>Коляски для двійні</li>
              <li className="cat-item" onClick={() => filterCategories("Муфти")}>Муфти</li>
            </ul>
          </div>
          <div className="category-item d-flex">
            <input type="checkbox" className='category-checkbox'/>
            <label className="category-text">В наявності</label>
          </div>
          <div className="category-item d-flex">
            <input type="checkbox" className='category-checkbox' onClick={() => filterOnsale()}/>
            <p className="category-text">Зі знижкою</p>
          </div>
          <div className="category-item">
            <div className="cat-title">
              <h2>Ціна</h2>
            </div>
            <div className="price-input">
              <input type="text" className="price-input-item"/>
              <span>-</span>
              <input type="text" className="price-input-item"/>
              <ArrowButton />
            </div>
          </div>
          <div className="category-item">
            <div className="cat-title">
              <h2>Ціна</h2>
            </div>
            <ul className="manufacturer">
              <li className="manufacturer-item" onClick={(() => filterManufacturer("Anex"))}>
                <input type="checkbox" className='category-checkbox'/>
                <p className="category-text">Anex</p>
              </li>
              <li className="manufacturer-item" onClick={(() => filterManufacturer("Bair"))}>
                <input type="checkbox" className='category-checkbox'/>
                <p className="category-text">Bair</p>
              </li>
              <li className="manufacturer-item" onClick={(() => filterManufacturer("BabyOno"))}>
                <input type="checkbox" className='category-checkbox'/>
                <p className="category-text">BabyOno</p>
              </li>
              <li className="manufacturer-item" onClick={(() => filterManufacturer("Carello"))}>
                <input type="checkbox" className='category-checkbox'/>
                <p className="category-text">Carello</p>
              </li>
              <li className="manufacturer-item" onClick={(() => filterManufacturer("OK Baby"))}>
                <input type="checkbox" className='category-checkbox'/>
                <p className="category-text">OK Baby</p>
              </li>
              <li className="manufacturer-item" onClick={(() => filterManufacturer("Babyroom"))}>
                <input type="checkbox" className='category-checkbox'/>
                <p className="category-text">Babyroom</p>
              </li>
              <li className="manufacturer-item" onClick={(() => filterManufacturer("ZD"))}>
                <input type="checkbox" className='category-checkbox'/>
                <p className="category-text">ZD</p>
              </li>
              <li className="manufacturer-item" onClick={(() => filterManufacturer("Espiro"))}>
                <input type="checkbox" className='category-checkbox'/>
                <p className="category-text">Espiro</p>
              </li>
            </ul>
          </div>
        </aside>
        <div className="sale-items">
          {products.map(product => (
            <ProductCard key={product.id} product={product}/>
          ))}
        </div>
      </main>
      </div>
    </ProductsWrapper>
  )
}

export default Products

const ProductsWrapper = styled.div`
margin-bottom: 80px;
.breadcrumb {
  margin: 30px 0 20px 0;
  color: var(--clr-accent);
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .header-list {
    display: flex;
    align-items: center;
    gap: 20px;
  }  
}

.products-section {
  gap: 30px;
}

.cat-title {
  display: flex;
  alig-items: center;
  justify-content: space-between;
  cursor: pointer;
  
  h2 {
    font-size: 17px;
  }

  .title-icon {
    width: 11px;
  }
  .title-icon.open {
    transform: rotate(180deg);
  }
}

.sale-items {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  margin-top: 30px;
  margin-bottom: 80px;
}

.filter-section {
  min-width: 234px;
}

.categories-collapse {
  display: flex;
  flex-direction: column;
  gap: 15px;
  height: 0px;
  overflow: hidden;
  transition: all ease-out 0.3s;

}
.categories-collapse.open {
  transition: all ease-out 0.3s;
  height: auto;
  margin-top: 20px;
}

.category-item {
  gap: 10px;
  padding: 30px 0;
  font-weight: 300;
  border-bottom: 1px solid var(--clr-lightgrey);
}

input[type="checkbox"] {
  appearance: none;
  background-color: #fff;
  margin: 0;
  font: inherit;
  color: currentColor;
  width: 1.15em;
  height: 1.15em;
  border: 0.15em solid currentColor;
  border-radius: 0.15em;
}

.price-input {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-top: 30px;

  .price-input-item {
    border: 1px solid var(--clr-lightgrey);
    border-radius: 5px;
    padding: 15px;
    max-width: 74px;
  }
}

.manufacturer {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 30px;
}
.manufacturer-item {
  display: flex;
  align-items: center;
  gap: 15px;
}
`