import { styled } from '@mui/system';

import Button from '@mui/material/Button';

const BottomBtn = styled(Button)({
  position: 'absolute',
  top: '41rem',
  backgroundColor: '#aebdca',
  color: 'white',
  minHeight: '40px',
  fontSize: '15px',
  fontWeight: 'bold',
  '&:hover': {
    backgroundColor: '#aebdca',
  },
  '&:active': {
    backgroundColor: '#aebdca',
  },
});

export { BottomBtn };
