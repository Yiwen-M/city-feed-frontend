import { styled } from '@mui/system';

import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import Button from '@mui/material/Button';

const WrapperDivStyled = styled(`div`)({
  border: '2px dashed #B4BABD',
  cursor: 'pointer',
  backgroundColor: '#F6F4F4',
  borderRadius: '4px',
  display: 'flex',
  alignItems: 'stretch',
  flexFlow: 'column wrap',
  alignItems: 'center',
});

const UploadIcon = styled(FileUploadOutlinedIcon)({
  position: 'absolute',
  top: '3rem',
  color: '#aebdca',
  fontSize: '55px !important',
  flex: 1,
});

const UploadButton = styled(Button)({
  position: 'absolute',
  top: '24rem',
  marginLeft:'5px',
  backgroundColor: '#aebdca',
  color: 'white',
  minHeight: '40px',
  '&:hover': {
    backgroundColor: '#aebdca',
  },
  '&:active': {
    backgroundColor: '#aebdca',
  },
  flex: 3,
});

const FilePreviewContainer = styled(`div`)({
  border: '2px dashed #B4BABD',
  cursor: 'pointer',
  backgroundColor: '#F6F4F4',
  borderRadius: '4px',
  display: 'flex',
  alignItems: 'stretch',
  flexFlow: 'column wrap',
  alignItems: 'center',
});

export { WrapperDivStyled, UploadIcon, UploadButton, FilePreviewContainer };
