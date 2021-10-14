import React from 'react';
import useLocalStorage from './useLocalStorage';
import useFetch from './useFetch';

const App = () => {
  const [produto, setProduto] = useLocalStorage('produto', '')
  const { request, data } = useFetch();

  React.useEffect(() => {
    request("https://ranekapi.origamid.dev/json/api/produto")
  }, []);

  function handleClick({target}) {
    setProduto(target.innerText)
  }


  console.log(data)

  if(data === null) return null;
  return <div>
    <p>Produto preferido: {produto}</p>
    <button onClick={handleClick}>notebook</button>
    <button onClick={handleClick}>smartphone</button>
  
    {data.map((produto) => <div key={produto.id}><h1>{produto.nome}</h1></div>)}
  </div>
};

export default App;