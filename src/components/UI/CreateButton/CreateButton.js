import { useNavigate } from 'react-router-dom';

import { IconButton } from '@mui/material';

import { CreateIcon } from './CreateButtonStyles'

const CreateButton = (props) => {
  let navigate = useNavigate();

  const buttonRouteHandler = () => {
    let path = '/createPost';
    navigate(path);
  };

  return (
    <>
      <IconButton onClick={buttonRouteHandler}>
        <CreateIcon />
      </IconButton>
    </>
  );
};

export default CreateButton;
