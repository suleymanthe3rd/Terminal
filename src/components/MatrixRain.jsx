import { useState, useEffect, useRef ,useContext } from 'react';
import styled from 'styled-components';
import { UniversalContext } from '../context/UniversalContext';

const MatrixRain = () => {
  const { getValue } = useContext(UniversalContext);
  const [matrix, setMatrix] = useState([]);
  const rows = 80;
  const cols = 30;
  const animationRef = useRef(null);
  const delayRef = useRef(50);
  const charPool = useRef([]);
  const opacityPool = useRef([]);

  useEffect(() => {
    // Generate a pool of characters and opacities
    for (let i = 0; i < 100; i++) {
      charPool.current.push(randomChar());
      opacityPool.current.push(randomOpacity());
    }
  }, []);

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
    const updatedColumns = Math.floor(cols / 10); // Number of columns to update

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

    delayRef.current = 1;
    animationRef.current = setTimeout(
      () => requestAnimationFrame(updateMatrix),
      delayRef.current
    );
  };

  const updateColumn = (column) => {
    const newColumn = [...column];
    newColumn.pop();
    const charIndex = Math.floor(Math.random() * charPool.current.length);
    const opacityIndex = Math.floor(Math.random() * opacityPool.current.length);
    newColumn.unshift({
      char: charPool.current[charIndex],
      opacity: opacityPool.current[opacityIndex],
    });
    return newColumn;
  };

  const randomChar = () =>
    String.fromCharCode(Math.floor(Math.random() * 94) + 23);

  const randomOpacity = () => {
    const opacity = Math.random();
    return opacity < 0.6 ? 0.1 : 1;
  };

  return (
    <Container>
      <MatrixText
      >
        {matrix.map((column, colIndex) => (
          <Column key={colIndex}>
            {column.map((char, rowIndex) => (
              <Char
              style={{ color: getValue('primary') }}
              key={rowIndex} opacity={char.opacity}>
                {char.char}
              </Char>
            ))}
          </Column>
        ))}
      </MatrixText>
    </Container>
  );
};

//styles
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  overflow: hidden;
  width:100%;
`;

const MatrixText = styled.div`
  font-size: 10px;
  font-weight: bold;
  font-family: 'monospace';
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


export default MatrixRain;