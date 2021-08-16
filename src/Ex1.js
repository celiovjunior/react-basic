// import React from 'react';

// const numero = parseInt(Math.random() * 100);
// const ativo = true;

// const estiloP = {
//     color: "tomato",

// }

// const carro = {
//     marca: "Ford",
//     rodas: "4"
// }

// function mostrarNome(sobrenome){
//     return `Célio ${sobrenome}`
// }

// return <> 
//     {titulo}
//     <p className={ativo ? 'ativo' : 'null'}>Numéro aleatório {numero / 2}</p>
//     <p style={estiloP}>{mostrarNome("Viana")}</p>
    
//     <p>
//         {new Date().getFullYear()}
//     </p>
//     <p>{carro.marca}</p>
//  </>


// return (
//     // <a className="ativo" href="https://github.com/celiovjunior" title="Repositories">Meu GitHub</a>
//     <>
//         <label htmlFor="nome">Nome</label>
//         <input type="text" id="nome"/>
//     </>
// );

// const luana = {
//     cliente: 'Luana',
//     idade: 27,
//     compras: [
//       { nome: 'Notebook', preco: 'R$ 2500' },
//       { nome: 'Geladeira', preco: 'R$ 3000' },
//       { nome: 'Smartphone', preco: 'R$ 1500' },
//     ],
//     ativa: true,
//   };
  
//   const mario = {
//     cliente: 'Mario',
//     idade: 31,
//     compras: [
//       { nome: 'Notebook', preco: 'R$ 2500' },
//       { nome: 'Geladeira', preco: 'R$ 3000' },
//       { nome: 'Smartphone', preco: 'R$ 1500' },
//       { nome: 'Guitarra', preco: 'R$ 3500' },
//     ],
//     ativa: false,
//   };

//   const App = () => {
//     const dados = mario;

//     const total = dados.compras
//     .map((item) => Number(item.preco.replace('R$ ', '')))
//     .reduce((a, b) => a + b);

//     return <>
//     <h1>Dados do cliente</h1>
//     <p>Nome: {dados.cliente}</p>
//     <p>Idade: {dados.idade}</p>
//     <p>Situação: {' '}
//         <span style={{color: dados.ativa ? 'green' : 'red'}}>
//             {dados.ativa ? 'Ativa' : 'Inativa'}
//         </span>
//     </p>
    
//     <p>Total:  R$ {total}</p>
//     {total > 1000 ? <p>Gastou muito</p> : <p>Dentro do limite</p>}
//     </>;
//   };

// export default App;