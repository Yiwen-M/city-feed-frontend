import { styled } from '@mui/system';

import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const SignOutIcon = styled(ExitToAppIcon)({
  color: '#aebdca',
  fontSize: '100px',
  position: 'absolute',
  top: '45rem',
  right: '3rem',
  cursor: 'pointer',
  rotate: '-180deg',
  opacity: 0.5,
});

export { SignOutIcon };
