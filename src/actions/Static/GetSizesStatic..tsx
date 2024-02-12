import { Size } from "@/types";

const GetSizesStatic = (): Size[] => {
    const sizes: Size[] = [
        { id: '1', name: 'Pequeno', value: 'P' },
        { id: '2', name: 'Médio', value: 'M' },
        { id: '3', name: 'Grande', value: 'G' },
        { id: '4', name: 'Extra Grande', value: 'EG' },
        { id: '5', name: 'Extra Extra Grande', value: 'EEG' },
    ];
    return sizes;
};
export default GetSizesStatic;