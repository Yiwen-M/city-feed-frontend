import { Navigate } from 'react-router-dom';

import { AuthIsSignedIn, AuthIsNotSignedIn } from '../contexts/AuthContext';

import SignInForm from '../components/UI/SignInForm/SignInForm';

const SignIn = () => {
  return (
    <>
      <AuthIsNotSignedIn>
        <SignInForm />
      </AuthIsNotSignedIn>
      <AuthIsSignedIn>
        <Navigate to="/discover" />;
      </AuthIsSignedIn>
    </>
  );
};

export default SignIn;
