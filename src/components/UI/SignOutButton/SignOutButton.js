import { useContext } from 'react';

import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';

import { SignOutBtn } from './SignOutButtonStyles';

const SignOutButton = () => {
  const authContext = useContext(AuthContext);

  let navigate = useNavigate();

  const SignOutHandler = async () => {
    try {
      await authContext.signOut();
      console.log('signout');
      let path = '/discover';
      navigate(path);
    } catch (err) {
      console.error(err);
    }
  };

  return <SignOutBtn onClick={SignOutHandler}>Sign Out</SignOutBtn>;
};

export default SignOutButton;
