import { Route, Routes } from 'react-router-dom';

import Discover from './pages/Discover';
import Following from './pages/Following';
import MessageCenter from './pages/MessageCenter';
import Setting from './pages/Setting';
import UserProfile from './pages/UserProfile';
import NotFound from './pages/NotFound';
import CreatePost from './pages/CreatePost';
import TempLogin from './pages/TempLogin';

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
        <Routes>
          <Route path="/" element={<Discover />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/following" element={<Following />} />
          <Route path="/messageCenter" element={<MessageCenter />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/userProfile" element={<UserProfile />} />
          <Route path="/createPost" element={<CreatePost />} />
          <Route path="/login" element={<TempLogin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
