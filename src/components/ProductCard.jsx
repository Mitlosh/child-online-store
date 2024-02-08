import { Link } from "react-router-dom"
import styled from "styled-components"

const ProductCard = ({product}) => {
  return (
    <CardWrapper>
      <div className="card">
        <div className="card-top">
          {product.is_for_sale ? <p className="sale-percent">{product.sale_perc}</p> : ""}
          <Link to={`/products/${product?.id}`}>
            <img src={product.image} alt="" className="card-img" />
          </Link>
        </div>
        <p className="card-title">
          {product.name}
        </p>
        <div className="price d-flex">
          {product.is_for_sale ? <del>{product.price} грн.</del> : 
            <p> {product.price}  грн.</p>
          }
          {product.is_for_sale ? <p className="sale-price">{product.sale_price} грн.</p> : ""}
        </div>
      </div>
    </CardWrapper>
  )
}

export default ProductCard

const CardWrapper = styled.div`
.card {
  width: 234px;
  display: flex;
  flex-direction: column;
  gap: 13px;
}
.card-img {
  height: 234px;
  object-fit: contain;
}
.card-top {
  position: relative;
}
.sale-percent {
  position: absolute;
  top: 17px;
  left: 17px;
  color: var(--clr-white);
  background: var(--clr-discount);
  display: inline-flex;
  padding: 7px;
  border-radius: 5px;
}
.price {
  font-weight: 700;
  .sale-price {
    color: var(--clr-discount);
    margin-left: 5px;
  }
}
`