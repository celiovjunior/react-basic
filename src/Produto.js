import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

const Produto = () => {
    // hook
    const params = useParams()
    // hook do caminho
    const location = useLocation()

    console.log(params)
    console.log(location)

    const search = new URLSearchParams(location.search)
    console.log(search.get('memoria'))
    
    return <div>
        <h1>{params.id}</h1>
    </div>
}

export default Produto;