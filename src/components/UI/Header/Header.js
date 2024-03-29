import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { AuthContext, AuthStatus } from '../../../contexts/AuthContext';
import SignOutButton from '../SignOutButton/SignOutButton';

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import {
  HeaderStyled,
  SideMenuIcon,
  SiteNameWhenMenuClosed,
  SiteNameWhenMenuOpen,
  CloseMenuIcon,
  CreateIcon,
  ProfileIcon,
  DiscoverIcon,
  FollowIcon,
  MessageIcon,
  SettingIcon,
  HeaderBar,
  MenuBox,
  MenuHeader,
} from './HeaderStyles';

const menuItems = [
  {
    linkId: 'link1',
    url: '/discover',
    text: 'Discover',
    icon: <DiscoverIcon />,
  },
  {
    linkId: 'link2',
    url: '/following',
    text: 'Following',
    icon: <FollowIcon />,
  },
  {
    linkId: 'link3',
    url: '/messageCenter',
    text: 'Message Center',
    icon: <MessageIcon />,
  },
  {
    linkId: 'link4',
    url: '/setting',
    text: 'Setting',
    icon: <SettingIcon />,
  },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const { authStatus } = useContext(AuthContext);

  let navigate = useNavigate();

  const menuOpenHandler = () => setMenuOpen(true);
  const menuCloseHandler = () => setMenuOpen(false);

  const siteNameRouteHandler = () => navigate('/discover');
  const userIconRouteHandler = () => navigate('/userProfile');
  const createIconRouteHandler = () => navigate('/createPost');

  const renderSiteName = () => {
    if (menuOpen) {
      return (
        <SiteNameWhenMenuOpen onClick={siteNameRouteHandler}>
          City Feed
        </SiteNameWhenMenuOpen>
      );
    } else {
      return (
        <SiteNameWhenMenuClosed onClick={siteNameRouteHandler}>
          City Feed
        </SiteNameWhenMenuClosed>
      );
    }
  };

  const renderHeaderContent = () => {
    if (authStatus === AuthStatus.SignedIn) {
      return (
        <>
          <CreateIcon
            onClick={createIconRouteHandler}
            style={{ right: '15rem' }}
          />
          <ProfileIcon
            onClick={userIconRouteHandler}
            style={{ right: '9rem' }}
          />
          <SignOutButton />
        </>
      );
    } else {
      return (
        <>
          <CreateIcon onClick={createIconRouteHandler} />
          <ProfileIcon onClick={userIconRouteHandler} />
        </>
      );
    }
  };

  const renderMenuButtons = () =>
    menuItems.map((item) => (
      <List key={item.linkId}>
        <ListItem disablePadding sx={{ display: 'block' }}>
          <ListItemButton
            component={Link}
            to={item.url}
            sx={{
              marginTop: '85px',
              minHeight: 90,
              px: 9,
            }}
          >
            <ListItemIcon sx={{ minWidth: 0, mr: menuOpen ? 6 : 'auto' }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText
              primary={item.text}
              primaryTypographyProps={{ fontSize: '20px', fontWeight: 'bold' }}
              sx={{
                color: '#aebdca',
                opacity: menuOpen ? 1 : 0,
              }}
            />
          </ListItemButton>
        </ListItem>
      </List>
    ));

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <HeaderBar open={menuOpen}>
        <HeaderStyled>
          <IconButton
            disableFocusRipple
            disableRipple
            color="inherit"
            aria-label="open side menu"
            onClick={menuOpenHandler}
            sx={{
              marginRight: 5,
              ...(menuOpen && { display: 'none' }),
            }}
          >
            <SideMenuIcon />
          </IconButton>
          {menuOpen ? null : renderSiteName()}
          {renderHeaderContent()}
        </HeaderStyled>
      </HeaderBar>

      <MenuBox variant="permanent" open={menuOpen}>
        <MenuHeader>
          <IconButton
            disableFocusRipple
            disableRipple
            onClick={menuCloseHandler}
          >
            <CloseMenuIcon />
          </IconButton>
        </MenuHeader>
        {[...renderMenuButtons()]}
      </MenuBox>
    </Box>
  );
};

export default Header;
