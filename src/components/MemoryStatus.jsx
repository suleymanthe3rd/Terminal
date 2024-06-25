import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { primary } from '../utils/colors';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  color: ${primary};
  font-family: monospace;
  border-top: 1px solid ${primary};
  width: 100%;
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

const TopicRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 1rem;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(20, 1fr);
`;

const Cell = styled.div`
  width: 4px;
  height: 4px;
  margin: 5px;
  background-color: ${({ color }) => color};
`;

const Usage = styled.span`
  font-size: 0.85rem;
  color: ${primary};
  width: 100%;
  text-align: right;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const MemoryStatus = () => {
  const [grid, setGrid] = useState([]);
  const [colors, setColors] = useState({});

  useEffect(() => {
    const newGrid = [];
    for (let i = 0; i < 20; i++) {
      newGrid.push([]);
      for (let j = 0; j < 10; j++) {
        newGrid[i].push({
          color: Math.random() < 0.5 ? primary : 'grey',
        });
      }
    }
    setGrid(newGrid);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newColors = {};
      grid.forEach((row, rowIndex) => {
        row.forEach((cell, cellIndex) => {
          newColors[`${rowIndex},${cellIndex}`] = Math.random() < 0.5 ? primary : 'grey';
        });
      });
      setColors(newColors);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [grid]);

  return (
    <Container>
      <TopicRow>
        <Topic>MEMORY STATUS</Topic>
        <Usage>using 1.5 GB of 7.5 GB</Usage>
      </TopicRow>
      <GridContainer>
        {grid.map((row, rowIndex) => (
          <div key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <Cell key={cellIndex} color={colors[`${rowIndex},${cellIndex}`]} />
            ))}
          </div>
        ))}
      </GridContainer>
    </Container>
  );
};

export default MemoryStatus;