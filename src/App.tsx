import React, { useEffect } from 'react';
import './App.css';
import { useVariables } from './context/variables';
// import { operators } from './operators';
import { Header } from './components/header';

function App() {
  const [variables, setVariables] = useVariables()

  useEffect(() => {
    setVariables({UN: 1, DOS: 2, TRES: 3, SEGON_TRES: 3})
  }, []) // eslint-disable-line react-hooks/exhaustive-deps
    
  return (
    <>
      <Header>Codeasily</Header>
      <div>{JSON.stringify(variables)}</div>
    </>
  );
}

export default App;
