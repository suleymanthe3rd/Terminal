import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { primary } from '../utils/colors';

const KeyboardKey = styled.button`
  background-color: transparent;
  color: ${primary};
  border: 1px solid ${primary};
  border-radius: 5px;
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
  padding-right: 2rem;
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

function QwertyKeyboard() {
  return (
    <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div className="keyboard-container" >
        <div className="keyboard" style={{ position: 'relative', maxWidth: 'fit-content', minWidth: 'fit-content' }}>
          <KeyboardRow>
            <KeyboardKey>ESC</KeyboardKey>
            <KeyboardKey>~</KeyboardKey>
            <KeyboardKey>1</KeyboardKey>
            <KeyboardKey>2</KeyboardKey>
            <KeyboardKey>3</KeyboardKey>
            <KeyboardKey>4</KeyboardKey>
            <KeyboardKey>6</KeyboardKey>
            <KeyboardKey>7</KeyboardKey>
            <KeyboardKey>8</KeyboardKey>
            <KeyboardKey>9</KeyboardKey>
            <KeyboardKey>0</KeyboardKey>
            <KeyboardKey>-</KeyboardKey>
            <KeyboardKey>=</KeyboardKey>
            <KeyboardKey>BACK</KeyboardKey>
          </KeyboardRow>
          <KeyboardRow>
            <KeyboardKey>TAB</KeyboardKey>
            <KeyboardKey>Q</KeyboardKey>
            <KeyboardKey>W</KeyboardKey>
            <KeyboardKey>E</KeyboardKey>
            <KeyboardKey>R</KeyboardKey>
            <KeyboardKey>T</KeyboardKey>
            <KeyboardKey>Y</KeyboardKey>
            <KeyboardKey>U</KeyboardKey>
            <KeyboardKey>I</KeyboardKey>
            <KeyboardKey>O</KeyboardKey>
            <KeyboardKey>P</KeyboardKey>
            <KeyboardKey>[</KeyboardKey>
            <KeyboardKey>]</KeyboardKey>
            <KeyboardKey>ENTER</KeyboardKey>
          </KeyboardRow>
          <KeyboardRow>
            <KeyboardKey>CAPS</KeyboardKey>
            <KeyboardKey>A</KeyboardKey>
            <KeyboardKey>S</KeyboardKey>
            <KeyboardKey>D</KeyboardKey>
            <KeyboardKey>F</KeyboardKey>
            <KeyboardKey>G</KeyboardKey>
            <KeyboardKey>H</KeyboardKey>
            <KeyboardKey>J</KeyboardKey>
            <KeyboardKey>K</KeyboardKey>
            <KeyboardKey>L</KeyboardKey>
            <KeyboardKey>;</KeyboardKey>
            <KeyboardKey>&apos;</KeyboardKey>
            <KeyboardKey>\</KeyboardKey>
          </KeyboardRow>
          <KeyboardRow style={{ paddingRight: '6rem' }}>
            <KeyboardKey >SHIFT</KeyboardKey>
            <KeyboardKey>&lt;</KeyboardKey>
            <KeyboardKey>Z</KeyboardKey>
            <KeyboardKey>X</KeyboardKey>
            <KeyboardKey>C</KeyboardKey>
            <KeyboardKey>V</KeyboardKey>
            <KeyboardKey>B</KeyboardKey>
            <KeyboardKey>N</KeyboardKey>
            <KeyboardKey>M</KeyboardKey>
            <KeyboardKey>,</KeyboardKey>
            <KeyboardKey>.</KeyboardKey>
            <KeyboardKey>/</KeyboardKey>
            <KeyboardKey >SHIFT</KeyboardKey>
          </KeyboardRow>
          <KeyboardRow >
            <KeyboardKey >CTRL</KeyboardKey>
            <KeyboardKey>FN</KeyboardKey>
            <KeyboardKey style={{ width: '150px' }}>SPACE</KeyboardKey>
            <KeyboardKey>ALT GR</KeyboardKey>
            <KeyboardKey>CTRL</KeyboardKey>
          </KeyboardRow>

          <ArrowKeyContainer>
            <ArrowKeyRow>
              <KeyboardKey><FontAwesomeIcon icon={faArrowUp} /></KeyboardKey>
            </ArrowKeyRow>
            <ArrowKeyRow>
              <KeyboardKey><FontAwesomeIcon icon={faArrowLeft} /></KeyboardKey>
              <KeyboardKey><FontAwesomeIcon icon={faArrowDown} /></KeyboardKey>
              <KeyboardKey><FontAwesomeIcon icon={faArrowRight} /></KeyboardKey>
            </ArrowKeyRow>
          </ArrowKeyContainer>
        </div>
      </div>
    </div>
  );
}

export default QwertyKeyboard;