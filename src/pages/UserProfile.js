import { useState, useEffect, useCallback } from 'react';

import { GET_USER_URL, GET_FAV_LIST_URL, API_KEY } from '../keys';

import Header from '../components/UI/Header/Header';
import PageWrapper from '../components/UI/PageWrapper/PageWrapper';
import UserProfileCard from '../components/UI/UserProfileCard/UserProfileCard';
import WrapperCard from '../components/UI/WapperCard/WrapperCard';
import FeedCard from '../components/UI/FeedCard/FeedCard';

import { DUMMY_FEED_LIST } from '../components/MockData/DummyFeedList';

import CircularProgress from '@mui/material/CircularProgress';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const UserProfile = () => {
  const [tabValue, setTabValue] = useState(0);
  const [userDetail, setUserDetail] = useState(null);
  const [favList, setFavList] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const changeTabHandler = (event, newTabValue) => {
    switch (newTabValue) {
      case 0:
        getUserDetailHandler();
        break;
      case 1:
        getFavoriteListHandler();
        break;
      default:
        break;
    }
    console.log(newTabValue);
    setTabValue(newTabValue);
  };

  const curUserId = 'testUser'; //hard coded for now
  const curFollower = 0;
  const curFollowing = 0;
  let favoriteList = DUMMY_FEED_LIST.filter((feed) => feed.liked === 1);

  const getUserDetailHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(GET_USER_URL + curUserId, {
        method: 'GET',
        headers: { 'x-api-key': API_KEY },
      });
      if (!response.ok) {
        throw new Error('Something went wrong, please refresh the page!');
      }
      const data = await response.json();
      console.log(data.userDetails);
      setUserDetail(data.userDetails);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    getUserDetailHandler();
  }, []);

  const getFavoriteListHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(GET_FAV_LIST_URL + curUserId, {
        method: 'GET',
        headers: { 'x-api-key': API_KEY },
      });
      if (!response.ok) {
        throw new Error('Something went wrong, please refresh the page!');
      }
      const data = await response.json();
      console.log(data.feedList);
      setFavList(data.feedList);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    getFavoriteListHandler();
  }, []);

  let content = (
    <div style={{ marginTop: '180px', marginLeft: '750px' }}>
      <CircularProgress size="10rem" thickness={2} sx={{ color: '#aebdca' }} />
    </div>
  );

  if (tabValue === 0) {
    if (userDetail) {
      content = (
        <>
          <UserProfileCard
            avatar={userDetail.avatar}
            userId={curUserId}
            following={curFollowing}
            follower={curFollower}
          />
          <Tabs
            value={tabValue}
            onChange={changeTabHandler}
            TabIndicatorProps={{
              style: {
                backgroundColor: '#aebdca',
              },
            }}
            style={{ marginLeft: '600px', marginBottom: '30px' }}
            aria-label="profile page tabs"
          >
            <Tab
              disableFocusRipple
              disableRipple
              style={{ color: '#616161', width: '300px', fontSize: '15px' }}
              label="My Feeds"
            />
            <Tab
              disableFocusRipple
              disableRipple
              style={{ color: '#616161', width: '300px', fontSize: '15px' }}
              label="Favorite Feeds"
            />
          </Tabs>
          {userDetail.feedList.map((feed) => {
            return (
              <FeedCard
                key={feed.feedId}
                avatar={feed.avatar}
                title={feed.title}
                userId={feed.userId}
                media={feed.media}
                region={feed.region}
                date={new Date(parseInt(feed.timestamp)).toLocaleString()}
                content={feed.content}
              />
            );
          })}
        </>
      );
    }
  } else if (tabValue === 1) {
    if (favList) {
      content = (
        <>
          <UserProfileCard
            avatar={userDetail.avatar}
            userId={curUserId}
            following={curFollowing}
            follower={curFollower}
          />
          <Tabs
            value={tabValue}
            onChange={changeTabHandler}
            TabIndicatorProps={{
              style: {
                backgroundColor: '#aebdca',
              },
            }}
            style={{ marginLeft: '600px', marginBottom: '30px' }}
            aria-label="profile page tabs"
          >
            <Tab
              disableFocusRipple
              disableRipple
              style={{ color: '#616161', width: '300px', fontSize: '15px' }}
              label="My Post"
            />
            <Tab
              disableFocusRipple
              disableRipple
              style={{ color: '#616161', width: '300px', fontSize: '15px' }}
              label="Favorite Post"
            />
          </Tabs>
          {favList.map((feed) => {
            return (
              <FeedCard
                key={feed.feedId}
                avatar={feed.avatar}
                title={feed.title}
                userId={feed.userId}
                media={feed.media}
                region={feed.region}
                date={new Date(feed.timestamp).toLocaleString()}
                content={feed.content}
              />
            );
          })}
        </>
      );
    }
    
  }

  if (error) {
    content = (
      <WrapperCard>
        <p
          style={{ marginTop: '180px', marginLeft: '750px', fontSize: '20px' }}
        >
          {error}
        </p>
      </WrapperCard>
    );
  }

  if (isLoading) {
    content = (
      <div style={{ marginTop: '180px', marginLeft: '750px' }}>
        <CircularProgress
          size="10rem"
          thickness={2}
          sx={{ color: '#aebdca' }}
        />
      </div>
    );
  }

  return (
    <>
      <Header />
      <PageWrapper>{content}</PageWrapper>
    </>
  );
};

export default UserProfile;
