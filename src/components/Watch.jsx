import { useState, useEffect,useContext } from 'react';
import styled from 'styled-components';
import { UniversalContext } from '../context/UniversalContext';


const Watch = () => {
  const { getValue } = useContext(UniversalContext);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formattedTime = time.toLocaleTimeString('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false, // Add this to display 24-hour clock
  });

  return (
    <WatchContainer
    primaryColor={getValue('primary')}
    >
      {formattedTime}
    </WatchContainer>
  );
};

//styles
const WatchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Courier New', Courier, monospace;
  font-size: 3em;
  color: ${(props)=>props.primaryColor};
  font-weight: bold;
  border-top: 1px solid ${(props)=>props.primaryColor};
  border-bottom: 1px solid ${(props)=>props.primaryColor};
  width: 100%;
`;

export default Watch;