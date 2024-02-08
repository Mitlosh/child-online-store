import styled from "styled-components"
import carouselImg from "../assets/images/carousel-img.png"
import arrowRight from "../assets/icons/arrow-right.svg"

const Carousel = () => {
  return (
    <CarouselWrapper>
      <div className="carousel">
        <img src={carouselImg} alt="carousel-img" className="carousel-img"/>
        <button className="form-btn btn-right">
          <img src={arrowRight} alt="arrow-right" className="form-btn-icon" />
        </button>
        <button className="form-btn btn-left">
          <img src={arrowRight} alt="arrow-right" className="form-btn-icon" />
        </button>
      </div>
    </CarouselWrapper>
  )
}

export default Carousel

const CarouselWrapper = styled.div`

.carousel {
  position: relative;
  display: inline-flex;
}

.carousel-img {
  max-width: 1028px;
}
.form-btn {
  padding: 12px;
  background-color: var(--clr-white);
  border-radius: 50%;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  .form-btn-icon {
    width: 22px;
    height: 22px;
  }
}
.btn-right{
  position: absolute;
  top: 45%;
  right: 20px;
}
.btn-left{
  position: absolute;
  left: 20px;
  top: 45%;
  transform: rotate(180deg)
}
`