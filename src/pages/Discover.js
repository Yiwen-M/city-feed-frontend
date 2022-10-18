import Header from '../components/UI/Header/Header';
import PageWrapper from '../components/UI/PageWrapper/PageWrapper';
import PostCard from '../components/UI/Card/Card';
import CreateButton from '../components/UI/CreateButton/CreateButton';

const Discover = () => {
  return (
    <>
      <Header />
      <PageWrapper>
        <PostCard />
        <CreateButton />
      </PageWrapper>
    </>
  );
};

export default Discover;
