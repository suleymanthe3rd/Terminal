import { useState, useEffect, useContext } from 'react';
import Dashboard from "./pages/Dashboard";
import Logo from "./components/Logo";
import BootAnimation from "./components/BootAnimation";
import { UniversalProvider, UniversalContext } from './context/UniversalContext';
import getThemesData from './utils/themeReader';
import overrideConsoleWarn from './hooks/overrideConsoleWarn'

function App() {
  const [appState, setAppState] = useState('loading'); // Initial app state
  const { setValue, getValue } = useContext(UniversalContext);
  overrideConsoleWarn();
  
  const setTheme = (themeData) => {
    if(localStorage.getItem('selectedTheme')){
      const theme = localStorage.getItem('selectedTheme');
      setValue('selectedTheme', theme);
      setValue('primary', themeData[theme]['primarycolor']);
      setValue('secondary', themeData[theme]['secondaryColor']);
      setValue('background', themeData[theme]['backgroundcolor']);
    }else{
      localStorage.setItem('selectedTheme','apollo');
      setValue('primary', themeData['apollo']['primarycolor']);
      setValue('secondary', themeData['apollo']['secondaryColor']);
      setValue('background', themeData['apollo']['backgroundcolor']);
    }
  };

  const initializeApp = async () => {
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate delay
    const themeData = getThemesData();
    setTheme(themeData);
    setValue('settingsVisible', 'false');
    setValue('dialogVisible', 'false');
    setAppState('bootAnimation');
  };

  useEffect(() => {
    initializeApp();
  }, []);

  useEffect(() => {
    if (getValue('turn on') === true) {
      const timeoutId = setTimeout(() => {
        setAppState('logo');
      }, 5000);
      return () => clearTimeout(timeoutId);
    }
  }, [getValue('turn on')]);

  useEffect(() => {
    if (appState === 'logo') {
      const timeoutId = setTimeout(() => {
        setAppState('dashboard');
      }, 4000);
      return () => clearTimeout(timeoutId);
    }
  }, [appState]);

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