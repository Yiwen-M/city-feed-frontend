import { useState } from 'react';
import WrapperCard from '../WapperCard/WrapperCard';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { IconButton } from '@mui/material';

import {
  WrapperDivStyled,
  UploadIcon,
  UploadButton,
} from './MediaFileUploadStyles';

const MediaFileUpload = () => {
  return (
    <>
      <WrapperCard>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
              m: 9,
              width: 800,
              height: 350,
            },
          }}
        >
          <WrapperDivStyled>
            <IconButton
              disableFocusRipple
              disableRipple
              aria-label="upload picture"
              component="label"
            >
              <input hidden accept="image/*" multiple type="file" />
              <UploadIcon />
            </IconButton>
            <UploadButton variant="contained" component="label">
              upload
              <input hidden accept="image/*" multiple type="file" />
            </UploadButton>
            <Typography color="text.secondary" style={{ marginTop: '105px' }}>
              Drag and drop images here or
            </Typography>
            <Typography color="text.secondary" style={{ marginTop: '10px' }}>
              click to upload the images
            </Typography>
          </WrapperDivStyled>
        </Box>
      </WrapperCard>
    </>
  );
};

export default MediaFileUpload;
