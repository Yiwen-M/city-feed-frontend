import { styled } from '@mui/system';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const WrapperTextStyled = styled(TextField)({
  cursor: 'pointer',
  backgroundColor: '#F6F4F4',
  borderRadius: '4px',
  marginTop: '60px',
  marginLeft: '60px',
  '& label.Mui-focused': {
    color: 'white',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#F6F4F4',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#F6F4F4',
    },
    '&:hover fieldset': {
      borderColor: '#F6F4F4',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#F6F4F4',
    },
  },
});

const BottomBtn = styled(Button)({
  position: 'absolute',
  top: '38rem',
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

export { WrapperTextStyled, BottomBtn };
