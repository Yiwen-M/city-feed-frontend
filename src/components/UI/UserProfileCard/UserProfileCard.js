import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { CardStyled } from './UserProfileCardStyles';

const UserProfileCard = (props) => {
  const { avatar, userId, following, follower } = props;

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
        title={userId}
        titleTypographyProps={{
          fontSize: 25,
          color: 'white',
          marginLeft: 3,
        }}
      />
      <CardContent style={{ display: 'flex' }}>
        <Typography variant="h6" style={{ width: '200px' }}>
          {`Following: ${following}`}
          {/* will become an a link href to the follow list */}
        </Typography>
        <Typography variant="h6" style={{ marginLeft: '60px', width: '200px' }}>
          {`Follower: ${follower} `}
          {/* will become an a link href to the follow list */}
        </Typography>
      </CardContent>
    </CardStyled>
  );
};

export default UserProfileCard;
