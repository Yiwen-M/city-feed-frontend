import { useState } from 'react';

import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import CardMedia from '@mui/material/CardMedia';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MapsUgcIcon from '@mui/icons-material/MapsUgc';
import { pink } from '@mui/material/colors';

import { CardStyled, ExpandMore } from './FeedCardStyles';

const FeedCard = (props) => {
  const { feedId, avatar, title, userId, media, region, date, content } = props;

  const [expanded, setExpanded] = useState(false);

  const [liked, setLiked] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleLikeClick = () => {
    setLiked(!liked);
  };

  return (
    <CardStyled>
      <CardHeader
        avatar={
          <Avatar
            src={avatar}
            sx={{ width: 56, height: 56 }}
            alt="user avatar"
          />
        }
        title={title}
        titleTypographyProps={{
          fontSize: 25,
          color: '#616161',
        }}
        subheader={userId}
        subheaderTypographyProps={{
          fontSize: 17,
          color: '#616161',
        }}
      />
      {/* <CardMedia
        component="img"
        image={props.image}
        style={{ maxHeight: '700px' }}
        alt="post img"
      /> */}

      <ImageList
        sx={{
          width: 1050,
          maxHeight: 1500,
        }}
        variant="masonry"
        cols={2}
        gap={8}
      >
        {media.map((item, index) => (
          <ImageListItem key={index} sx={{ maxWidth: 675, maxHeight: 750 }}>
            <img src={item.imgUrl} loading="lazy" />
          </ImageListItem>
        ))}
      </ImageList>

      <CardContent>
        <Typography align="right" variant="body1" color="text.secondary">
          {`${region} · ${date} `}
        </Typography>
      </CardContent>

      <CardContent>
        <Typography style={{ wordWrap: 'break-word' }} color="text.secondary">
          {content}
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        <IconButton
          disableFocusRipple
          disableRipple
          onClick={handleLikeClick}
          aria-label="add to favorites"
          style={{ position: 'absolute', left: '1110px' }}
          sx={{ color: liked ? pink[500] : 'action' }}
        >
          <FavoriteIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="see and send comments"
        >
          <MapsUgcIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography color="text.secondary">comments will be here</Typography>
        </CardContent>
      </Collapse>
      {props.children}
    </CardStyled>
  );
};

export default FeedCard;
