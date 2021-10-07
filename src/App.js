import React from 'react';

const App = () => {
  const [comentarios, setComentarios] = React.useState(['teste', 'teste 2']);

  const [input, setInput] = React.useState('teste');

  return <div>
    <ul>
      {comentarios.map(comentario => <li key={comentario}>{ comentario }</li>)}
      <input type="text" value={input} onChange={({target}) => setInput(target.value)}/>
    </ul>
  </div>
}
export default App;