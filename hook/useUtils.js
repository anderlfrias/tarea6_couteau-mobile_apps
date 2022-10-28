import { useState } from "react";
function useUtils() {
    const [countries] = useState([
        {label: 'Republica Dominicana', value: 'dominican republic'},
        {label: 'Estados Unidos', value: 'united states'},
        {label: 'Colombia', value: 'colombia'},
        {label: 'Mexico', value: 'mexico'},
        {label: 'Venezuela', value: 'venezuela'},
        {label: 'Argentina', value: 'argentina'},
        {label: 'Chile', value: 'chile'},
        {label: 'Peru', value: 'peru'},
        {label: 'Ecuador', value: 'ecuador'},
        {label: 'Bolivia', value: 'bolivia'},
        {label: 'Paraguay', value: 'paraguay'},
        {label: 'Uruguay', value: 'uruguay'},
        {label: 'Brasil', value: 'brasil'},
        {label: 'Guatemala', value: 'guatemala'},
        {label: 'Honduras', value: 'honduras'},
        {label: 'El Salvador', value: 'el salvador'},
        {label: 'Nicaragua', value: 'nicaragua'},
        {label: 'Costa Rica', value: 'costa rica'},
        {label: 'Panama', value: 'panama'},
        {label: 'Puerto Rico', value: 'puerto rico'},
        {label: 'Jamaica', value: 'jamaica'},
        {label: 'Haiti', value: 'haiti'},
        {label: 'España', value: 'spain'},
        {label: 'Francia', value: 'france'},
        {label: 'Italia', value: 'italy'},
        {label: 'Alemania', value: 'germany'},
        {label: 'Inglaterra', value: 'england'},
        {label: 'Portugal', value: 'portugal'},
        {label: 'Grecia', value: 'greece'},
        {label: 'Rusia', value: 'russia'},
        {label: 'China', value: 'china'},
        {label: 'Japon', value: 'japan'},
        {label: 'Corea del Sur', value: 'south korea'},
        {label: 'India', value: 'india'},
        {label: 'Australia', value: 'australia'},
        {label: 'Nueva Zelanda', value: 'new zealand'},
        {label: 'Canada', value: 'canada'},
        {label: 'Suecia', value: 'sweden'},
        {label: 'Noruega', value: 'norway'},
    ]);

    return {
        countries,
    }
}

export default useUtils