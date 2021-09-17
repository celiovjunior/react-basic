import React from 'react';


const App = () => {
  const [contar, setContar] = React.useState(0);
  
  const [dados, setDados] = React.useState(null);

  React.useEffect(() => {
    fetch(`https://ranekapi.origamid.dev/json/api/produto/notebook`)
    .then((response) => response.json())
    .then((json) => setDados(json))
  }, [])

  return (
    <div>
      {dados && (<div>
        <h1>{dados.nome}</h1>
        <p>{dados.preco}</p>
      </div>)}
    </div>
  )
}
export default App;