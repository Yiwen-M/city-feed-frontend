import WrapperCard from '../../WrapperCard/WrapperCard';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { IconButton } from '@mui/material';

import {
  WrapperDivStyled,
  UploadIcon,
  UploadButton,
  SmallCard,
  BottomBtn,
} from './MediaFileUploadStyles';

const MediaFileUpload = (props) => {
  const Continue = (e) => {
    e.preventDefault();
    props.nextStep();
  };

  const { fileUploadHandler, selectedFiles, imagePreviewURL, isSelected } =
    props;

  const uploadedFileArr = selectedFiles.map((curFile, index) => {
    return (
      <SmallCard key={'StringImg' + index} value={curFile}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography variant="body2" color="text.secondary" component="div">
              {curFile.name}
            </Typography>
            <br />
            <Typography variant="body2" color="text.secondary" component="div">
              Size: {curFile.size} bytes
            </Typography>
          </CardContent>
        </Box>
        <CardMedia
          component="img"
          sx={{ maxWidth: 150 }}
          style={{
            marginLeft: '60px',
            marginTop: '15px',
            marginRight: '5px',
          }}
          image={imagePreviewURL[index]}
          alt="selected image"
        />
      </SmallCard>
    );
  });

  return (
    <>
      <WrapperCard>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
              m: 9,
              width: 1200,
              height: 400,
            },
          }}
        >
          <WrapperDivStyled>
            {!isSelected && (
              <>
                <IconButton
                  disableFocusRipple
                  disableRipple
                  aria-label="upload picture"
                  component="label"
                >
                  <input
                    hidden
                    accept="image/*"
                    multiple
                    type="file"
                    onChange={fileUploadHandler}
                  />
                  <UploadIcon />
                </IconButton>
                <Typography
                  color="text.secondary"
                  style={{ marginTop: '125px' }}
                  align="center"
                >
                  click to upload the images
                </Typography>
                <UploadButton
                  variant="contained"
                  component="label"
                  sx={{ width: '170px' }}
                >
                  upload
                  <input
                    hidden
                    accept="image/*"
                    multiple
                    type="file"
                    onChange={fileUploadHandler}
                  />
                </UploadButton>
              </>
            )}
            {isSelected && [...uploadedFileArr]}
            {isSelected && (
              <>
                <BottomBtn
                  variant="contained"
                  component="label"
                  sx={{ width: '170px' }}
                  style={{ left: '380px' }}
                >
                  upload more
                  <input
                    hidden
                    accept="image/*"
                    multiple
                    type="file"
                    onChange={fileUploadHandler}
                  />
                </BottomBtn>
                <BottomBtn
                  variant="contained"
                  component="label"
                  sx={{ width: '170px' }}
                  style={{ left: '730px' }}
                  onClick={Continue}
                >
                  next
                </BottomBtn>
              </>
            )}
          </WrapperDivStyled>
        </Box>
      </WrapperCard>
    </>
  );
};

export default MediaFileUpload;
