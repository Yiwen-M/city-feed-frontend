import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import MuiDrawer from '@mui/material/Drawer';
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
  SiteName,
  CloseMenuIcon,
  ProfileIcon,
  DiscoverIcon,
  FollowIcon,
  FavoriteIcon,
  MessageIcon,
  SettingIcon,
} from './HeaderStyles';

const drawerWidth = 300;

const openedMixin = (theme) => ({
  width: drawerWidth,
  borderColor: '#aebdca',
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  borderColor: '#aebdca',
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(22)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(23)} + 1px)`,
  },
});

const HeaderBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  boxShadow: 'none',
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    zIndex: theme.zIndex.drawer,
    width: `calc(100% - ${drawerWidth / 2}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const MenuBox = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

const MenuHeader = styled('div')(({ theme }) => ({
  height: '5rem',
  backgroundColor: '#aebdca',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  boxShadow: 'none',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

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
  const [open, setOpen] = useState(false);

  const handleMenuOpen = () => {
    setOpen(true);
  };

  const handleMenuClose = () => {
    setOpen(false);
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
              justifyContent: open ? 'initial' : 'center',
              px: open ? 5 : 9,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 2 : 'auto',
                justifyContent: open ? 'left' : 'center',
              }}
            >
              <Link to={url}> {icon}</Link>
            </ListItemIcon>

            <ListItemText
              primary={text}
              primaryTypographyProps={{
                fontFamily: 'Andale Mono',
                fontSize: '20px',
                fontWeight: 'bold',
              }}
              sx={{
                color: '#aebdca',
                opacity: open ? 1 : 0,
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

      <HeaderBar open={open}>
        <HeaderStyled>
          <IconButton
            color="inherit"
            aria-label="open side menu"
            onClick={handleMenuOpen}
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <SideMenuIcon />
          </IconButton>
          <SiteName onClick={siteNameRouteHandler}>City Feed</SiteName>
          <ProfileIcon onClick={userIconRouteHandler} />
        </HeaderStyled>
      </HeaderBar>

      <MenuBox variant="permanent" open={open}>
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
