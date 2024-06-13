import styled from 'styled-components';

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.625rem;
  width: 100%;
  padding-bottom: 0.625rem;
  border-bottom: 1px solid #c6f7d3;
`;

const SystemStatusContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: center;
  font-family: monospace;
  color: #c6f7d3;
  font-size: 0.75rem;
  position: relative;
`;

const SystemStatusItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-right: 0.625rem;
  padding-left: 0.625rem;
`;

const BoldText = styled.span`
  font-weight: bold;
  font-size: 0.85rem;
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

const SystemType = () => {
  return (
    <ColumnContainer>
      <Topic>SYSTEM UPTIME STATUS</Topic>
      <SystemStatusContainer>
        <SystemStatusItem>
          <span>2018</span> <BoldText>SEP 16</BoldText>
        </SystemStatusItem>
        <SystemStatusItem>
          <span>UPTIME</span> <BoldText>0:04:30</BoldText>
        </SystemStatusItem>
        <SystemStatusItem>
          <span>TYPE</span> <BoldText>LINUX</BoldText>
        </SystemStatusItem>
        <SystemStatusItem>
          <span>POWER</span> <BoldText>WIRED</BoldText>
        </SystemStatusItem>
      </SystemStatusContainer>
    </ColumnContainer>
  );
};

export default SystemType;