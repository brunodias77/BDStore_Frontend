import React, { ButtonHTMLAttributes } from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
};


const Button = ({ children, disabled, ...props }: ButtonProps) => {
    return (
        <button {...props} className={`button cursor-pointer rounded-md   min-w-32 px-6 py-3 transition duration-100 ${disabled ? "opacity-50 cursor-wait" : "hover:outline-none focus:outline-none focus:ring-2 focus:ring-purple_700"} `}>
            {children}
        </button>
    );
};

export default Button;