import React from 'react';
import { bool } from 'prop-types';

import { StyledMenu } from './menu.styled';

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <a href="/find-a-lecturer">
        
        Find a Lecturer
      </a>
      <a href="/rate-a-lecturer">
        
        Rate a Lecturer
        </a>
      <a href="/rate-a-school">
        
        Rate a School
        </a>

        <a href="/signin">
        
        SIGN IN
        </a>

        <a href="/signup">
        
        SIGN UP
        </a>
    </StyledMenu>
  )
}

Menu.propTypes = {
    open: bool.isRequired,
  }
export default Menu;



