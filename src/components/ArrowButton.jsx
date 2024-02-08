import styled from "styled-components"
import arrowRight from "../assets/icons/arrow-right.svg"

const ArrowButton = () => {
  return (
    <ArrowButtonWrapper>
      <button className="form-btn">
        <img src={arrowRight} alt="arrow-right" className="form-btn-icon" />
      </button>
    </ArrowButtonWrapper>
  )
}

export default ArrowButton

const ArrowButtonWrapper = styled.div`
.form-btn {
  padding: 12px;
  background-color: var(--clr-white);
  border-radius: 50%;
  // box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  .form-btn-icon {
    width: 22px;
    height: 22px;
  }
}
`