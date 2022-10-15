import { Route, Routes } from 'react-router-dom';
import Discover from './pages/Discover';
import Following from './pages/Following';
import Favorite from './pages/Favorite';
import MessageCenter from './pages/MessageCenter';
import Setting from './pages/Setting';
import UserProfile from './pages/UserProfile';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
      <Routes>
      <Route path="/" element={<Discover />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/following" element={<Following />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/messageCenter" element={<MessageCenter />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/userProfile" element={<UserProfile />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
    </>
  );
}

export default App;
