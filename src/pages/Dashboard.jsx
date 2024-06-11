import styled from 'styled-components';
import QwertyKeyboard from '../components/QwertyKeyboard';
import FolderComponent from '../components/FolderComponent';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column; 
`;

const ComponentsRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 1%; 

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center; 
  }
`;

const ComponentColumn = styled.div`
  width: 48%; 

  @media (max-width: 768px) {
    width: 100%; 
    margin-bottom: 10px; 
  }
`;

function Dashboard() {
  return (
    <AppContainer>
      <ComponentsRow>
        <ComponentColumn>
          <FolderComponent />
        </ComponentColumn>
        <ComponentColumn>
          <QwertyKeyboard />
        </ComponentColumn>
      </ComponentsRow>
    </AppContainer>
  );
}

export default Dashboard;