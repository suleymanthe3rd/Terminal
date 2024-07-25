
import { useState,useContext,useEffect  } from 'react';
import { UniversalContext } from '../context/UniversalContext';
import styled from 'styled-components';

const DialogBox = () => {
  const { getValue,setValue } = useContext(UniversalContext);
  const [isOpen, setIsOpen] = useState(getValue("dialogVisible") === "true" ? true : false);
  

  useEffect(() => {
    setIsOpen(getValue("dialogVisible") === "true" ? true : false);
    playSound();
  }, [getValue("dialogVisible")]);

  const handleCloseModal = () => {
    setIsOpen(getValue("dialogVisible") === "true" ? true : false);
    setValue("dialogVisible", "false");
  };

  const playSound = () => {
    const audio = new Audio('/audio/granted.wav');
    audio.play();
  };

  return (
    <div>
      {isOpen && (
        <ModalContainer>
          <DialogBoxContainer primaryColor={getValue('primary')} backgroundColor={getValue('background')} >
            <DialogBoxHeader
            style={{ color: getValue('primary') }}
            >
              <h2>Dialog Box Title</h2>
            </DialogBoxHeader>
            <DialogBoxBody
            style={{ color: getValue('primary') }}
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
                amet nulla auctor, vestibulum magna sed, convallis ex.
              </p>
            </DialogBoxBody>
            <DialogBoxFooter>
              <Button 
              style={{ color: getValue('primary'),
                  borderColor:getValue('primary'),
               }}
              onClick={handleCloseModal}>Cancel</Button>
              <Button
              style={{ color: getValue('primary'),
                  borderColor:getValue('primary'),
               }}
              >OK</Button>
            </DialogBoxFooter>
          </DialogBoxContainer>
        </ModalContainer>
      )}
    </div>
  );
};

//styles
const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index:2;
`;

const DialogBoxContainer = styled.div`
  position: relative;
  padding: 0.4rem;
  width: 60%;
  margin: 2rem;
  isolation: isolate;
  clip-path: polygon(0 0, 88% 0, 100% 24%, 100% 100%, 10% 100%, 0 78%);
  display: flex;
  flex-direction: column; 
  align-items: center; 
  justify-content: center; 
  text-align: center; 
  background-color:${props=>props.primaryColor};
  &::before {
    content: "";
    background-color: ${props=>props.backgroundColor};
    inset: 2px;
    position: absolute;
    z-index: -1;
    clip-path: polygon(0 0, 88% 0, 100% 24%, 100% 100%, 10% 100%, 0 78%);
  }
`;

const DialogBoxHeader = styled.div`
  padding: 10px;
`;

const DialogBoxBody = styled.div`
  padding: 20px;
`;

const DialogBoxFooter = styled.div`
  padding: 10px;
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  background-color: transparent;
  padding: 10px 20px;
  margin-right: 1rem;
  border: solid 1px;
  border-radius: 0px;
  cursor: pointer;
`;

export default DialogBox;