"use client"
import Image from "next/image";
import IconButton from "@/components/Ui/IconButton";
import Currency from "@/components/Ui/Currency";
import { MouseEventHandler } from "react";
import { Product } from "@/types";
import { Expand, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import usePreviewModal from "@/hooks/use-preview-modal";

interface ProductCardProps {
    data: Product;
}
// const previewModal = usePreviewModal();
const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
}
const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
    const router = useRouter();
    const handleClick = () => {
        router.push(`/product/${data?.id}`);
    }
    return (
        <div onClick={handleClick} className="bg-white group cursor-pointer hover:scale-105 rounded-xl space-y-4 text-center p-3 transition hover:p-3 hover:shadow">
            {/* Images and Actions */}
            <div className="aspect-square rounded-t-md bg-gray-100 relative ">
                <Image
                    src={data.images?.[0]?.url}
                    fill
                    alt="Image"
                    className="aspect-square object-cover rounded-t-md"
                />
                <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5 ">
                    <div className="flex gap-x-6 justify-center">
                        <IconButton onClick={() => { }} icon={<Expand size={20} className="text-white" />} />
                        <IconButton onClick={() => { }} icon={<ShoppingCart size={20} className="text-white" />} />

                    </div>
                </div>
            </div>
            {/* Description */}
            <div>
                <p className="text-sm text-gray_300">
                    {data.name}
                </p>
            </div>
            {/* Price */}
            <div className="flex items-center justify-center">
                <Currency value={data?.price} />
            </div>
        </div>
    )
};
export default ProductCard;