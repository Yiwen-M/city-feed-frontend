import React from 'react';
import { HeaderStyled, MenuIcon, SiteName, ProfileIcon } from './HeaderStyles';


const Header = (props) => {
  return (
    <>
      <HeaderStyled>
        <MenuIcon />
        <SiteName>City Feed</SiteName>
        <ProfileIcon />
      </HeaderStyled>
    </>
  );
};

export default Header;
