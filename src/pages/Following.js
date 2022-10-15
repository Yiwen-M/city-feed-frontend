import Header from '../components/UI/Header/Header';
import PageWrapper from '../components/UI/PageWrapper/PageWrapper';

const Following = () => {
  return (
    <>
      <Header />
      <PageWrapper>
        <h1 style={{ marginTop: '200px', marginLeft: '500px' }}>
          posts posted by followed user will be here{' '}
        </h1>
      </PageWrapper>
    </>
  );
};

export default Following;
