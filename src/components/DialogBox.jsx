/* eslint-disable no-unused-vars */
import { useState, useContext, useEffect } from 'react';
import { UniversalContext } from '../context/UniversalContext';
import styled from 'styled-components';

const DialogBox = () => {
  const { getValue, setValue } = useContext(UniversalContext);
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
        <DialogBoxContainer primarycolor={getValue('primary')} backgroundcolor={getValue('background')} 
                            style={{
                              position: 'fixed',
                              top: '50%',
                              left: '50%',
                              transform: 'translate(-50%, -50%)',
                              zIndex: 2,
                            }}
        >
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
      )}
    </div>
  );
};

//styles
const DialogBoxContainer = styled.div`
  padding: 0.4rem;
  width: 60%;
  margin: 2rem;
  clip-path: polygon(0 0, 88% 0, 100% 24%, 100% 100%, 10% 100%, 0 78%);
  display: flex;
  flex-direction: column; 
  align-items: center; 
  justify-content: center; 
  text-align: center; 
  z-index: 10;
  background-color:${props=>props.primarycolor};
  &::before {
    content: "";
    background-color: ${props=>props.backgroundcolor};
    inset: 2px;
    position: absolute;
    z-index: -11;
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