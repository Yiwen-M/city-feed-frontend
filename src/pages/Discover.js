import { useState, useEffect, useCallback } from 'react';

import { GET_FEED_URL, API_KEY } from '../keys';

import Header from '../components/UI/Header/Header';
import PageWrapper from '../components/UI/PageWrapper/PageWrapper';
import FeedCard from '../components/UI/FeedCard/FeedCard';
import WrapperCard from '../components/UI/WapperCard/WrapperCard';
import { CardStyled } from '../components/UI/FeedCard/FeedCardStyles';

import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Skeleton from '@mui/material/Skeleton';

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
  // });

  useEffect(() => {
    getFeedListHandler();
  }, [getFeedListHandler]);

  let pageContent = (
    <CardStyled>
      <CardHeader
        avatar={
          <Skeleton
            animation="wave"
            variant="circular"
            width={40}
            height={40}
          />
        }
        title={
          <Skeleton
            animation="wave"
            height={15}
            width="25%"
            style={{ marginBottom: 8 }}
          />
        }
        subheader={<Skeleton animation="wave" height={10} width="20%" />}
      />
      <Skeleton sx={{ height: 400 }} animation="wave" variant="rectangular" />
      <CardContent>
        <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
        <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
        <Skeleton animation="wave" height={10} width="80%" />
      </CardContent>
    </CardStyled>
  );

  if (feedList.length > 0) {
    pageContent = feedList.map((feed) => {
      return (
        <FeedCard
          key={feed.feedId}
          feedId={feed.feedId}
          avatar={feed.avatar}
          title={feed.title}
          userId={feed.userId}
          media={feed.media}
          region={feed.region}
          date={new Date(parseInt(feed.timestamp)).toLocaleString()}
          content={feed.content}
          likeNum={feed.likes}
          liked={feed.liked}
          commentNum={feed.commentNum}
        />
      );
    });
  }

  if (error) {
    pageContent = (
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
    pageContent = (
      <CardStyled>
        <CardHeader
          avatar={
            <Skeleton
              animation="wave"
              variant="circular"
              width={40}
              height={40}
            />
          }
          title={
            <Skeleton
              animation="wave"
              height={15}
              width="25%"
              style={{ marginBottom: 8 }}
            />
          }
          subheader={<Skeleton animation="wave" height={10} width="20%" />}
        />
        <Skeleton sx={{ height: 400 }} animation="wave" variant="rectangular" />
        <CardContent>
          <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
          <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
          <Skeleton animation="wave" height={10} width="80%" />
        </CardContent>
      </CardStyled>
    );
  }

  return (
    <>
      <Header />
      <PageWrapper>{pageContent}</PageWrapper>
    </>
  );
};

export default Discover;
