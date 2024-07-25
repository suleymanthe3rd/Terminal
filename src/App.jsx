import { useState, useEffect, useContext } from 'react';
import Dashboard from "./pages/Dashboard";
import Logo from "./components/Logo";
import BootAnimation from "./components/BootAnimation";
import { UniversalProvider, UniversalContext } from './context/UniversalContext';
import getThemesData from './utils/themeReader';

function App() {
  const [appState, setAppState] = useState('loading'); // Initial app state
  const { setValue } = useContext(UniversalContext);
  const setTheme = (themeData) => {
    if(localStorage.getItem('selectedTheme')){
      const theme =localStorage.getItem('selectedTheme');
      setValue('selectedTheme', theme);
      setValue('primary', themeData[theme]['primaryColor']);
      setValue('secondary', themeData[theme]['secondaryColor']);
      setValue('background', themeData[theme]['backgroundColor']);
    }else{
      localStorage.setItem('selectedTheme','apollo');
      setValue('primary', themeData['apollo']['primaryColor']);
      setValue('secondary', themeData['apollo']['secondaryColor']);
      setValue('background', themeData['apollo']['backgroundColor']);
    }
  };

  const initializeApp = async () => {
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate delay
    const themeData = getThemesData();
    setTheme(themeData);
    setValue('settingsVisible', 'false');
    setValue('dialogVisible', 'false');
    setAppState('bootAnimation');
    setTimeout(() => setAppState('logo'), 3000);
    setTimeout(() => setAppState('dashboard'), 7000);
  };
 
  
  useEffect(() => {
    initializeApp();
  }, []);


  return (
    <>
       {appState === 'bootAnimation' && <BootAnimation />}
      {appState === 'logo' && <Logo />}
      {appState === 'dashboard' && <Dashboard />}
    </>
  );
}

export default function WrappedApp() {
  return (
    <UniversalProvider>
      <App />
    </UniversalProvider>
  );
}