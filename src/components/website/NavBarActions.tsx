//npm install lucide-react

"use client"
import { useEffect, useState } from "react";
import { ShoppingBag } from "lucide-react";
import Button from "@/components/Ui/Button";
import { CartIcon } from "@/components/Icons/cart-icon";
import { UserIcon } from "@/components/Icons/user-icon";
import { HeartIcon } from "@/components/Icons/heart-icon";

const NavBarActions = () => {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
    }, []);
    if (!isMounted) return null;
    return (
        <div className="ml-auto flex items-center gap-x-4">
            <Button className="flex items-center rounded-full">
                <UserIcon />
            </Button>
            <Button className="flex items-center rounded-full">
                <HeartIcon />
            </Button>
            <Button className="relative flex items-center rounded-full ">
                <CartIcon />
                <span className="absolute -bottom-1 -right-2 text-xs rounded-full h-4 w-4 text-white bg-green_300">0</span>
            </Button>
        </div>
    )
};
export default NavBarActions;