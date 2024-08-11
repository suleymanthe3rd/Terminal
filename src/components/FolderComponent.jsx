import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder, faCog, faArrowLeft, faFile } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { useState, useContext, useMemo, useEffect } from "react";
import { UniversalContext } from "../context/UniversalContext";

const FolderComponent = () => {
  const { getValue, setValue } = useContext(UniversalContext);
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
  const [currentPath, setCurrentPath] = useState([]);
  const [folderStructure, setFolderStructure] = useState({});

  const generateFolderStructure = () => {
    const structure = {};
    folders.forEach((folder) => {
      structure[folder.label] = {
        subFolders: Array(12).fill(0).map((_, index) => ({
          icon: faFolder,
          label: `${folder.label} Subfolder ${index + 1}`,
          size: `${Math.floor(Math.random() * 100)} KB`,
          date: `2022-01-01`,
        })),
        files: Array(12).fill(0).map((_, index) => ({
          icon: faFile,
          label: `${folder.label} File ${index + 1}`,
          size: `${Math.floor(Math.random() * 100)} KB`,
          date: `2022-01-01`,
        })),
      };
    });
    return structure;
  };

  const folderStructureMemo = useMemo(generateFolderStructure, []);

  useEffect(() => {
    setFolderStructure(folderStructureMemo);
  }, [folderStructureMemo]);

  const handleFolderClick = (folder) => {
    const newPath = [...currentPath, folder.label];
    setCurrentPath(newPath);
    setSelectedFolder(folder);
  };

  const handleBackClick = () => {
    const newPath = currentPath.slice(0, -1);
    setCurrentPath(newPath);
    setSelectedFolder(null);
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
        {currentPath.length > 0 && (
          <FolderPath style={{ color: getValue("primary") }}>
            {currentPath.join(" / ")}
          </FolderPath>
        )}
      </HeaderRow>
      <HorizontalLine style={{ borderColor: getValue("primary") }} />
      {currentPath.length > 0 && (
        <BackButton onClick={handleBackClick}>
          <FontAwesomeIcon icon={faArrowLeft} style={{ color: getValue("primary") }} />
          <FolderLabel style={{ color: getValue("primary") }}>Back</FolderLabel>
        </BackButton>
      )}
      {selectedFolder ? (
        <FolderList primarycolor={getValue('primary')}>
          {folderStructure[selectedFolder.label].subFolders.map((subFolder, index) => (
            <FolderListItem key={index}>
              <FontAwesomeIcon icon={subFolder.icon} style={{ color: getValue("primary") }} />
              <FolderLabel style={{ color: getValue("primary") }}>{subFolder.label}</FolderLabel>
              <FileSize style={{ color: getValue("primary") }}>{subFolder.size}</FileSize>
              <FileDate style={{ color: getValue("primary") }}>{subFolder.date}</FileDate>
            </FolderListItem>
          ))}
          {folderStructure[selectedFolder.label].files.map((file, index) => (
            <FolderListItem key={index}>
              <FontAwesomeIcon icon={file.icon} style={{ color: getValue("primary") }} />
              <FolderLabel style={{ color: getValue("primary") }}>{file.label}</FolderLabel>
              <FileSize style={{ color: getValue("primary") }}>{file.size}</FileSize>
              <FileDate style={{ color: getValue("primary") }}>{file.date}</FileDate>
            </FolderListItem>
          ))}
        </FolderList>
      ) : (
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
      )}
    </FolderContainer>
  );
};

const FolderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  padding: 5px;
  width: 35rem;
  height:16rem;
  position: relative;
   @media only screen and (max-width: 768px) {
    width: 22rem;
    height:20rem;
  }
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
  @media only screen and (max-width: 768px) {
    width: 100%;
    height:10rem;
  }
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

const FolderList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  width: 100%;
  overflow-y: auto; 
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.primarycolor};
    border-radius: 1px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #aaa;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
`;

const FolderListItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
  margin-right :0.2rem;
  justify-content: space-between;
`;

const FolderLabel = styled.div`
  font-size: 12px;
  margin-left: 10px;
`;

const FileSize = styled.div`
  font-size: 10px;
  margin-left: 10px;
`;

const FileDate = styled.div`
  font-size: 10px;
  margin-left: 10px;
`;

const BackButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;
`;

const FileSystemLabel = styled.div`
  font-size: 12px;
`;

const FolderPath = styled.div`
  font-size: 12px;
`;

export default FolderComponent;