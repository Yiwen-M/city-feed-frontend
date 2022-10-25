import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

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
  ProfileIcon,
  DiscoverIcon,
  FollowIcon,
  FavoriteIcon,
  MessageIcon,
  SettingIcon,
  HeaderBar,
  MenuBox,
  MenuHeader,
} from './HeaderStyles';

const menuItems = [
  {
    id: 'link1',
    url: '/discover',
    text: 'Discover',
    icon: <DiscoverIcon />,
  },
  {
    id: 'link2',
    url: '/following',
    text: 'Following',
    icon: <FollowIcon />,
  },
  {
    id: 'link3',
    url: '/favorite',
    text: 'Favorite',
    icon: <FavoriteIcon />,
  },
  {
    id: 'link4',
    url: '/messageCenter',
    text: 'Message Center',
    icon: <MessageIcon />,
  },
  {
    id: 'link5',
    url: '/setting',
    text: 'Setting',
    icon: <SettingIcon />,
  },
];

const SideMenu = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setMenuOpen(true);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  let navigate = useNavigate();

  const siteNameRouteHandler = () => {
    let path = '/discover';
    navigate(path);
  };

  const userIconRouteHandler = () => {
    let path = '/userProfile';
    navigate(path);
  };

  const menuBtnArr = menuItems.map((item) => {
    const { id, url, text, icon } = item;
    return (
      <List>
        <ListItem key={id} disablePadding sx={{ display: 'block' }}>
          <ListItemButton
            component={Link}
            to={url}
            sx={{
              marginTop: '50px',
              minHeight: 90,
              px: 9,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: menuOpen ? 6 : 'auto',
              }}
            >
              <Link to={url}> {icon}</Link>
            </ListItemIcon>

            <ListItemText
              primary={text}
              primaryTypographyProps={{
                fontSize: '20px',
                fontWeight: 'bold',
              }}
              sx={{
                color: '#aebdca',
                opacity: menuOpen ? 1 : 0,
              }}
            />
          </ListItemButton>
        </ListItem>
      </List>
    );
  });

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <HeaderBar open={menuOpen}>
        <HeaderStyled>
          <IconButton
            color="inherit"
            aria-label="open side menu"
            onClick={handleMenuOpen}
            sx={{
              marginRight: 5,
              ...(menuOpen && { display: 'none' }),
            }}
          >
            <SideMenuIcon />
          </IconButton>
          {!menuOpen && (
            <SiteNameWhenMenuClosed onClick={siteNameRouteHandler}>
              City Feed
            </SiteNameWhenMenuClosed>
          )}
          {menuOpen && (
            <SiteNameWhenMenuOpen onClick={siteNameRouteHandler}>
              City Feed
            </SiteNameWhenMenuOpen>
          )}
          <ProfileIcon onClick={userIconRouteHandler} />
        </HeaderStyled>
      </HeaderBar>

      <MenuBox variant="permanent" open={menuOpen}>
        <MenuHeader>
          <IconButton onClick={handleMenuClose}>
            <CloseMenuIcon />
          </IconButton>
        </MenuHeader>

        {[...menuBtnArr]}
      </MenuBox>
    </Box>
  );
};

export default SideMenu;
