import React from 'react';

const App = () => {
  const filmes = ['filme 1', 'filme 2', 'filme 3', 'filme 4']

  return (
    <ul>
      {filmes.map((filme) => (
        <li key={filme}>{filme}</li>
      ))}
    </ul>
  )
}
export default App;