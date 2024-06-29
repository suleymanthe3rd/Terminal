import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { primary } from '../utils/colors';


const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: transparent;
  overflow: hidden;
`;

const MatrixText = styled.div`
  font-size: 8px;
  font-weight: bold;
  font-family: 'monospace';
  color: ${primary};
  display: flex; /* Make MatrixText a flex container */
`;

const Column = styled.div`
  display: flex;
  flex-direction: column; 
  gap: 1px; 
  margin-right: 10px;
`;

const Char = styled.span`
  ${({ opacity }) => `
    opacity: ${opacity};
  `}
`;

const MatrixRain = () => {
  const [matrix, setMatrix] = useState([]);
  const rows = 80;
  const cols = 80;
  const animationRef = useRef(null);
  const delayRef = useRef(50); // initial delay

  useEffect(() => {
    setMatrix(
      Array.from({ length: cols }, () => 
        Array.from({ length: rows }, () => ({ char: ' ', opacity: 0 })) // Initialize with space characters and 0 opacity
      )
    );
  }, []);

  useEffect(() => {
    animationRef.current = requestAnimationFrame(updateMatrix);
    return () => cancelAnimationFrame(animationRef.current);
  }, []);

  const updateMatrix = () => {
    setMatrix((prevMatrix) =>
      prevMatrix.map((column) => {
        const newColumn = [...column];
        newColumn.pop(); 
        newColumn.unshift({ char: randomChar(), opacity: randomOpacity() }); 
        return newColumn;
      })
    );
    delayRef.current = Math.random() * 200 + 20; 
    animationRef.current = setTimeout(() => requestAnimationFrame(updateMatrix), delayRef.current);
  };

  const randomChar = () =>
    String.fromCharCode(Math.floor(Math.random() * 94) + 33);

  const randomOpacity = () => {
    const opacity = Math.random();
    return opacity < 0.2 ? 0.2 : 0.6; 
  };

  return (
    <Container>
      <MatrixText>
        {matrix.map((column, colIndex) => ( // Render each column
          <Column key={colIndex}>
            {column.map((char, rowIndex) => (
              <Char key={rowIndex} opacity={char.opacity}>{char.char}</Char>
            ))}
          </Column>
        ))}
      </MatrixText>
    </Container>
  );
};

export default MatrixRain;