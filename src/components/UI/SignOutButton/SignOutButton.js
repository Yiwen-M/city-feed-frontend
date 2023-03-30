import {  useContext } from 'react';

import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';

import { SignOutIcon } from './SignOutButtonStyles';

const SignOutButton = () => {
  const authContext = useContext(AuthContext);

  let navigate = useNavigate();

  const SignOutHandler = async () => {
    try {
      await authContext.signOut();
      let path = '/discover';
      navigate(path);
    } catch (err) {}
  };

  return <SignOutIcon onClick={SignOutHandler}></SignOutIcon>;
};

export default SignOutButton;
