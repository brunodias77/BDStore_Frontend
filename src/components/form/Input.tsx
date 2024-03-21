import React from 'react';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    label: string;
    error?: string;
};

const Input = ({ label, error, ...props }: InputProps) => {
    return (
        <div>
            <label className="font-semibold text-sm text-gray-600 pb-1 block" htmlFor={props.name}>
                {label}
            </label>
            <input {...props} className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" />
            {error && <p className="text-red-600 text-sm mt-1">{error}</p>}
        </div>
    );
};

export default Input;