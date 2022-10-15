import styled from 'styled-components';
import { Toolbar } from '@mui/material';
import WidgetsRoundedIcon from '@mui/icons-material/WidgetsRounded';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import FaceRoundedIcon from '@mui/icons-material/FaceRounded';
import TravelExploreRoundedIcon from '@mui/icons-material/TravelExploreRounded'; //discover
import AddReactionRoundedIcon from '@mui/icons-material/AddReactionRounded'; //follow
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded'; //favorite
import SendTimeExtensionRoundedIcon from '@mui/icons-material/SendTimeExtensionRounded'; //message
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded'; //setting
import ListItemText from '@mui/material/ListItemText';

const HeaderStyled = styled(Toolbar)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  background-color: #aebdca;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10%;
  border: #aebdca;
  box-shadow: none;
`;

const SiteName = styled.h1`
  position: absolute;
  left: 210px;
  cursor: pointer;
  font-family: 'Andale Mono';
  font-weight: 600;
  font-size: 30px;
  color: white;
`;

const SideMenuIcon = styled(WidgetsRoundedIcon)`
  position: absolute;
  left: 50px;
  color: white;
  font-size: 36px !important;
`;

const CloseMenuIcon = styled(ChevronLeftIcon)`
  color: white;
  font-size: 36px !important;
`;

const ProfileIcon = styled(FaceRoundedIcon)`
  position: absolute;
  right: 4rem;
  cursor: pointer;
  color: white;
  font-size: 36px !important;
`;

const DiscoverIcon = styled(TravelExploreRoundedIcon)`
  color: #aebdca;
  font-size: 36px !important;
`;

const FollowIcon = styled(AddReactionRoundedIcon)`
  color: #aebdca;
  font-size: 36px !important;
`;

const FavoriteIcon = styled(FavoriteRoundedIcon)`
  color: #aebdca;
  font-size: 36px !important;
`;

const MessageIcon = styled(SendTimeExtensionRoundedIcon)`
  color: #aebdca;
  font-size: 36px !important;
`;

const SettingIcon = styled(SettingsSuggestRoundedIcon)`
  color: #aebdca;
  font-size: 36px !important;
`;

export {
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
};
