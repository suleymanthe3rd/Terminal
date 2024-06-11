import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder, faCog } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const FolderComponent = () => {
  const folders = [
    { icon: faFolder, label: 'Cache' },
    { icon: faFolder, label: 'GPUCache' },
    { icon: faFolder, label: 'LocalStorage' },
    { icon: faFolder, label: 'blob_storage' },
    { icon: faFolder, label: 'fonts' },
    { icon: faFolder, label: 'keyboards' },
    { icon: faFolder, label: 'themes' },
    { icon: faFolder, label: 'Cookies' },
    { icon: faFolder, label: 'Cookies.journal' },
    { icon: faFolder, label: 'FraMonoFor...' },
    { icon: faFolder, label: 'Preferences' },
    { icon: faCog, label: 'settings.json' },
  ];

  return (
    <FolderContainer>
      {folders.map((folder, index) => (
        <FolderItem key={index}>
          <FontAwesomeIcon icon={folder.icon} style={{ color: '#c6f7d3' }} />
          <FolderLabel style={{ color: '#c6f7d3' }}>{folder.label}</FolderLabel>
        </FolderItem>
      ))}
    </FolderContainer>
  );
};

const FolderContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  padding: 5px;
  max-width: 100%;
`;

const FolderItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60px;
  height: 80px;
  border: none;
  border-radius: 5px;
  margin: 10px;
  outline: none;
  font-size: 24px;
  cursor: pointer;

`;

const FolderLabel = styled.div`
  font-size: 10px;
  margin-top: 5px;
`;

export default FolderComponent;