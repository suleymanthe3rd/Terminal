import styled from 'styled-components';
import logoImage from '../assets/logo.gif'; // Import the logo image


const Logo = () => {
  return (
    <LogoWrapper>
      <LogoInner />
    </LogoWrapper>
  );
};

//styles
const LogoWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000; 
`;

const LogoInner = styled.div`
  width: 20%;
  height: 100%;
  background-image: url(${logoImage}); /* Use the imported logo image */
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat; /* Add this line to prevent repeating */
`;


export default Logo;