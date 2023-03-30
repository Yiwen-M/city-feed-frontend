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
  color: 'grey',
};

const inputStyle = {
  width: '100%',
  marginBottom: '30px',
  marginTop: '5px',
  paddingLeft: '15px',
};

const buttonStyle = {
  backgroundColor: '#869EB2',
  marginLeft: '130px',
  marginTop: '20px',
};

export { rootStyle, cardStyle, titleStyle, inputStyle, buttonStyle };
