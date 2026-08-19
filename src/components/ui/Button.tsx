import React from "react";

interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
        children : React.ReactNode;
        variant?: "primary" |"secondary" | "danger";
    }

    function Button({
        children, 
        variant = "primary",
        className = "",
        ...props
        }: ButtonProps) {
            const baseStyles = 
            "rounded-lg px-4 py-2 text-sm font-medium transition-colors";

    const variants = {
        primary: "bg-blue-600 text-white hover:bg-blue-700",
        secondary: "bg-slate-200 text-slate-800 hover:bg-slate-300",
        danger: "bg-red-600 text-white hover:bg-red-700",
        };

        return(
            <button
                className={`${baseStyles} ${variants [variant]} ${className}`}
                {...props}
            >
                {children}
            </button>
        );
        }

export default Button;
