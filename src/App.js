import React from 'react';

const App = () => {
  const [nome, setNome] = React.useState('')
  const [email, setEmail] = React.useState('')

  function handleSubmit(event) {
    event.preventDefault();
    console.log(nome, event)
  }
  
  return <form onSubmit={handleSubmit}>
    <label htmlFor="nome">Nome</label>
    <input name="nome" id="nome" type="text" value={nome} onChange={(event) => setNome(event.target.value)} />
    <label htmlFor="email">Email</label>
    <input name="email" id="email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
    <button>Enviar</button>
  </form>
}

export default App;