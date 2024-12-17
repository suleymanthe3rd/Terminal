import { useState, useEffect,useContext } from 'react';
import styled from 'styled-components';
import { UniversalContext } from '../context/UniversalContext';

const MemoryStatus = () => {
  const [grid, setGrid] = useState([]);
  const [opacities, setOpacities] = useState({});
  const { getValue } = useContext(UniversalContext);

  useEffect(() => {
    const newGrid = [];
    for (let i = 0; i < 50; i++) {
      newGrid.push([]);
      for (let j = 0; j < 10; j++) {
        newGrid[i].push({
          opacity: 0.2,
        });
      }
    }
    setGrid(newGrid);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newOpacities = {};
      grid.forEach((row, rowIndex) => {
        row.forEach((cell, cellIndex) => {
          newOpacities[`${rowIndex},${cellIndex}`] = Math.random() < 0.2 ? 1 : 0.2;
        });
      });
      setOpacities(newOpacities);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [grid]);

  return (
    <Container
    style={{ color: getValue('primary'),
      borderColor:getValue('primary'),
     }}
    >
      <TopicRow>
        <Topic
        style={{ color: getValue('primary'),
         }}
        >MEMORY STATUS</Topic>
        <Usage
        style={{ color: getValue('primary'),
         }}
        >1.5 GB of 7.5 GB</Usage>
      </TopicRow>
      <GridContainer>
        {grid.map((row, rowIndex) => (
          <div key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <Cell 
              
              key={cellIndex} color={getValue('primary')} opacity={opacities[`${rowIndex},${cellIndex}`]} />
            ))}
          </div>
        ))}
      </GridContainer>
    </Container>
  );
};

//styles
const Container = styled.div`
  display: flex;
  border-top:solid 1px;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  font-family: monospace;
  width: 18rem;
`;

const Topic = styled.span`
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
   @media (max-width: 576px) {
   flex-direction:column;
    justify-content: center;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(50, 1fr);
`;

const Cell = styled.div`
  width: 2px;
  height: 2px;
  margin: 2px;
  background-color: ${({ color }) => color};
  opacity: ${({ opacity }) => opacity};
`;

const Usage = styled.span`
  font-size: 0.85rem;
  width: 100%;
  text-align: right;

  @media (max-width: 768px) {
    text-align: center;
  }
`;


export default MemoryStatus;