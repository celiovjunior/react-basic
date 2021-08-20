import React from 'react';

const App = () => {
  let ativo = true;

  function handleClick () {
    ativo = !ativo;
    console.log(ativo)
  }

  return <button onClick={handleClick} className="ativo">
    {ativo ? 'Ativado' : 'Desativado'}
  </button>
}

export default App;