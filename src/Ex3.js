import React from 'react';
import Header from './Ex3/Header';
import Home from './Ex3/Home';
import Produtos from './Ex3/Produtos';

const Ex3 = () => {

    let Pagina;
    const {pathname} = window.location;
    if(pathname === '/produtos') {
        Pagina = Produtos;
    } else {
        Pagina = Home;
    }

    return <section>
        <Header />
        <Pagina />
    </section>
}

export default Ex3;