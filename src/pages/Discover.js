import Header from '../components/UI/Header/Header';
import PageWrapper from '../components/UI/PageWrapper/PageWrapper';
import FeedCard from '../components/UI/FeedCard/FeedCard';

import { DUMMY_FEED_LIST } from '../components/MockData/DummyFeedList';

const Discover = () => {
  return (
    <>
      <Header />
      <PageWrapper>
        {DUMMY_FEED_LIST.map((feed) => {
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

export default Discover;
