/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowLeft,
  faArrowRight,
  faArrowUp,
  faArrowDown,
} from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { UniversalContext } from '../context/UniversalContext';

// --- Styled Components ---
const StyledButton = styled.button`
  color: ${({ color }) => color};
  background-color: transparent;
  border: 1px solid;
  border-radius: 5px;
  boarder-color: ${({ color }) => color};
  padding: 5px 10px;
  margin: 5px;
  font-size: 12px;
  cursor: pointer;

  &:hover {
    border-color: #ddd;
    box-shadow: 0 0 5px #ddd;
  }

  /* Add media query for mobile view */
  @media only screen and (max-width: 768px) {
    font-size: 8px;
    padding: 3px 5px;
    margin: 2px;
  }
`;

const KeyboardRow = styled.div`
  display: flex;
  justify-content: center;
  padding-right: 3.5rem;
  /* Add media query for mobile view */
  @media only screen and (max-width: 768px) {
    margin-left: 0;
    text-align: center;
  }
`;

const ArrowKeyContainer = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  width: fit-content;
  height: fit-content;
`;

const ArrowKeyRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
// --- End Styled Components ---

// --- KeyboardKey Component ---
const KeyboardKey = ({ children, shiftKey, ...props }) => {
  const { getValue, setValue } = useContext(UniversalContext);
  const isShiftPressed = getValue('isShiftPressed');

  const playSound = () => {
    const audio = new Audio('/audio/granted.wav');
    audio.play();
  };

  const handleClick = () => {
    if (['SHIFT', 'CAPS'].includes(children)) {
      setValue('isShiftPressed', !isShiftPressed);
      setValue('keypressed', isShiftPressed && shiftKey ? shiftKey : children);
    } else {
      setValue('keypressed', isShiftPressed && shiftKey ? shiftKey : children);
    
    }

    playSound();
  };

  return (
    <StyledButton color={getValue('primary')} {...props} onClick={handleClick}>
      {/* Always check isShiftPressed when rendering */}
      {isShiftPressed && shiftKey ? shiftKey : children} 
    </StyledButton>
  );
};

// --- Keyboard Data ---
const keyboardRows = [
  [
    { key: 'ESC', shiftKey: 'ESC' },
    { key: '`', shiftKey: '~' },
    { key: '1', shiftKey: '!' },
    { key: '2', shiftKey: '@' },
    { key: '3', shiftKey: '#' },
    { key: '4', shiftKey: '$' },
    { key: '5', shiftKey: '%' },
    { key: '6', shiftKey: '^' },
    { key: '7', shiftKey: '&' },
    { key: '8', shiftKey: '*' },
    { key: '9', shiftKey: '(' },
    { key: '0', shiftKey: ')' },
    { key: '-', shiftKey: '_' },
    { key: '=', shiftKey: '+' },
    { key: 'BACK',shiftKey: 'BACK' },
  ],
  [
    { key: 'TAB',shiftKey: 'TAB'  },
    { key: 'q', shiftKey: 'Q' },
    { key: 'w', shiftKey: 'W' },
    { key: 'e', shiftKey: 'E' },
    { key: 'r', shiftKey: 'R' },
    { key: 't', shiftKey: 'T' },
    { key: 'y', shiftKey: 'Y' },
    { key: 'u', shiftKey: 'U' },
    { key: 'i', shiftKey: 'I' },
    { key: 'o', shiftKey: 'O' },
    { key: 'p', shiftKey: 'P' },
    { key: '[', shiftKey: '{' },
    { key: ']', shiftKey: '}' },
    { key: 'ENTER',shiftKey: 'ENTER' },
  ],
  [
    { key: 'CAPS' ,shiftKey: 'CAPS'},
    { key: 'a', shiftKey: 'A' },
    { key: 's', shiftKey: 'S' },
    { key: 'd', shiftKey: 'D' },
    { key: 'f', shiftKey: 'F' },
    { key: 'g', shiftKey: 'G' },
    { key: 'h', shiftKey: 'H' },
    { key: 'j', shiftKey: 'J' },
    { key: 'k', shiftKey: 'K' },
    { key: 'l', shiftKey: 'L' },
    { key: ';', shiftKey: ':' },
    { key: "'", shiftKey: '"' },
    { key: '\\', shiftKey: '|' },
  ],
  [
    { key: 'SHIFT',shiftKey: 'SHIFT' },
    { key: '<', shiftKey: '<' },
    { key: 'z', shiftKey: 'Z' },
    { key: 'x', shiftKey: 'X' },
    { key: 'c', shiftKey: 'C' },
    { key: 'v', shiftKey: 'V' },
    { key: 'b', shiftKey: 'B' },
    { key: 'n', shiftKey: 'N' },
    { key: 'm', shiftKey: 'M' },
    { key: ',', shiftKey: '<' },
    { key: '.', shiftKey: '>' },
    { key: '/', shiftKey: '?' },
    { key: 'SHIFT',shiftKey: 'SHIFT' },
  ],
  [
    { key: 'CTRL',shiftKey: 'CTRL' },
    { key: 'FN' ,shiftKey: 'FN'},
    { key: 'SPACE',shiftKey: 'SPACE', style: { width: '150px' } },
    { key: 'ALT GR',shiftKey: 'ALT GR'},
    { key: 'CTRL' ,shiftKey: 'CTRL'},
  ],
];

const arrowKeys = [
  [{ key: faArrowUp, icon: true }],
  [
    { key: faArrowLeft, icon: true },
    { key: faArrowDown, icon: true },
    { key: faArrowRight, icon: true },
  ],
];
// --- End Keyboard Data ---

// --- QwertyKeyboard Component ---
function QwertyKeyboard() {
  const { getValue } = useContext(UniversalContext);
  const isShiftPressed = getValue('isShiftPressed');

  return (
    <div
      className="container"
      style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    >
      <div className="keyboard-container">
        <div
          className="keyboard"
          style={{
            position: 'relative',
            maxWidth: 'fit-content',
            minWidth: 'fit-content',
          }}
        >
          {/* Render keyboard rows */}
          {keyboardRows.map((row, rowIndex) => (
            <KeyboardRow key={rowIndex}>
              {row.map((keyData, keyIndex) => {
                const { key, shiftKey, ...rest } = keyData;
                return (
                  <KeyboardKey
                    key={keyIndex}
                    shiftKey={shiftKey}
                    {...rest}
                  >
                    {/* Use isShiftPressed to determine label */}
                    {isShiftPressed && shiftKey ? shiftKey : key}
                  </KeyboardKey>
                );
              })}
            </KeyboardRow>
          ))}

          {/* Render arrow keys */}
          <ArrowKeyContainer>
            {arrowKeys.map((row, rowIndex) => (
              <ArrowKeyRow key={rowIndex}>
                {row.map((keyData, keyIndex) => {
                  const { key, icon, ...rest } = keyData;
                  return (
                    <KeyboardKey key={keyIndex} {...rest}>
                      {icon ? <FontAwesomeIcon icon={key} /> : key}
                    </KeyboardKey>
                  );
                })}
              </ArrowKeyRow>
            ))}
          </ArrowKeyContainer>
        </div>
      </div>
    </div>
  );
}

export default QwertyKeyboard;