import styled from "styled-components"
import ProductCard from "./ProductCard"
import ArrowButton from "./ArrowButton"
import { useSelector } from "react-redux"

const Sale = ({title, subtitle}) => {
  const products = useSelector((state) => state.products.products);
  
  return (
    <SaveWrapper>
      <div className="sale-title">
        <h1 className="headline">{title}</h1>
        {subtitle && <div className="sale-subtitle">{subtitle}</div>}
        <div className="form-btn">
          <ArrowButton className="form-btn"/>
        </div>
      </div>
      <div className="sale-items">
        {products.map(product => (
          <ProductCard key={product.id} product={product}/>
        ))}
      </div>
    </SaveWrapper>
  )
}

export default Sale

const SaveWrapper = styled.div`
.sale-title {
  display: flex;
  align-items: center;
  gap: 10px
}
.sale-subtitle {
  color: var(--clr-discount);
  text-transform: uppercase;
  background: #FFF0D2;
  border-radius: 10px;
  padding: 5px;
  font-weight: 700;
}
.form-btn {
  margin-left: auto;
  padding: 12px;
  background-color: var(--clr-white);
  border-radius: 50%;
  .form-btn-icon {
    width: 22px;
    height: 22px;
  }
}
.sale-items {
  display: flex;
  gap: 30px;
}
`