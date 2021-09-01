import React, { useEffect } from 'react';
import Router from './Router';
import { loteriasConcurso, concurso } from './requests';

function App() {
  useEffect(() => {
    concurso(5534);
  }, []);
  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
