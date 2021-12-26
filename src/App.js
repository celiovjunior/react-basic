import React from 'react';

const App = () => {
  const [form, setForm] = React.useState({
    nome: '',
    email: ''
  })


  function handleSubmit(event) {
    event.preventDefault();
    console.log(form)
  }

  function handleChange({target}) {
    const {id, value} = target
    console.log(id, value)
    setForm({
      ...form,[id]: value
    })
  }
  
  return <form onSubmit={handleSubmit}>
    <label htmlFor="nome">Nome</label>
    <input name="nome" id="nome" type="text" value={form.nome} onChange={handleChange} />
    {/* {form.nome} */}
    <label htmlFor="email">Email</label>
    <input name="email" id="email" type="email" value={form.email} onChange={handleChange} />
    {/* {form.email} */}
    <button>Enviar</button>
  </form>
}

export default App;