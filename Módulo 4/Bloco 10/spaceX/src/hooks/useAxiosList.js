import { useState, useEffect } from "react";
import axios from "axios";

//* Hook para requisições de listas assim
//* que entrar no componente.
export const useAxiosList = (url, initialState) => {

    const [ data, setData ] = useState( initialState );
    const [ isLoading, setIsLoading ] = useState( false );
    const [ error, setError ] = useState( undefined );

    useEffect(() => {

        setIsLoading( true );

        axios.get(url)
        .then(( { data } ) => {
            setData( data.trips )
        })
        .catch((err) => {
            setError( err )
        })
        .finally(() => {
            setIsLoading( false )
        });
        
    }, [url]);

    return [ data, isLoading, error ];

};