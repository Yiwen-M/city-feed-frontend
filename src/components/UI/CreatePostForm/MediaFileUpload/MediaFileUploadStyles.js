import { styled } from '@mui/system';

import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';

const WrapperDivStyled = styled(`div`)({
  border: '2px dashed #B4BABD',
  cursor: 'pointer',
  backgroundColor: '#F6F4F4',
  borderRadius: '4px',
  display: 'flex',
  flexFlow: 'column wrap',
});

const UploadIcon = styled(FileUploadOutlinedIcon)({
  position: 'absolute',
  top: '4rem',
  color: '#aebdca',
  fontSize: '55px !important',
  alignSelf: 'center',
});

const UploadButton = styled(Button)({
  position: 'absolute',
  top: '24rem',
  marginLeft: '5px',
  backgroundColor: '#aebdca',
  color: 'white',
  minHeight: '40px',
  alignSelf: 'center',
  fontSize: '15px',
  fontWeight: 'bold',
  '&:hover': {
    backgroundColor: '#aebdca',
  },
  '&:active': {
    backgroundColor: '#aebdca',
  },
});

const SmallCard = styled(Card)({
  backgroundColor: 'white',
  height: '120px',
  width: '400px',
  border: '1px #B4BABD',
  borderRadius: '4px',
  paddingBottom: '15px',
  paddingRight: '5px',
  marginTop: '25px',
  marginLeft: '13px',
  display: 'flex',
});

const BottomBtn = styled(Button)({
  position: 'absolute',
  top: '40rem',
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

export { WrapperDivStyled, UploadIcon, UploadButton, SmallCard, BottomBtn };
