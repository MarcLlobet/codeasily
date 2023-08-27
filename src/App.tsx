import React, { useEffect } from 'react';
import './App.css';
import { useVariables } from './context/variables';
import { operators } from './operators';

function App() {
  const [variables, setVariables] = useVariables()

  useEffect(() => {
    setVariables({UN: 1, DOS: 2, TRES: 3, SEGON_TRES: 3})
  }, []) // eslint-disable-line react-hooks/exhaustive-deps
    
  return (
    <div>{JSON.stringify(variables)}</div>
  );
}

export default App;
