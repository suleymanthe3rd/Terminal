export default function overrideConsoleWarn() {
  const originalConsoleWarn = console.warn;
  const suppressedWarnings = new Set();

  console.warn = (...args) => {
    const warningMessage = typeof args[0] === 'string' ? args[0] : '';

    if (
      warningMessage.includes('styled-components') ||
      warningMessage.includes('WebGL: INVALID_OPERATION: uniformMatrix4fv: location is not from the associated program') ||
      // Add this line to suppress the uniformMatrix3fv warning
      warningMessage.includes('WebGL: INVALID_OPERATION: uniformMatrix3fv: location is not from the associated program') 
    ) {
      if (!suppressedWarnings.has(warningMessage)) {
        suppressedWarnings.add(warningMessage);
        return;
      }
    }

    originalConsoleWarn(...args);
  };
}