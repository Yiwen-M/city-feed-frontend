import Signin from './auth/Signin';
import Signout from './auth/Signout';
import AuthProvider, {
  AuthIsSignedIn,
  AuthIsNotSignedIn,
} from '../contexts/AuthContext';

const TempLogin = () => {
  return (
    <>
      <AuthProvider>
        <AuthIsNotSignedIn>
          <Signin />
        </AuthIsNotSignedIn>
        <AuthIsSignedIn>
          <Signout />
        </AuthIsSignedIn>
      </AuthProvider>
    </>
  );
};

export default TempLogin;
