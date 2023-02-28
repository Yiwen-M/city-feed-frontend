import { useState, useEffect, useCallback } from "react";

import { GET_USER_URL, GET_FAV_LIST_URL, API_KEY } from "../keys";

import Header from "../components/UI/Header/Header";
import PageWrapper from "../components/UI/PageWrapper/PageWrapper";
import UserProfileCard from "../components/UI/UserProfileCard/UserProfileCard";
import WrapperCard from "../components/UI/WapperCard/WrapperCard";
import FeedCard from "../components/UI/FeedCard/FeedCard";
import { CardStyled } from "../components/UI/FeedCard/FeedCardStyles";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Skeleton from "@mui/material/Skeleton";

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

  const curUserId = "testUser"; //hard coded for now
  const getUserDetailParams = { userId: "testUser" };
  const getFavListParams = { userId: "testUser" };
  const curFollower = 0; //hard coded for now
  const curFollowing = 0; //hard coded for now

  const getUserDetailHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        GET_USER_URL + new URLSearchParams(getUserDetailParams).toString(),
        {
          method: "GET",
          headers: { "x-api-key": API_KEY },
        }
      );
      if (!response.ok) {
        throw new Error("Something went wrong, please refresh the page!");
      }
      const data = await response.json();
      console.log(data.userDetails);
      localStorage.setItem("avatar", data.userDetails.avatar);
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
      const response = await fetch(
        GET_FAV_LIST_URL + new URLSearchParams(getFavListParams).toString(),
        {
          method: "GET",
          headers: { "x-api-key": API_KEY },
        }
      );
      if (!response.ok) {
        throw new Error("Something went wrong, please refresh the page!");
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

  if (tabValue === 0) {
    if (userDetail) {
      pageContent = userDetail.feedList.map((feed) => {
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
  } else if (tabValue === 1) {
    if (favList) {
      pageContent = favList.map((feed) => {
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
  }

  if (error) {
    pageContent = (
      <WrapperCard>
        <p
          style={{ marginTop: "180px", marginLeft: "750px", fontSize: "20px" }}
        >
          {error}
        </p>
      </WrapperCard>
    );
  }

  if (isLoading) {
    pageContent = (
      // <div style={{ marginTop: '180px', marginLeft: '750px' }}>
      //   <CircularProgress
      //     size="10rem"
      //     thickness={2}
      //     sx={{ color: '#aebdca' }}
      //   />
      // </div>
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
      <PageWrapper>
        <UserProfileCard
          avatar={localStorage.getItem("avatar")}
          userId={curUserId}
          following={curFollowing}
          follower={curFollower}
        />
        <Tabs
          value={tabValue}
          onChange={changeTabHandler}
          TabIndicatorProps={{
            style: {
              backgroundColor: "#aebdca",
            },
          }}
          style={{ marginLeft: "600px", marginBottom: "30px" }}
          aria-label="profile page tabs"
        >
          <Tab
            disableFocusRipple
            disableRipple
            style={{ color: "#616161", width: "300px", fontSize: "15px" }}
            label="My Feeds"
          />
          <Tab
            disableFocusRipple
            disableRipple
            style={{ color: "#616161", width: "300px", fontSize: "15px" }}
            label="Favorite Feeds"
          />
        </Tabs>
        {pageContent}
      </PageWrapper>
    </>
  );
};

export default UserProfile;
