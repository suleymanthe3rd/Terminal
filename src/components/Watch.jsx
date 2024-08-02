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
    primarycolor={getValue('primary')}
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
  color: ${(props)=>props.primarycolor};
  font-weight: bold;
  border-top: 1px solid ${(props)=>props.primarycolor};
  border-bottom: 1px solid ${(props)=>props.primarycolor};
  width: 20rem;
`;

export default Watch;