import styled from 'styled-components';

export const StyledMenu = styled.nav`

    
  display: none;
  flex-direction: column;
  justify-content: center;
  background: #CA8831;
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => open ? 'translateY(0)' : 'translateY(-100%)'};

    @media (max-width: 48rem){
        display: flex;
    }
  
  @media (max-width: 48rem) {
    width: 100%;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: white;
    text-decoration: none;
    transition: color 0.3s linear;
    
    @media (max-width: 48rem) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #575757;
    }
  }
`;