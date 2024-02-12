"use client";
import qs from "query-string"; // A biblioteca qs é uma biblioteca JavaScript que ajuda a analisar e formatar strings de consulta URL.
import Button from "@/components/Ui/Button";
import { Color, Size } from "@/types";
import { useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";


interface FilterProps {
    data: (Size | Color)[];
    name: string;
    valueKey: string;
}


const Filter: React.FC<FilterProps> = ({ data, name, valueKey }) => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const selectedValue = searchParams.get(valueKey);
    const onClick = (id: string) => {
        const current = qs.parse(searchParams.toString());
        const query = {
            ...current,
            [valueKey]: id //[valueKey]: id: Isso adiciona uma nova propriedade ao objeto com a chave valueKey e o valor id. Se uma propriedade com a chave valueKey já existir no objeto current, seu valor será substituído pelo id.
        };
        if (current[valueKey] === id) {
            query[valueKey] = null;
        }

        const url = qs.stringifyUrl(
            {
                url: window.location.href,
                query,
            },
            { skipNull: true }
        );

        router.push(url);
    };
    return (
        <div className="mb-8">
            <h3 className="text-lg font-semibold">
                {name}
            </h3>
            <hr className="my-4" />
            <div className="flex flex-wrap gap-2">
                {data.map((filter) => (
                    <div key={filter.id} className="flex items-center">
                        <Button className={cn(
                            "rounded-md text-sm text-gray-800 p-2 bg-white border border-gray-300", selectedValue === filter.id && "bg-black text-white"
                        )}
                            onClick={() => onClick(filter.id)}>
                            {filter.name}
                        </Button>
                    </div>
                ))}

            </div>

        </div>
    );
};

export default Filter;