import Header from '../components/UI/Header/Header';
import PageWrapper from '../components/UI/PageWrapper/PageWrapper';
import FeedCard from '../components/UI/FeedCard/FeedCard';

import { DUMMY_FEED_LIST } from '../components/MockData/DummyFeedList';

const Favorite = () => {
  let favoriteList = DUMMY_FEED_LIST.filter((feed) => (feed.liked === 1));
  console.log(favoriteList);

  return (
    <>
      <Header />
      <PageWrapper>
        {favoriteList.map((feed) => {
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
      </PageWrapper>
    </>
  );
};

export default Favorite;
