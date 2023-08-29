import React, { useEffect } from 'react';
import { useVariables } from './context/variables';
// import { operators } from './operators';
import { Layout } from './components/layout';

function App() {
  const [variables, setVariables] = useVariables()

  useEffect(() => {
    setVariables({UN: 1, DOS: 2, TRES: 3, SEGON_TRES: 3})
  }, []) // eslint-disable-line react-hooks/exhaustive-deps
    
  return (
    <Layout.Main>
      <Layout.Header>Codeasily</Layout.Header>
      <Layout.Sidebar>Sidebar</Layout.Sidebar>
      <Layout.Body><div>{JSON.stringify(variables)}</div></Layout.Body>
      <Layout.Footer>Footer</Layout.Footer>
    </Layout.Main>
  );
}

export default App;
