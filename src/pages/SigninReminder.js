import { useNavigate } from 'react-router-dom';

import backgroundImage from '../assets/backgroundImage.jpeg';

const SignInReminder = () => {
  let navigate = useNavigate();

  const btnRouteHandler = () => {
    let path = '/signin';
    navigate(path);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100vw',
        opacity: 0.5,
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          position: 'absolute',
          top: '40%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontFamily: 'Andale Mono',
          fontSize: '16px',
        }}
      >
        <p>It looks like you're not logged in.</p>
        <p>Please log in to access this page</p>
        <p>and continue your journey with us.</p>

        <button
          onClick={btnRouteHandler}
          style={{
            height: '60px',
            width: '330px',
            border: 'none',
            background: 'rgba(96, 120, 137)',
            color: 'white',
            fontSize: '20px',
            fontFamily: 'Andale Mono',
            borderRadius: '4px',
            marginTop: '30px',
            cursor: 'pointer',
          }}
        >
          Click to Sign In
        </button>
      </div>
    </div>
  );
};

export default SignInReminder;
