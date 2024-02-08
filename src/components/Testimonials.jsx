import styled from "styled-components"
import StarRating from "./StarRating"
import Button from "./Button"
import axios from 'axios';
import { useEffect, useState } from "react";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect( () => {
    async function fetchData() {
      const data = await axios.get('https://jsonplaceholder.typicode.com/comments');
      setTestimonials(data);
    }
    fetchData();
  }, [])

  return (
    <TestimonialsWrapper>
      <div className="container">
        <div className="testimonials">
          <div className="rating">
          <h1 className="headline">Відгуки (9)</h1>
            <p className="rating-text">Рейтинг: </p>
            <StarRating number="4.5"/>
          </div>
          <div className="testimonials-btn">
            <Button text="+ Написати відгук" className="testimonials-btn"/>
          </div>
          <div className="testimonials-list">
            {testimonials.data?.slice(0, 9).map(item => (
            <div key={item.id} className="testimonials-item">
              <p className="date">20.09.22</p>
              <div className="name-title d-flex justify-content-between align-items-center">
                <p className="title">{item.email}</p>
                <div className="star">
                  <StarRating number={item.id}/>
                </div>
              </div>
              <div className="body">{item.body}</div>
            </div>
            ))}
          </div>
        </div>
      </div>
    </TestimonialsWrapper>
  )
}

export default Testimonials

const TestimonialsWrapper = styled.div`
.rating {
  display: flex;
  align-items: center;
  margin-top: 50px;

  h1 {margin-right: 20px;}
  p {margin-right: 10px;}
}

.testimonials-btn button {
  padding: 30px;
  margin: 30px 0;
  text-transform: none;
}

.testimonials-list {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
}

.testimonials-item {
  background-color: var(--clr-white);
  border-radius: 10px;
  padding: 30px;
  max-width: 409px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  line-height: 25px;

  .date {
    color: var(--clr-lightgrey);
  }
  .body {
    font-weight: 300;
  }
}
`