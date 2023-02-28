import { WrapperCardStyled } from './WrapperCardStyles';

const WrapperCard = (props) => {
  return <WrapperCardStyled>{props.children}</WrapperCardStyled>;
};

export default WrapperCard;
