import { cn } from "@/lib/utils";
import { forwardRef } from "react";

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> { }

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
    className,
    children,
    disabled,
    type = "button",
    ...props
}, ref) => {
    return (
        <button
            // className={cn(
            //     `
            //             p-2
            //             w-auto
            //             rounded
            //             text-white
            //             font-semibold
            //             hover:opacity-70
            //             transition
            //             `,
            //     className
            // )}
            className={cn(
                `
                                w-auto
                                border-transparent
                                rounded
                                disabled:cursor-not-allowed
                                disabled:opacity-50
                                text-white
                                font-semibold
                                hover:opacity-70
                                transition
                                ${disabled ? "opacity-50 cursor-wait" : ""}     
                            `,
                className
            )}
            disabled={disabled}
            ref={ref}
            {...props}
        >
            {children}
        </button>
    )
});

Button.displayName = "Button";

export default Button;