import styled from 'styled-components';

export const StyledBurger = styled.button`
  position: absolute;
  top: 30%;
  right: 2rem;
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 4rem;
  height: 4rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  @media (max-width: 48rem){
    display: flex;
}
  
  &:focus {
    outline: none;
  }
  
  div {
    width: 4rem;
    height: 0.25rem;
    background: ${({ open }) => open ?  '#fff'     :  '#CA8831'}; 
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
        transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
      }
  
      :nth-child(2) {
        opacity: ${({ open }) => open ? '0' : '1'};
        transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
      }
  
      :nth-child(3) {
        transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
      }
  }
`;
