import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

const Signout = () => {
  const authContext = useContext(AuthContext);
  return (
    <>
      <h3>
        You are signed in now. To go back to this page after navigation, please
        mannualy enter "/signin" to the URL.
      </h3>
      <button
        onClick={async () => {
          try {
            await authContext.signOut();
          } catch (err) {}
        }}
      >
        Sign out
      </button>
      <br />
    </>
  );
};

export default Signout;
