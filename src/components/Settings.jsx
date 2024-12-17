/* eslint-disable react/prop-types */
import { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { UniversalContext } from "../context/UniversalContext";
import getThemesData from '../utils/themeReader';


const TableHeader = ({ children, ...props }) => {
  const { getValue } = useContext(UniversalContext);
  return (
    <StyledTableHeader
      secondaryColor={getValue("secondary")}
      backgroundcolor={getValue("background")}
      primarycolor={getValue("primary")}
      {...props}
    >
      {children}
    </StyledTableHeader>
  );
};

const TableCell = ({ children, ...props }) => {
  const { getValue } = useContext(UniversalContext);
  return (
    <StyledTableCell
      secondaryColor={getValue("secondary")}
      primarycolor={getValue("primary")}
      {...props}
    >
      {children}
    </StyledTableCell>
  );
};

const Input = ({ children, ...props }) => {
  const { getValue } = useContext(UniversalContext);
  return (
    <StyledInput
      backgroundcolor={getValue("background")}
      secondaryColor={getValue("secondary")}
      primarycolor={getValue("primary")}
      {...props}
    >
      {children}
    </StyledInput>
  );
};

const Select = ({ children, ...props }) => {
  const { getValue } = useContext(UniversalContext);
  return (
    <StyledSelect
      backgroundcolor={getValue("background")}
      secondaryColor={getValue("secondary")}
      primarycolor={getValue("primary")}
      {...props}
    >
      {children}
    </StyledSelect>
  );
};

const Button = ({ children, ...props }) => {
  const { getValue } = useContext(UniversalContext);
  return (
    <StyledButton primarycolor={getValue("primary")} {...props}>
      {children}
    </StyledButton>
  );
};

const Settings = () => {
  const { getValue, setValue } = useContext(UniversalContext);
  const [isVisible, setIsVisible] = useState(
    getValue("settingsVisible") === "true" ? true : false
  );
  const [settings, setSettings] = useState({
    shell: "bash",
    cwd: "/home/sabya/it/.config/eDEX-UI",
    env: "undefined",
    keyboard: "en-US",
    theme: localStorage.getItem('selectedTheme'),
    termFontSize: "15",
    audio: "true",
    disableFeedbackAudio: "false",
    port: "3000",
    pingAddr: "1.1.1.1",
    monitor: "0",
    nointro: "false",
    nocursor: "false",
    iface: "wlp3s0",
    allowWindowed: "false",
    excludeThreadsFromToplist: "true",
    hideDotfiles: "false",
    fsListView: "false",
    experimentalGlobeFeatures: "false",
    experimentalFeatures: "false",
  });

  const themes = [
    "apollo",
    "blade",
    "chalkboard",
    "cyborg",
    "interstellar",
    "matrix",
    "navy",
    "nord",
    "red",
  ];

  useEffect(() => {
    setIsVisible(getValue("settingsVisible") === "true" ? true : false);
    playSound();
  }, [getValue("settingsVisible")]);

  const closeOnClick = () => {
    setIsVisible(getValue("settingsVisible") === "true" ? true : false);
    setValue("settingsVisible", "false");
  };

  const playSound = () => {
    const audio = new Audio('/audio/granted.wav');
    audio.play();
  };

  const playThemeChanged = () => {
    const audio = new Audio('/audio/theme.wav');
    audio.play();
  };

  const handleThemeChanged = (event) => {
    playThemeChanged();
    const { name, value } = event.target;
    setSettings((prevState) => ({ ...prevState, [name]: value }));
    setTheme(value);
    
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSettings((prevState) => ({ ...prevState, [name]: value }));
    
  };

  const setTheme = (theme) => {
     const themeData = getThemesData();
      localStorage.setItem('selectedTheme', theme);
      setValue('primary', themeData[theme]['primarycolor']);
      setValue('secondary', themeData[theme]['secondaryColor']);
      setValue('background', themeData[theme]['backgroundcolor']);

  };

  return (
    isVisible && (
        <SettingsContainer
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
          backgroundcolor={getValue("background")}
          primarycolor={getValue("primary")}
        >
          <HeadingContainer
            secondaryColor={getValue("secondary")}
            primarycolor={getValue("primary")}
          >
            <h1>Settings</h1>
            <h3>(v2.2.2)</h3>
          </HeadingContainer>
          <SettingsTableContainer>
            <SettingsTable primarycolor={getValue("primary")}>
              <thead>
                <tr>
                  <TableHeader>Key</TableHeader>
                  <TableHeader>Description</TableHeader>
                  <TableHeader>Value</TableHeader>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <TableCell>shell</TableCell>
                  <TableCell>
                    The program to run as a terminal emulator
                  </TableCell>
                  <TableCell>
                    <Input
                      type="text"
                      name="shell"
                      value={settings.shell}
                      onChange={handleChange}
                    />
                  </TableCell>
                </tr>
                <tr>
                  <TableCell>cwd</TableCell>
                  <TableCell>Working Directory to start in</TableCell>
                  <TableCell>
                    <Input
                      type="text"
                      name="cwd"
                      value={settings.cwd}
                      onChange={handleChange}
                    />
                  </TableCell>
                </tr>
                <tr>
                  <TableCell>env</TableCell>
                  <TableCell>Custom shell environment override</TableCell>
                  <TableCell>
                    <Input
                      type="text"
                      name="env"
                      value={settings.env}
                      onChange={handleChange}
                    />
                  </TableCell>
                </tr>
                <tr>
                  <TableCell>keyboard</TableCell>
                  <TableCell>On-screen keyboard layout code</TableCell>
                  <TableCell>
                    <Select
                      name="keyboard"
                      value={settings.keyboard}
                      onChange={handleChange}
                    >
                      <option value="en-US">en-US</option>
                      <option value="es-ES">es-ES</option>
                      {/* Add more keyboard options as needed */}
                    </Select>
                  </TableCell>
                </tr>
                <tr>
                  <TableCell>theme</TableCell>
                  <TableCell>Name of the theme to load</TableCell>
                  <TableCell>
                    <Select
                      name="theme"
                      value={settings.theme}
                      onChange={handleThemeChanged}
                    >
                      {themes.map((theme) => (
                        <option key={theme} value={theme}>
                          {theme}
                        </option>
                      ))}
                    </Select>
                  </TableCell>
                </tr>
                <tr>
                  <TableCell>termFontSize</TableCell>
                  <TableCell>Size of the terminal text in pixels</TableCell>
                  <TableCell>
                    <Input
                      type="text"
                      name="termFontSize"
                      value={settings.termFontSize}
                      onChange={handleChange}
                    />
                  </TableCell>
                </tr>
                <tr>
                  <TableCell>audio</TableCell>
                  <TableCell>Activate audio sound effects</TableCell>
                  <TableCell>
                    <Select
                      name="audio"
                      value={settings.audio}
                      onChange={handleChange}
                    >
                      <option value="true">true</option>
                      <option value="false">false</option>
                    </Select>
                  </TableCell>
                </tr>
                <tr>
                  <TableCell>disableFeedbackAudio</TableCell>
                  <TableCell>
                    Disable recurring feedback sound FX (input/output, mostly)
                  </TableCell>
                  <TableCell>
                    <Select
                      name="disableFeedbackAudio"
                      value={settings.disableFeedbackAudio}
                      onChange={handleChange}
                    >
                      <option value="true">true</option>
                      <option value="false">false</option>
                    </Select>
                  </TableCell>
                </tr>
                <tr>
                  <TableCell>port</TableCell>
                  <TableCell>
                    Local port to use for UI-shell connection
                  </TableCell>
                  <TableCell>
                    <Input
                      type="text"
                      name="port"
                      value={settings.port}
                      onChange={handleChange}
                    />
                  </TableCell>
                </tr>
                <tr>
                  <TableCell>pingAddr</TableCell>
                  <TableCell>
                    IPv4 address to test Internet connectivity
                  </TableCell>
                  <TableCell>
                    <Input
                      type="text"
                      name="pingAddr"
                      value={settings.pingAddr}
                      onChange={handleChange}
                    />
                  </TableCell>
                </tr>
                <tr>
                  <TableCell>monitor</TableCell>
                  <TableCell>
                    Which monitor to spawn the UI in (defaults to secondary
                    display)
                  </TableCell>
                  <TableCell>
                    <Input
                      type="text"
                      name="monitor"
                      value={settings.monitor}
                      onChange={handleChange}
                    />
                  </TableCell>
                </tr>
                <tr>
                  <TableCell>nointro</TableCell>
                  <TableCell>Skip the intro boot log and logo</TableCell>
                  <TableCell>
                    <Select
                      name="nointro"
                      value={settings.nointro}
                      onChange={handleChange}
                    >
                      <option value="true">true</option>
                      <option value="false">false</option>
                    </Select>
                  </TableCell>
                </tr>
                <tr>
                  <TableCell>nocursor</TableCell>
                  <TableCell>Hide the mouse cursor</TableCell>
                  <TableCell>
                    <Select
                      name="nocursor"
                      value={settings.nocursor}
                      onChange={handleChange}
                    >
                      <option value="true">true</option>
                      <option value="false">false</option>
                    </Select>
                  </TableCell>
                </tr>
                <tr>
                  <TableCell>iface</TableCell>
                  <TableCell>
                    Override the interface used for network monitoring
                  </TableCell>
                  <TableCell>
                    <Input
                      type="text"
                      name="iface"
                      value={settings.iface}
                      onChange={handleChange}
                    />
                  </TableCell>
                </tr>
                <tr>
                  <TableCell>allowWindowed</TableCell>
                  <TableCell>
                    Allow using F11 key to set the UI in windowed mode
                  </TableCell>
                  <TableCell>
                    <Select
                      name="allowWindowed"
                      value={settings.allowWindowed}
                      onChange={handleChange}
                    >
                      <option value="true">true</option>
                      <option value="false">false</option>
                    </Select>
                  </TableCell>
                </tr>
                <tr>
                  <TableCell>excludeThreadsFromToplist</TableCell>
                  <TableCell>
                    Display threads in the top processes list
                  </TableCell>
                  <TableCell>
                    <Select
                      name="excludeThreadsFromToplist"
                      value={settings.excludeThreadsFromToplist}
                      onChange={handleChange}
                    >
                      <option value="true">true</option>
                      <option value="false">false</option>
                    </Select>
                  </TableCell>
                </tr>
                <tr>
                  <TableCell>hideDotfiles</TableCell>
                  <TableCell>
                    Hide files and directories starting with a dot in file
                    display
                  </TableCell>
                  <TableCell>
                    <Select
                      name="hideDotfiles"
                      value={settings.hideDotfiles}
                      onChange={handleChange}
                    >
                      <option value="true">true</option>
                      <option value="false">false</option>
                    </Select>
                  </TableCell>
                </tr>
                <tr>
                  <TableCell>fsListView</TableCell>
                  <TableCell>
                    Show files in a more detailed list instead of an icon grid
                  </TableCell>
                  <TableCell>
                    <Select
                      name="fsListView"
                      value={settings.fsListView}
                      onChange={handleChange}
                    >
                      <option value="true">true</option>
                      <option value="false">false</option>
                    </Select>
                  </TableCell>
                </tr>
                <tr>
                  <TableCell>experimentalGlobeFeatures</TableCell>
                  <TableCell>
                    Toggle experimental features for the network globe
                  </TableCell>
                  <TableCell>
                    <Select
                      name="experimentalGlobeFeatures"
                      value={settings.experimentalGlobeFeatures}
                      onChange={handleChange}
                    >
                      <option value="true">true</option>
                      <option value="false">false</option>
                    </Select>
                  </TableCell>
                </tr>
                <tr>
                  <TableCell>experimentalFeatures</TableCell>
                  <TableCell>
                    Toggle Chrome experimental web features (DANGEROUS)
                  </TableCell>
                  <TableCell>
                    <Select
                      name="experimentalFeatures"
                      value={settings.experimentalFeatures}
                      onChange={handleChange}
                    >
                      <option value="true">true</option>
                      <option value="false">false</option>
                    </Select>
                  </TableCell>
                </tr>
              </tbody>
            </SettingsTable>
          </SettingsTableContainer>
          <ButtonContainer>
            <Button>Open in External Editor</Button>
            <Button>Save to Disk</Button>
            <Button>Reload UI</Button>
            <Button>Restart eDEX</Button>
            <Button onClick={closeOnClick}>Close</Button>
          </ButtonContainer>
        </SettingsContainer>

    )
  );
};

//styles

const SettingsContainer = styled.div`
  position: relative;
  background-color: ${(props) => props.backgroundcolor};
  font-family: monospace;
  padding: 1.25rem;
  border: 1px solid ${(props) => props.primarycolor};
  width: 50%;
  height: 80vh;

  @media (max-width: 768px) {
    max-width: 100%;
    margin: 2rem;
  }
`;

const SettingsTableContainer = styled.div`
  max-height: 60%;
  overflow-y: auto;

  /* Customize scrollbar design */
  &::-webkit-scrollbar {
    width: 8px; /* width of the scrollbar */
    height: 8px; /* height of the scrollbar */
    background-color: transparent; /* background color of the scrollbar */
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${(props) =>
      props.primarycolor}; /* color of the scrollbar thumb */
    border-radius: 10px; /* rounded corners of the scrollbar thumb */
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #aaa; /* hover color of the scrollbar thumb */
  }

  &::-webkit-scrollbar-track {
    background-color: transparent; /* background color of the scrollbar track */
  }
`;

const SettingsTable = styled.table`
  width: auto;
  border-collapse: collapse;
  border: 1px solid ${(props) => props.primarycolor};
`;

const StyledTableHeader = styled.th`
  text-align: center;
  font-weight: bold;
  padding: 0.5rem;
  background-color: ${(props) => props.primarycolor};
  border: 1px solid ${(props) => props.backgroundcolor};
  color: ${(props) => props.backgroundcolor};
  font-size: 1rem;
`;

const StyledTableCell = styled.td`
  padding: 0.5rem;
  color: ${(props) => props.primarycolor};
  border-bottom: 1px solid ${(props) => props.primarycolor};
  border-right: 1px solid ${(props) => props.primarycolor};
  &:last-child {
    border-right: none;
  }
`;

const StyledInput = styled.input`
  background-color: ${(props) => props.backgroundcolor};
  color: ${(props) => props.primarycolor};
  border: 1px solid ${(props) => props.primarycolor};
  padding: 0.33rem;
  @media (max-width: 768px) {
    /* adjust the breakpoint as needed */
    width: 90%;
  }
`;

const StyledSelect = styled.select`
  background-color: ${(props) => props.backgroundcolor};
  color: ${(props) => props.primarycolor};
  border: 1px solid ${(props) => props.primarycolor};
  padding: 0.33rem;
  width: 100%;
  outline-none;

  option:checked {
    background-color: ${(props) => props.primarycolor}; 
    color: ${(props) => props.backgroundcolor}; 
  }

  option:hover {
    background-color: #fff; 
    color: ${(props) => props.primarycolor}; 
  }
    option {
  border-radius: 0px;
}
   @media (max-width: 768px) { /* adjust the breakpoint as needed */
    width: 80%;
  }
`;

const StyledButton = styled.button`
  background-color: transparent;
  color: ${(props) => props.primarycolor};
  border: solid 1px ${(props) => props.primarycolor};
  padding: 0.5rem 1rem;
  border-radius: 0px;
  margin-right: 0.33rem;
  margin-top: 0.2rem;
  cursor: pointer;

  &:hover {
    border-color: white;
  }
  @media (max-width: 768px) {
    padding: 0.2rem 0.5rem;
  }
`;

const ButtonContainer = styled.div`
  position:absolute;
  display flex;
  bottom:1rem;
  right:1rem;
  text-align: right; 
`;

const HeadingContainer = styled.div`
  height: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;

  & h1 {
    color: ${(props) => props.primarycolor};
  }

  & h3 {
    margin-bottom: 0.2rem;
    color: ${(props) => props.primarycolor};
  }
`;

export default Settings;
