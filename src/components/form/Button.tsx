import React, { ButtonHTMLAttributes } from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
};


const Button = ({ children, disabled, ...props }: ButtonProps) => {
    return (
        <button {...props} className={`bg-green_600 text-white px-4 py-2 rounded-lg transition duration-100 cursor-pointer  ${disabled ? "opacity-50 cursor-wait" : ""} `}>
            {children}
        </button>
    );
};

export default Button;