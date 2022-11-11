import Header from '../components/UI/Header/Header';
import PageWrapper from '../components/UI/PageWrapper/PageWrapper';
import FeedCard from '../components/UI/FeedCard/FeedCard';
import CreateButton from '../components/UI/CreateButton/CreateButton';

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
              image={feed.media[0].imgUrl}
              region={feed.region}
              date={new Date(feed.timestamp).toLocaleDateString("en-US")}
              content={feed.content}
            />
          );
        })}
        <CreateButton />
      </PageWrapper>
    </>
  );
};

export default Discover;
