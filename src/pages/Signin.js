import { useNavigate, Navigate } from 'react-router-dom';

import AuthProvider, {
  AuthIsSignedIn,
  AuthIsNotSignedIn,
} from '../contexts/AuthContext';

import SignInForm from '../components/UI/SignInForm/SignInForm';

const Signin = () => {
  return (
    <>
      <AuthProvider>
        <AuthIsNotSignedIn>
          <SignInForm />
        </AuthIsNotSignedIn>
        <AuthIsSignedIn>
          <Navigate to="/discover" />;
        </AuthIsSignedIn>
      </AuthProvider>
    </>
  );
};

export default Signin;
