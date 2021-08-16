import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Form from './Form/Form';

// const App = () => {
//   function handleScroll(event) {
//     console.log(event)
//   }
  
//   window.addEventListener('scroll', handleScroll);
  
//   return (
//     <div style={{height: '200vh'}}>
//       <button onClick={(event) => alert(event.target.innerText)}>Clique</button>
//     </div>
//   )
// }

const Titulo = ({cor, texto, children}) => {
  return <h1 style={{color: cor}}>{texto}, {children}</h1>
}

// const Teste = () => {
//   const active = false;
//   if(active) {
//     return <p>Teste...</p>;
//   } else {
//     return null
//   }
// }

// const App = () => {
//   return (
//   <>
//     <Header />
//     <Form />
//     <Footer />
//   </>
  
//   )
// }
// export default App;