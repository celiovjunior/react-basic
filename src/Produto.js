import React from 'react';

const Produto = ({produto}) => {
    const [dados, setDados] = React.useState(null);

    React.useEffect(() => {
        if(produto !== null)
        fetch(`https://ranekapi.origamid.dev/json/api/produto/${produto}`)
        .then(r => r.json())
        .then((json) => setDados(json))
    }, [])

    if(dados === null) return null;
    return <div>
        <h1>{dados.nome}</h1>
        <p>{dados.preco}</p>
    </div>
}

export default Produto;