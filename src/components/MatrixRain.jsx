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
  font-size: 10px;
  font-weight: bold;
  font-family: 'monospace';
  color: ${primary};
  display: flex;
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
    transition: opacity 0.2s ease-in-out;
  `}
`;

const MatrixRain = () => {
  const [matrix, setMatrix] = useState([]);
  const rows = 40;
  const cols = 20;
  const animationRef = useRef(null);
  const delayRef = useRef(50);

  useEffect(() => {
    setMatrix(
      Array.from({ length: cols }, () =>
        Array.from({ length: rows }, () => ({ char: ' ', opacity: 0 }))
      )
    );
  }, []);

  useEffect(() => {
    animationRef.current = requestAnimationFrame(updateMatrix);
    return () => cancelAnimationFrame(animationRef.current);
  }, []);

  const updateMatrix = () => {
    const updatedColumns = Math.floor(cols / 6); // Number of columns to update

    setMatrix((prevMatrix) => {
      const newMatrix = [...prevMatrix];

      // Update the specified number of columns randomly
      for (let i = 0; i < updatedColumns; i++) {
        const randomColumnIndex = Math.floor(Math.random() * cols);
        newMatrix[randomColumnIndex] = updateColumn(
          newMatrix[randomColumnIndex]
        );
      }
      return newMatrix;
    });

    delayRef.current = 10;
    animationRef.current = setTimeout(
      () => requestAnimationFrame(updateMatrix),
      delayRef.current
    );
  };

  const updateColumn = (column) => {
    const newColumn = [...column];
    newColumn.pop();
    newColumn.unshift({ char: randomChar(), opacity: randomOpacity() });
    return newColumn;
  };

  const randomChar = () =>
    String.fromCharCode(Math.floor(Math.random() * 94) + 33);

  const randomOpacity = () => {
    const opacity = Math.random();
    return opacity < 0.2 ? 0.2 : 0.8;
  };

  return (
    <Container>
      <MatrixText>
        {matrix.map((column, colIndex) => (
          <Column key={colIndex}>
            {column.map((char, rowIndex) => (
              <Char key={rowIndex} opacity={char.opacity}>
                {char.char}
              </Char>
            ))}
          </Column>
        ))}
      </MatrixText>
    </Container>
  );
};

export default MatrixRain;