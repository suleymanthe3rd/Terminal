import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder, faCog } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { useState } from 'react';
import { primary } from '../utils/colors';

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

  const [selectedFolder, setSelectedFolder] = useState(null);

  const handleFolderClick = (folder) => {
    setSelectedFolder(folder);
  };

  return (
    <FolderContainer>
      <HeaderRow>
        <FileSystemLabel>FILESYSTEM</FileSystemLabel>
        {selectedFolder && (
          <FolderPath>b3/wallet/{selectedFolder.label}</FolderPath>
        )}
      </HeaderRow>
      <HorizontalLine />
      <FolderGrid>
        {folders.map((folder, index) => (
          <FolderItem key={index} onClick={() => handleFolderClick(folder)}>
            <FontAwesomeIcon icon={folder.icon} style={{ color: primary }} />
            <FolderLabel style={{ color: primary }}>{folder.label}</FolderLabel>
          </FolderItem>
        ))}
      </FolderGrid>
    </FolderContainer>
  );
};

const FolderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  padding: 5px;
  max-width: 100%;
  position: relative;
`;

const HeaderRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  width: 100%;
`;

const HorizontalLine = styled.div`
  border-bottom: 1px solid ${primary};
  width: 100%;
  margin-bottom: 10px;
`;

const FolderGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
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
  color: ${primary};
`;

const FileSystemLabel = styled.div`
  font-size: 12px;
  color: ${primary};
`;

const FolderPath = styled.div`
  font-size: 12px;
  color: ${primary};
`;

export default FolderComponent;