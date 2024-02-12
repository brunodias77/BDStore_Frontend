import { Category } from "@/types";
import GetCatoriesStatic from "@/actions/Static/GetCategoriesStatic";

// Função para obter as categorias
export default function getCategory(category_id: string): Category | undefined {
    const categories = GetCatoriesStatic();
    const category = categories.find((item) => item.id === category_id);

    return category;
}