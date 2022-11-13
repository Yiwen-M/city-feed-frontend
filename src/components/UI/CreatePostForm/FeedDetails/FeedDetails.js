import WrapperCard from '../WapperCard/WrapperCard';

import { WrapperTextStyled, BottomBtn } from './FeedDetailsStyles';

const FeedDetails = (props) => {
  const Back = (e) => {
    e.preventDefault();
    props.prevStep();
  };

  const Continue = (e) => {
    e.preventDefault();
    props.nextStep();
  };

  return (
    <>
      <WrapperCard>
        <WrapperTextStyled
          id="title"
          placeholder="Please enter the title of your post"
          multiline
          rows={2}
          sx={{ width: '900px' }}
        ></WrapperTextStyled>
        <WrapperTextStyled
          id="description"
          placeholder="Please enter the description of your post"
          multiline
          rows={8}
          sx={{ width: '900px' }}
        ></WrapperTextStyled>
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
          style={{ left: '1000px' }}
          onClick={Continue}
        >
          next
        </BottomBtn>
      </WrapperCard>
    </>
  );
};

export default FeedDetails;
