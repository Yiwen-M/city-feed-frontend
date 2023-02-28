import { useNavigate } from 'react-router-dom';

import Header from '../components/UI/Header/Header';
import PageWrapper from '../components/UI/PageWrapper/PageWrapper';
import WrapperCard from '../components/UI/WrapperCard/WrapperCard';

const NotFound = () => {
  let navigate = useNavigate();

  const btnRouteHandler = () => {
    let path = '/discover';
    navigate(path);
  };

  return (
    <>
      <Header />
      <PageWrapper>
        <WrapperCard>
          <h1 style={{ marginLeft: 550, marginTop: 180 }}>404 Error</h1>
          <p style={{ marginLeft: 520 }}>This page does not exist</p>
          <button
            onClick={btnRouteHandler}
            style={{
              height: '60px',
              width: '280px',
              border: 'none',
              background: '#aebdca',
              color: 'white',
              fontSize: '20px',
              fontFamily: 'Andale Mono',
              borderRadius: '4px',
              marginTop: '30px',
              marginLeft: '500px',
              cursor: 'pointer',
            }}
          >
            return to home page
          </button>
        </WrapperCard>
      </PageWrapper>
    </>
  );
};

export default NotFound;
