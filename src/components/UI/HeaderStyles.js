import styled from 'styled-components';
import WidgetsRoundedIcon from '@mui/icons-material/WidgetsRounded';
import FaceRoundedIcon from '@mui/icons-material/FaceRounded';

const HeaderStyled = styled.header`
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
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 10;
`;

const SiteName = styled.h1`
  position: absolute;
  left: 200px;
  cursor: pointer;
  font-family: 'Andale Mono';
  font-weight: 600;
  font-size: 30px;
  color: white;
`;

const MenuIcon = styled(WidgetsRoundedIcon)`
  position: absolute;
  left: 80px;
  color: white;
  font-size: 36px !important;
`;

const ProfileIcon = styled(FaceRoundedIcon)`
  position: absolute;
  left: 1800px;
  color: white;
  font-size: 36px !important;
`;

export { HeaderStyled, MenuIcon, SiteName, ProfileIcon };
