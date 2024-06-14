import { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  color: #c6f7d3;
  font-family: monospace;
  border-top: 1px solid #c6f7d3;
  width: 100%;
`;

const Topic = styled.span`
  color: #c6f7d3;
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
  color: #c6f7d3;
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
          color: Math.random() < 0.5 ? '#c6f7d3' : 'grey',
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
          newColors[`${rowIndex},${cellIndex}`] = Math.random() < 0.5 ? '#c6f7d3' : 'grey';
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