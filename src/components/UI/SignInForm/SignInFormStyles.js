import backgroundImage from '../../../assets/backgroundImage.jpeg';

const rootStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  width: '100vw',
  backgroundColor: '#f2f2f2',
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  opacity: 0.5,
};

const cardStyle = {
  width: 400,
  height: 330,
  padding: '20px',
};

const titleStyle = {
  width: '100%',
  marginBottom: '10px',
  marginLeft: '120px',
  color: 'rgba(96, 120, 137)',
};

const inputStyle = {
  width: '100%',
  marginBottom: '30px',
  marginTop: '5px',
  paddingLeft: '15px',
  color: 'rgba(96, 120, 137)',
};

const buttonStyle = {
  backgroundColor: 'rgba(96, 120, 137)',
  marginLeft: '130px',
  marginTop: '20px',
};

export { rootStyle, cardStyle, titleStyle, inputStyle, buttonStyle };
