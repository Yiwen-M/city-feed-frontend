import { Route, Routes } from 'react-router-dom';

import AuthProvider, {
  AuthIsSignedIn,
  AuthIsNotSignedIn,
} from './contexts/AuthContext';

import Discover from './pages/Discover';
import Following from './pages/Following';
import MessageCenter from './pages/MessageCenter';
import Setting from './pages/Setting';
import UserProfile from './pages/UserProfile';
import NotFound from './pages/NotFound';
import CreatePost from './pages/CreatePost';
import Signin from './pages/Signin';
import SigninReminder from './pages/SigninReminder';

import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';

const appFont = createTheme({
  typography: {
    fontFamily: ['Andale Mono'].join(','),
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={appFont}>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Discover />} />
            <Route path="/discover" element={<Discover />} />
            <Route
              path="/following"
              element={
                <>
                  <AuthIsSignedIn>
                    <Following />
                  </AuthIsSignedIn>
                  <AuthIsNotSignedIn>
                    <SigninReminder />
                  </AuthIsNotSignedIn>
                </>
              }
            />
            <Route
              path="/messageCenter"
              element={
                <>
                  <AuthIsSignedIn>
                    <MessageCenter />
                  </AuthIsSignedIn>
                  <AuthIsNotSignedIn>
                    <SigninReminder />
                  </AuthIsNotSignedIn>
                </>
              }
            />
            <Route
              path="/setting"
              element={
                <>
                  <AuthIsSignedIn>
                    <Setting />
                  </AuthIsSignedIn>
                  <AuthIsNotSignedIn>
                    <SigninReminder />
                  </AuthIsNotSignedIn>
                </>
              }
            />
            <Route
              path="/userProfile"
              element={
                <>
                  <AuthIsSignedIn>
                    <UserProfile />
                  </AuthIsSignedIn>
                  <AuthIsNotSignedIn>
                    <SigninReminder />
                  </AuthIsNotSignedIn>
                </>
              }
            />
            <Route
              path="/createPost"
              element={
                <>
                  <AuthIsSignedIn>
                    <CreatePost />
                  </AuthIsSignedIn>
                  <AuthIsNotSignedIn>
                    <SigninReminder />
                  </AuthIsNotSignedIn>
                </>
              }
            />
            <Route path="/signin" element={<Signin />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
