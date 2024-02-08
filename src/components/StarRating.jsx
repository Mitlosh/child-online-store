import styled from "styled-components"
import star from "../assets/icons/star.svg"
import starEmpty from "../assets/icons/star-empty.svg"

const StarRating = ({number}) => {
  const stars = Array.from({ length: 5 }, (_, idx) => {
    return (
    <div key={idx}>
      {number >= idx + 1 ? <img src={star} alt="" className="rating-icon"/> 
    : <img src={starEmpty} alt="" className="rating-icon"/> }
    </div>);
  });

  return (
    <StarRatingWrapper>
      <span className="rating-number">{number}</span>
      {stars}
    </StarRatingWrapper>
  )

}

export default StarRating

const StarRatingWrapper = styled.div`
display: flex;
align-items: center;

.rating-icon {
  width: 23px;
}
.rating-number {
  font-size: 20px;
  font-weight: 700;
  color: var(--clr-accent);
  margin-right: 3px;
}
`