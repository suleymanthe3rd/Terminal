import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder, faCog } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { useState, useContext } from "react";
import { UniversalContext } from "../context/UniversalContext";

const FolderComponent = () => {
  const { getValue,setValue } = useContext(UniversalContext);
  const folders = [
    { icon: faFolder, label: "Cache" },
    { icon: faFolder, label: "GPUCache" },
    { icon: faFolder, label: "LocalStorage" },
    { icon: faFolder, label: "blob_storage" },
    { icon: faFolder, label: "fonts" },
    { icon: faFolder, label: "keyboards" },
    { icon: faFolder, label: "themes" },
    { icon: faFolder, label: "Cookies" },
    { icon: faFolder, label: "Cookies.journal" },
    { icon: faFolder, label: "FraMonoFor..." },
    { icon: faFolder, label: "Preferences" },
    { icon: faCog, label: "settings.json" },
  ];

  const [selectedFolder, setSelectedFolder] = useState(null);

  const handleFolderClick = (folder) => {
    setSelectedFolder(folder);
  };

  const handleSystemClick = () => {
    setValue('settingsVisible', 'true');
  };

  return (
    <FolderContainer>
      <HeaderRow>
        <FileSystemLabel style={{ color: getValue("primary") }}>
          FILESYSTEM
        </FileSystemLabel>
        {selectedFolder && (
          <FolderPath style={{ color: getValue("primary") }}>
            b3/wallet/{selectedFolder.label}
          </FolderPath>
        )}
      </HeaderRow>
      <HorizontalLine style={{ borderColor: getValue("primary") }} />
      <FolderGrid>
        {folders.map((folder, index) => (
          <FolderItem
            key={index}
            onClick={
              folder.icon === faCog
                ? handleSystemClick
                : () => handleFolderClick(folder)
            }
          >
            <FontAwesomeIcon
              icon={folder.icon}
              style={{ color: getValue("primary") }}
            />
            <FolderLabel style={{ color: getValue("primary") }}>
              {folder.label}
            </FolderLabel>
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
  border-bottom: 1px solid;
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
`;

const FileSystemLabel = styled.div`
  font-size: 12px;
`;

const FolderPath = styled.div`
  font-size: 12px;
`;

export default FolderComponent;
