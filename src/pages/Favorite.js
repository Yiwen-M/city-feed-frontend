import Header from '../components/UI/Header/Header';
import PageWrapper from '../components/UI/PageWrapper/PageWrapper';
import FeedCard from '../components/UI/Card/Card';
import CreateButton from '../components/UI/CreateButton/CreateButton';

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
              image={feed.media[0].imgUrl}
              region={feed.region}
              date={new Date(feed.timestamp).toLocaleDateString('en-US')}
              content={feed.content}
            />
          );
        })}

        <CreateButton />
      </PageWrapper>
    </>
  );
};

export default Favorite;
