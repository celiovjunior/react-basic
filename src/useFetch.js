import React from 'react';

const useFetch = () => {
    const [data, setData] = React.useState(null)
    const [error, setError] = React.useState(null)
    const [loading, setLoading] = React.useState(null)

    async function request(url, options) {
        let response;
        let json;
        
        try {    
            setLoading(true)

            response = await fetch(url, options)
            json = await response.json()
            setData(json)

            setLoading(false)

        } catch (error) {
            setError('erro')
        } finally {
            setLoading(false)
            return {response, json}
        }
    }

    return {data, error, loading, request}
}

export default useFetch;