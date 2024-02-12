import { Color } from "@/types";

const GetColorsStatic = (): Color[] => {
    const colors: Color[] = [
        { id: '1', name: 'Vermelho', value: '#FF0000' },
        { id: '2', name: 'Verde', value: '#008000' },
        { id: '3', name: 'Azul', value: '#0000FF' },
        { id: '4', name: 'Amarelo', value: '#FFFF00' },
        { id: '5', name: 'Preto', value: '#000000' },
    ];
    return colors;
};

export default GetColorsStatic;