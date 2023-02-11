import { useState, useEffect } from 'react';

import { LIKE_FEED_URL, API_KEY } from '../../../keys';

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
  const {
    feedId,
    avatar,
    title,
    userId,
    media,
    region,
    date,
    content,
    likeNum,
    liked,
    commentNum,
  } = props;

  const [expanded, setExpanded] = useState(false);
  const [feedLikeStatus, setFeedLikeStatus] = useState(liked);

  const expandClickHandler = () => {
    setExpanded(!expanded);
  };

  const changeLikeStatusHandler = () => {
    console.log(feedLikeStatus);
    setFeedLikeStatus(feedLikeStatus == 0 ? 1 : 0);
  };

  useEffect(() => {
    likeFeedHandler();
  }, [feedLikeStatus]);

  async function likeFeedHandler() {
    const likeFeedBody = {
      userId: 'testUser',
      feedId: feedId,
      like: feedLikeStatus,
    };
    if (likeFeedBody.like === liked) {
      return;
    }
    try {
      const response = await fetch(LIKE_FEED_URL, {
        method: 'POST',
        body: JSON.stringify(likeFeedBody),
        headers: {
          'content-type': 'application/json',
          'x-api-key': API_KEY,
        },
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  }

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
          marginLeft: 3,
        }}
        subheader={userId}
        subheaderTypographyProps={{
          fontSize: 17,
          color: '#616161',
          marginLeft: 3,
        }}
      />
      {media.length === 1 && (
        <CardMedia
          component="img"
          image={media[0].imgUrl}
          style={{ maxHeight: '700px' }}
          alt="post img"
        />
      )}

      {media.length > 1 && (
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
              <img src={item.imgUrl} loading="lazy" alt="post img" />
            </ImageListItem>
          ))}
        </ImageList>
      )}

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
          aria-label="add to favorites"
          onClick={changeLikeStatusHandler}
          style={{ position: 'absolute', left: '1110px' }}
          sx={{ color: feedLikeStatus == 1 ? pink[500] : 'action' }}
        >
          <FavoriteIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={expandClickHandler}
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
