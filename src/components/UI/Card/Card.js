import { useState } from 'react';

import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MapsUgcIcon from '@mui/icons-material/MapsUgc';
import { pink } from '@mui/material/colors';

import { CardStyled, ExpandMore } from './CardStyles';

const FeedCard = (props) => {
  const [expanded, setExpanded] = useState(false);

  const [liked, setLiked] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleLikeClick = () => {
    setLiked(!liked);
  };

  return (
    <CardStyled sx={{ width: 900, maxHeight: 2000 }}>
      <CardHeader
        avatar={
          <Avatar
            src={props.avatar}
            sx={{ width: 56, height: 56 }}
            alt="user avatar"
          />
        }
        title={props.title}
        titleTypographyProps={{
          fontSize: 25,
          color: '#616161',
        }}
        subheader={props.userId}
        subheaderTypographyProps={{
          fontSize: 17,
          color: '#616161',
        }}
      />
      <CardMedia
        component="img"
        maxHeight="700"
        image={props.image}
        alt="post img"
      />

      <CardContent>
        <Typography align="right" variant="body1" color="text.secondary">
          {`${props.region} · ${props.date} `}
        </Typography>
      </CardContent>

      <CardContent>
        <Typography style={{ wordWrap: 'break-word' }} color="text.secondary">
          {props.content}
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        <IconButton
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
