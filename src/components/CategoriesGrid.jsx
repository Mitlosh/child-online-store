import styled from "styled-components"
import carriage from "../assets/images/categories/carriage.png"
import bath from "../assets/images/categories/bath.png"
import bed from "../assets/images/categories/bed.png"
import pot from "../assets/images/categories/pot.png"
import puzzles from "../assets/images/categories/puzzles.png"
import room from "../assets/images/categories/room.png"

const CategoriesGrid = () => {
  return (
    <GridWrapper>
      <div className="grid-container">
        <div className="grid-item">
          <img src={carriage} alt="" />
          <p className="grid-item-text">Коляски 2в1</p>
        </div>
        <div className="grid-item">
          <img src={room} alt="" />
          <p className="grid-item-text">Ліжечка</p>
        </div>
        <div className="grid-item">
          <img src={bed} alt="" />
          <p className="grid-item-text">Постільна білизна</p>
        </div>
        <div className="grid-item">
          <img src={puzzles} alt="" />
          <p className="grid-item-text">Пазли</p>
        </div>
        <div className="grid-item">
          <img src={pot} alt="" />  
          <p className="grid-item-text">Горщики</p>        
        </div>
        <div className="grid-item">
          <img src={bath} alt="" />
          <p className="grid-item-text">Ванночки</p>
        </div>
      </div>
    </GridWrapper>
  )
}

export default CategoriesGrid

const GridWrapper = styled.div`
.grid-container {
  margin: 0;
  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
}

.grid-item, img {
  position: relative;
  border-radius: 20px;
}
img {
  border-radius: 20px;
  margin-left: auto;
}
.grid-item-text {
  color: var(--clr-white);
  background: rgba(0, 0, 0, 0.15);
  padding: 10px;
  border-radius: 10px;
  position: absolute;
  bottom: 30px;
  left: 30px;
}

.grid-item:nth-child(1) {
  background: linear-gradient(#6AD245, #58BE34);
  grid-row: span 2;
  
  img {
    height: 335px;
  }
}
.grid-item:nth-child(2) {
  background: #F99C11;
  img {
    width: 168px;
    height: 190px;
  }
}
.grid-item:nth-child(3) {
  background: linear-gradient(#4F8AE2, #3A73C9);
  grid-row: span 2;
}
.grid-item:nth-child(4) {
  background: linear-gradient(#D84545, #CC3C3C);
  img {
    width: 168px;
    height: 190px;
  }
}
.grid-item:nth-child(5) {
  background: linear-gradient(#2DEAE4, #27D8D2);
  img {
    width: 168px;
    height: 190px;
  }
}
.grid-item:nth-child(6) {
  background: linear-gradient(#A24FE2, #8E3AD0);
  img {
    width: 168px;
    height: 190px;
  }
}

.grid-item:nth-child(1),
.grid-item:nth-child(3) {
  grid-row: span 2;
}

@media screen and (max-width: 1000px) {
  .grid-container {
    grid-template-rows: repeat(4, 1fr);
    grid-template-columns: repeat(2, 1fr);
  }
  .grid-item:nth-child(1){
    img {
      width: 300px;
    }
  }
  .grid-item:nth-child(2){
  }
  .grid-item:nth-child(3){
    grid-row: span 1;
    img {
      width: 168px;
      height: 190px;
    }
  }
  .grid-item:nth-child(4){
  }
  .grid-item:nth-child(5) {
    grid-row: span 2;
    img {
      width: 300px;
      height: 335px;
    }
  }
  .grid-item:nth-child(4){
  }
}
`