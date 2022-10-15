import Header from '../components/UI/Header/Header';
import PageWrapper from '../components/UI/PageWrapper/PageWrapper';

const NotFound = () => {
  return (
    <>
      <Header />
      <PageWrapper>
        <h1 style={{ marginTop: '200px', marginLeft: '500px' }}>
          Page not found!{' '}
        </h1>
      </PageWrapper>
    </>
  );
};

export default NotFound;
