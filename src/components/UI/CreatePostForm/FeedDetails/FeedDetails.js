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

  const { title, description, changeTitleHandler, changeDescriptionHandler } =
    props;

  const TITLE_CHARACTER_LIMIT = 40;
  const DESCRIPTION_CHARACTER_LENGTH = 430;

  return (
    <>
      <WrapperCard>
        <WrapperTextStyled
          id="title"
          placeholder="Please enter the title of your post"
          inputProps={{ maxLength: TITLE_CHARACTER_LIMIT }}
          helperText={`${title.length}/${TITLE_CHARACTER_LIMIT}`}
          multiline
          rows={2}
          sx={{ width: '900px' }}
          onChange={changeTitleHandler}
        ></WrapperTextStyled>
        <WrapperTextStyled
          id="description"
          placeholder="Please enter the description of your post"
          inputProps={{ maxLength: DESCRIPTION_CHARACTER_LENGTH }}
          helperText={`${description.length}/${DESCRIPTION_CHARACTER_LENGTH}`}
          multiline
          rows={8}
          sx={{ width: '900px' }}
          onChange={changeDescriptionHandler}
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
