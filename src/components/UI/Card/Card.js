import { useState } from 'react';

import demoImg from '../../../assets/demo_card_img.JPG';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddCommentIcon from '@mui/icons-material/AddComment';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { ExpandMore } from './CardStyles';

const PostCard = (props) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      sx={{ maxWidth: 800 }}
      style={{ paddingTop: 10, paddingLeft: 60, paddingRight: 60 }}
    >
      <CardHeader
        title="Test Post Title"
        titleTypographyProps={{
          fontSize: 25,
        }}
        subheader="Oct 14, 2022"
        subheaderTypographyProps={{
          fontSize: 15,
        }}
      />
      <CardMedia component="img" height="400" image={demoImg} alt="post img" />

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive and pretty sweets were sold in XXX store, this place
          is perfect to hang out with your friend.
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="comment">
          <AddCommentIcon />
        </IconButton>

        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography style={{ wordWrap: 'break-word' }}>
            testtesttesettestsetststsetsettesttesttesettestsetststsetsettesttesttesettestsetststsetsettesttesttesettestsetststsetsettesttesttesettestsetststsetsettesttestt.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default PostCard;
