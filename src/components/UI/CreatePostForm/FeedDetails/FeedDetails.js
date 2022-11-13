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

  const { title, content, changeTitleHandler, changeContentHandler } = props;

  const TITLE_CHARACTER_LIMIT = 40;
  const CONTENT_CHARACTER_LENGTH = 430;

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
          sx={{ width: '1200px' }}
          onChange={changeTitleHandler}
        ></WrapperTextStyled>
        <WrapperTextStyled
          id="content"
          placeholder="Please enter the content of your post"
          inputProps={{ maxLength: CONTENT_CHARACTER_LENGTH }}
          helperText={`${content.length}/${CONTENT_CHARACTER_LENGTH}`}
          multiline
          rows={8}
          sx={{ width: '1200px' }}
          onChange={changeContentHandler}
        ></WrapperTextStyled>
        <BottomBtn
          variant="contained"
          sx={{ width: '170px' }}
          style={{ left: '380px' }}
          onClick={Back}
        >
          back
        </BottomBtn>
        <BottomBtn
          variant="contained"
          sx={{ width: '170px' }}
          style={{ left: '730px' }}
          disabled={title.length <= 0 || content.length <= 0}
          onClick={Continue}
        >
          next
        </BottomBtn>
      </WrapperCard>
    </>
  );
};

export default FeedDetails;
