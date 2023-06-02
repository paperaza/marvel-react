//Este archivo nos sirve como una peticion general a la API

import { useEffect, useState } from "react";
export default function useFetch(url, options) {
    const [result, setResult] = useState(null); //Aca guardamos el estado del resultado osea se captura el Json(objeto)
    const [loading, setLoading] = useState(true); //Aca no muetra un estado de cargando (como el circulo girando)
    const [error, setError] = useState(null); //Muestra si ocurre un error en la petición

    useEffect(() => {
        (async () => {
            try{ //Intenta lo que esta aqui y si no captura el error en el catch
                const res = await fetch (url, options);
                const json = await res.json();
                setResult(json);
                setLoading(false);
            }
            catch(err){
                setError(err);
                setLoading(false);
            }
        })();
    }, [options, url]);
    return {loading, result, error};

}
