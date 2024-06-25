import styled from 'styled-components';
import { primary } from '../utils/colors';

const ClipboardAccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
`;

const Topic = styled.span`
  color: ${primary};
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
  border: 1px solid ${primary};
  color: ${primary};
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

const ClipboardAccess = () => {
  return (
    <ClipboardAccessContainer>
      <Topic>CLIPBOARD ACCESS</Topic>
      <ButtonContainer>
        <Button>COPY</Button>
        <Button>PASTE</Button>
      </ButtonContainer>
    </ClipboardAccessContainer>
  );
};

export default ClipboardAccess;