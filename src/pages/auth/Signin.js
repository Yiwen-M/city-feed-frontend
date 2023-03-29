import { useState, useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

const Signin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const authContext = useContext(AuthContext);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <h3>Please sign in to use more features.</h3>
      <label>username: </label>
      <input type="text" onChange={handleUsernameChange} />
      <br />
      <label>password: </label>
      <input type="text" onChange={handlePasswordChange} />
      <br />
      <button
        onClick={async () => {
          try {
            await authContext.signInWithEmail(username, password);
          } catch (err) {}
        }}
      >
        Sign in
      </button>
    </>
  );
};

export default Signin;
