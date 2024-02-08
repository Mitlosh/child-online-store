import styled from "styled-components"

const Button = ({ text, btnStyle = 1, icon }) => {
  return (
    <ButtonWrapper>
      <button className={`btn btn-${btnStyle === 2 ? "secondary" : btnStyle === 3 ? "link" : "primary"}`}>
        <img src={icon} alt="" />
        <p>
          {text}
        </p>
      </button>
    </ButtonWrapper>
  )
}

export default Button

const ButtonWrapper = styled.div`
.btn {
  padding: 20px;
  border-radius: 5px;
  font-weight: 700;
  color: var(--clr-white);
  background-color: var(--clr-accent);
  // display: flex;
  // align-items: center;
  // justify-content: center;
  // gap: 5px;
}

.btn-primary {
  text-transform: uppercase;

  &:hover {
    background-color: var(--clr-accent-hover);
  }
}

.btn-secondary {
  color: var(--clr-accent);
  background-color: var(--clr-white);
  border: 1px solid var(--clr-accent);

  &:hover {
    background-color: var(--clr-accent-light);
  }
}

.btn-link {
  color: var(--clr-accent);
  background-color: transparent;
  padding: 0;
  text-decoration: underline;
}
`