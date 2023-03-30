import { styled } from '@mui/system';

import Card from '@mui/material/Card';
import MapsUgcIcon from '@mui/icons-material/MapsUgc';


const CardStyled = styled(Card)({
  maxHeight: '2000px',
  width: '1200px',
  paddingTop: '30px',
  paddingLeft: '80px',
  paddingRight: '80px',
  paddingBottom: '30px',
  marginLeft: '300px',
  marginBottom: '80px',
  boxShadow: '10px 10px 20px rgba(0, 0, 0, 0.3)',
});

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <MapsUgcIcon {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(-90deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export { CardStyled, ExpandMore };
