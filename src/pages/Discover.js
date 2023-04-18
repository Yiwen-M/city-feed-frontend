import { useState, useEffect, useContext, useMemo } from 'react';

import { GET_FEED_URL, GET_USER_FEED_LIST_URL, API_KEY } from '../keys';
import { AuthContext, AuthStatus } from '../contexts/AuthContext';

import Header from '../components/UI/Header/Header';
import PageWrapper from '../components/UI/PageWrapper/PageWrapper';
import FeedCard from '../components/UI/FeedCard/FeedCard';
import WrapperCard from '../components/UI/WrapperCard/WrapperCard';
import { CardStyled } from '../components/UI/FeedCard/FeedCardStyles';

import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Skeleton from '@mui/material/Skeleton';

const Discover = () => {
  const [feedList, setFeedList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const authContext = useContext(AuthContext);
  const { authStatus, getSession } = authContext;

  const DEFAULT_GET_FEED_LIST_PARAMS = useMemo(
    () => ({ region: 'seattle' }),
    []
  );

  useEffect(() => {
    const getFeedListHandler = async () => {
      setIsLoading(true);
      setError(null);
      let response = '';
      if (authStatus !== AuthStatus.SignedIn) {
        response = await fetch(
          GET_FEED_URL +
            new URLSearchParams(DEFAULT_GET_FEED_LIST_PARAMS).toString(),
          {
            method: 'GET',
            headers: { 'x-api-key': API_KEY },
          }
        );
      } else {
        console.log(`authStatus: ----`, authStatus);
        const tokenSession = await getSession();
        const token = tokenSession.idToken.jwtToken;
        console.log(`idToken: ----`, token);
        response = await fetch(
          GET_USER_FEED_LIST_URL +
            new URLSearchParams(DEFAULT_GET_FEED_LIST_PARAMS).toString(),
          {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${token}`,
              'x-api-key': API_KEY,
            },
          }
        );
      }
      if (!response.ok) {
        throw new Error('Something went wrong, please refresh the page!');
      }
      const data = await response.json();
      data.feedList.forEach((feed) => {
        if (feed.region === 'seattle') {
          feed.region = 'Seattle';
        } else if (feed.region === 'losangeles') {
          feed.region = 'Los Angeles';
        }
      });
      setFeedList(data.feedList);
      setIsLoading(false);
    };
    getFeedListHandler().catch((err) => setError(err.message));
  }, [authStatus, getSession, DEFAULT_GET_FEED_LIST_PARAMS]);

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
