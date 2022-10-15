import Header from '../components/UI/Header/Header';
import PageWrapper from '../components/UI/PageWrapper/PageWrapper';
import PostCard from '../components/UI/Card/Card'
import CreateButton from '../components/UI/CreateButton/CreateButton';

const Following = () => {
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

export default Following;
