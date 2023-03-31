import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { API_KEY, GET_USER_FEED_LIST_URL } from '../../../keys';
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

const getUserFeedListParams = { region: 'seattle' };

const SignInForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userFeedList, setUserFeedList] = useState([]);

  const authContext = useContext(AuthContext);

  let navigate = useNavigate();

  const getUserFeedListHandler = async () => {
    const tokenSession = await authContext.getSession();
    const token = tokenSession.idToken.jwtToken;
    console.log('idToken: ----', token);
    const response = await fetch(
      GET_USER_FEED_LIST_URL +
        new URLSearchParams(getUserFeedListParams).toString(),
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          'x-api-key': API_KEY,
        },
      }
    );
    const data = await response.json();
    console.log('Data: ', data);
    setUserFeedList(data.feedList);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
    try {
      await authContext.signInWithUsername(username, password);
      getUserFeedListHandler();
      let path = '/discover';
      navigate(path);
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
