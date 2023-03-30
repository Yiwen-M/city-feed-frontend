import { useState, useContext } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';

import { API_KEY, GET_USER_FEED_LIST_URL } from '../keys';
import AuthProvider, {
  AuthContext,
  AuthIsSignedIn,
  AuthIsNotSignedIn,
} from '../contexts/AuthContext';

import backgroundImage from '../assets/backgroundImage.jpeg';

import {
  Card,
  CardContent,
  Typography,
  Input,
  InputLabel,
  Button,
} from '@mui/material';

const getUserFeedListParams = { region: 'seattle' };

const Signin = () => {
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

  const rootStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    width: '100vw',
    backgroundColor: '#f2f2f2',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    opacity: 0.5,
  };

  const cardStyle = {
    width: 400,
    height: 330,
    padding: '20px',
  };

  const titleStyle = {
    width: '100%',
    marginBottom: '10px',
    marginLeft: '120px',
    color: 'grey',
  };

  const inputStyle = {
    width: '100%',
    marginBottom: '30px',
    marginTop: '5px',
    paddingLeft: '15px',
  };

  const buttonStyle = {
    backgroundColor: '#869EB2',
    marginLeft: '130px',
    marginTop: '20px',
  };

  return (
    <>
      <AuthProvider>
        <AuthIsNotSignedIn>
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
                    sx={{ border: '2px solid #aebdca', borderRadius: 1 }}
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
                    sx={{ border: '2px solid #aebdca', borderRadius: 1 }}
                    disableUnderline
                  />
                  <Button type="submit" variant="contained" style={buttonStyle}>
                    Sign In
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </AuthIsNotSignedIn>
        <AuthIsSignedIn>
          <Navigate to="/discover" />;
        </AuthIsSignedIn>
      </AuthProvider>
    </>
  );
};

export default Signin;
