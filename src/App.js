import React from 'react';

const formFields = [
  {
    id: 'nome',
    label: 'Nome',
    type: 'text'
  },
  {
    id: 'email',
    label: 'Email',
    type: 'email'
  },
  {
    id: 'senha',
    label: 'Senha',
    type: 'password'
  },
  {
    id: 'cep',
    label: 'CEP',
    type: 'text'
  },
  {
    id: 'rua',
    label: 'Rua',
    type: 'text'
  },
  {
    id: 'bairro',
    label: 'Bairro',
    type: 'text'
  },
  {
    id: 'idade',
    label: 'Idade',
    type: 'text'
  },
  {
    id: 'estado',
    label: 'Estado',
    type: 'text'
  },
]

const App = () => {
  const [form, setForm] = React.useState({
    nome: '',
    email: '',
    senha: '',
    cep: '',
    rua: '',
    bairro: '',
    idade: '',
    estado: '',
  });

  function handleChange({target}) {
    const {id, value} = target
    setForm({...form, [id]: value})
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetch('https://raneki.origamid.dev/json/api/usuario', {
      method: 'POST',
      headers: {
        'Content-Type':'application/json'
      }
    })
  }

  return <form onSubmit={handleSubmit}>
    {formFields.map(({id, label, type}) => <div key={id}>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id}  value={form[id]} onChange={handleChange}/>
    </div>)}
    <button>Enviar</button>
    
    </form>
}

export default App;