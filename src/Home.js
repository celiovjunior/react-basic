import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return(
        <div>
            <h1>Homepage</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati rerum inventore quibusdam molestias, magnam sed, saepe tempora harum nam facilis aut numquam non adipisci enim quaerat consectetur culpa, consequatur ab.</p>
            <Link to="produto/notebook">Notebook</Link> {' '}
            <Link to="produto/tablet">Tablet</Link>
        </div>
    )
};

export default Home;