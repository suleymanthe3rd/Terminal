import { useContext } from 'react';
import styled from 'styled-components';
import { UniversalContext } from '../context/UniversalContext';

const ClipboardAccess = () => {
  const { getValue,setValue } = useContext(UniversalContext);

  const handleCopy = () => {
    // Add your copy logic here
    setValue('dialogVisible', 'true');
    console.log('Copy button clicked');
  
  };

  const handlePaste = () => {
    // Add your paste logic here
    console.log('Paste button clicked');
  };


  return (
    <ClipboardAccessContainer>
      <Topic
      style={{
        color: getValue('primary'),
      }}
      >CLIPBOARD ACCESS</Topic>
      <ButtonContainer>
         <Button
         style={{
          color: getValue('primary'),
          borderColor: getValue('primary'),
        }}
         onClick={handleCopy}>COPY</Button>
        <Button 
        style={{
          color: getValue('primary'),
          borderColor: getValue('primary'),
        }}
        onClick={handlePaste}>PASTE</Button>
      </ButtonContainer>
    </ClipboardAccessContainer>
  );
};

//styles
const ClipboardAccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20rem;
  max-width: 100%;
  box-sizing: border-box;
`;

const Topic = styled.span`
  font-weight: bold;
  font-size: 0.85rem;
  width: 100%;
  text-align: left;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 100%;
`;

const Button = styled.button`
  background-color: transparent;
  border: 1px solid ;
  padding: 10px 20px;
  font-size: 14px;
  border-radius: 0px;
  cursor: pointer;
  margin: 10px;

  &:hover {
    border-color: #fff;
    color: #fff;
  }
`;

export default ClipboardAccess;