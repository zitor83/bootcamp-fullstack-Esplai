import { useEffect, useState } from "react";

// Este hook personalizado se encarga de manejar el valor debounced (con retardo) de un texto de búsqueda.
// Recibe el valor actual y un delay en milisegundos, y devuelve el valor debounced que se actualiza solo después de que el usuario haya dejado de escribir por el tiempo especificado.
export function useDebounce(value: string, delay: number) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        //Iniciamos un tempoprizador.
        const timer = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        // Limpiamos el temporizador si el valor o el delay cambian antes de que se ejecute, para evitar actualizaciones innecesarias.
        return () => clearTimeout(timer);
    }, [value, delay]);// El efecto se dispara cada vez que el valor o el delay cambian, reiniciando el temporizador.

    // Devolvemos el valor debounced, que se actualizará solo después de que el usuario deje de escribir por el tiempo especificado.
    return debouncedValue;

}