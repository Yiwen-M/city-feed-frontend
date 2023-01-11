import { styled } from '@mui/system';

import { Toolbar } from '@mui/material'; //header bar
import MuiAppBar from '@mui/material/AppBar'; //header bar
import MuiDrawer from '@mui/material/Drawer'; //menu drawer

import WidgetsRoundedIcon from '@mui/icons-material/WidgetsRounded'; //side menu toggle open icon
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'; //side menu toggle close icon
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'; //create icon
import FaceRoundedIcon from '@mui/icons-material/FaceRounded'; //profile icon
import TravelExploreRoundedIcon from '@mui/icons-material/TravelExploreRounded'; //discover
import AddReactionRoundedIcon from '@mui/icons-material/AddReactionRounded'; //follow
import SendTimeExtensionRoundedIcon from '@mui/icons-material/SendTimeExtensionRounded'; //message
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded'; //setting

//basic styles
const HeaderStyled = styled(Toolbar)({
  position: 'fixed',
  top: '0',
  left: '0',
  width: '100%',
  height: '5rem',
  backgroundColor: '#aebdca',
  color: 'white',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 10%',
  border: '#aebdca',
  boxShadow: 'none',
});

const SiteNameWhenMenuClosed = styled(`h1`)({
  position: 'absolute',
  left: '210px',
  cursor: 'pointer',
  fontWeight: '600',
  fontSize: '30px',
  color: 'white',
});

const SiteNameWhenMenuOpen = styled(`h1`)({
  position: 'absolute',
  left: '430px',
  cursor: 'pointer',
  fontWeight: '600',
  fontSize: '30px',
  color: 'white',
});

const SideMenuIcon = styled(WidgetsRoundedIcon)({
  position: 'absolute',
  left: '50px',
  color: 'white',
  fontSize: '36px !important',
});

const CloseMenuIcon = styled(ChevronLeftIcon)({
  color: 'white',
  fontSize: '36px !important',
});

const CreateIcon = styled(AddCircleOutlineIcon)({
  position: 'absolute',
  right: '10rem',
  cursor: 'pointer',
  color: 'white',
  fontSize: '36px !important',
});

const ProfileIcon = styled(FaceRoundedIcon)({
  position: 'absolute',
  right: '4rem',
  cursor: 'pointer',
  color: 'white',
  fontSize: '36px !important',
});

const DiscoverIcon = styled(TravelExploreRoundedIcon)({
  color: '#aebdca',
  fontSize: '36px !important',
});

const FollowIcon = styled(AddReactionRoundedIcon)({
  color: '#aebdca',
  fontSize: '36px !important',
});

const MessageIcon = styled(SendTimeExtensionRoundedIcon)({
  color: '#aebdca',
  fontSize: '36px !important',
});

const SettingIcon = styled(SettingsSuggestRoundedIcon)({
  color: '#aebdca',
  fontSize: '36px !important',
});

//page transitions
const drawerWidth = 400;

const openedMemu = () => ({
  borderColor: '#aebdca',
  overflowX: 'hidden',
  width: drawerWidth,
});

const closedMemu = (theme) => ({
  borderColor: '#aebdca',
  overflowX: 'hidden',
  width: `calc(${theme.spacing(22)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(23)} + 1px)`,
  },
});

const HeaderBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
  //shouldForwardProp: indicates whether the prop should be forwarded to the component
})(({ theme, open }) => ({
  //header bar's style when menu is closed
  zIndex: theme.zIndex.drawer + 1,
  boxShadow: 'none',

  //header bar's style when menu is open
  ...(open && {
    marginLeft: drawerWidth,
    zIndex: theme.zIndex.drawer,
    width: `calc(100% - ${drawerWidth / 2}px)`,
  }),
}));

const MenuBox = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  //MenuBox's overall style
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  //MenuBox's style when menu is open
  ...(open && {
    ...openedMemu(theme),
    '& .MuiDrawer-paper': openedMemu(theme),
  }),
  //MenuBox's style when menu is closed
  ...(!open && {
    ...closedMemu(theme),
    '& .MuiDrawer-paper': closedMemu(theme),
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

export {
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
};
