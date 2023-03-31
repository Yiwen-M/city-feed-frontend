import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../../../contexts/AuthContext';

import {
  rootStyle,
  cardStyle,
  titleStyle,
  inputStyle,
  buttonStyle,
} from './SignInFormStyles';

import {
  Card,
  CardContent,
  Typography,
  Input,
  InputLabel,
  Button,
} from '@mui/material';

const SignInForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const authContext = useContext(AuthContext);

  let navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
    try {
      await authContext.signInWithUsername(username, password);
      let path = '/discover';
      navigate(path);
      let userInfo = authContext.getUserInfo();
      console.log(userInfo.username);
    } catch (err) {}
  };

  return (
    <>
      <div style={rootStyle}>
        <Card style={cardStyle}>
          <CardContent>
            <Typography component="h1" variant="h5" style={titleStyle}>
              Sign in
            </Typography>
            <form onSubmit={submitHandler}>
              <InputLabel htmlFor="username">Username</InputLabel>
              <Input
                id="Username"
                required
                variant="outlined"
                style={inputStyle}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                sx={{ border: '2px solid rgba(96, 120, 137)', borderRadius: 1 }}
                disableUnderline
              />
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input
                id="Password"
                required
                variant="outlined"
                style={inputStyle}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                sx={{ border: '2px solid rgba(96, 120, 137)', borderRadius: 1 }}
                disableUnderline
              />
              <Button type="submit" variant="contained" style={buttonStyle}>
                Sign In
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default SignInForm;
