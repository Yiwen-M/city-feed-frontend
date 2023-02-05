import { useState, useEffect, useCallback } from 'react';

import { GET_FEED_URL, API_KEY } from '../keys';

import Header from '../components/UI/Header/Header';
import PageWrapper from '../components/UI/PageWrapper/PageWrapper';
import FeedCard from '../components/UI/FeedCard/FeedCard';
import WrapperCard from '../components/UI/WapperCard/WrapperCard';

import CircularProgress from '@mui/material/CircularProgress';

const Discover = () => {
  const [feedList, setFeedList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const curUserId = 'testUser'; //hard coded for now

  const getFeedListHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(GET_FEED_URL + curUserId, {
        method: 'GET',
        headers: { 'x-api-key': API_KEY },
      });
      if (!response.ok) {
        throw new Error('Something went wrong, please refresh the page!');
      }
      const data = await response.json();
      setFeedList(data.feedList);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    getFeedListHandler();
  }, [getFeedListHandler]);

  let content = (
    <div style={{ marginTop: '180px', marginLeft: '750px' }}>
      <CircularProgress size="10rem" thickness={2} sx={{ color: '#aebdca' }} />
    </div>
  );

  if (feedList.length > 0) {
    content = feedList.map((feed) => {
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
    });
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

export default Discover;
