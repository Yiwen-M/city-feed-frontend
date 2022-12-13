import WrapperCard from '../../WapperCard/WrapperCard';

import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { BottomBtn } from './ConfirmPreviewStyles';

const ConfirmPreview = (props) => {
  const Back = (e) => {
    e.preventDefault();
    props.prevStep();
  };

  const Submit = (e) => {
    e.preventDefault();
    props.submitHandler();
  };

  const { title, imagePreviewURL, date, content } = props;

  return (
    <>
      <WrapperCard>
        <CardHeader
          sx={{
            marginLeft: '50px',
            marginTop: '20px',
          }}
          avatar={
            <Avatar
              src="https://www.w3schools.com/howto/img_avatar.png"
              sx={{ width: 56, height: 56 }}
              alt="user avatar"
            />
          }
          title={title}
          titleTypographyProps={{
            fontSize: 25,
            color: '#616161',
          }}
          subheader="testUser"
          subheaderTypographyProps={{
            fontSize: 17,
            color: '#616161',
          }}
        />
        <ImageList
          sx={{
            width: 1200,
            height: 200,
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'wrap',
            marginLeft: '50px',
            marginRight: '100px',
          }}
          cols={4}
        >
          {imagePreviewURL.map((item, index) => (
            <ImageListItem key={index} sx={{ maxWidth: 350, maxHeight: 200 }}>
              <img src={item} loading="lazy" alt="post img" />
            </ImageListItem>
          ))}
        </ImageList>

        <CardContent>
          <Typography
            align="right"
            variant="body1"
            color="text.secondary"
            sx={{ marginRight: '40px' }}
          >
            {`seattle · ${date} `}
          </Typography>
        </CardContent>

        <CardContent
          sx={{
            marginLeft: '50px',
          }}
        >
          <Typography style={{ wordWrap: 'break-word' }} color="text.secondary">
            {content}
          </Typography>
        </CardContent>
      </WrapperCard>
      <BottomBtn
        variant="contained"
        sx={{ width: '170px' }}
        style={{ left: '600px' }}
        onClick={Back}
      >
        back
      </BottomBtn>
      <BottomBtn
        variant="contained"
        sx={{ width: '170px' }}
        style={{ left: '950px' }}
        onClick={Submit}
      >
        post
      </BottomBtn>
    </>
  );
};

export default ConfirmPreview;
