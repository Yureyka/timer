import React from "react";
import clsx from "clsx";

export const Button = ({ className, onClick, text, ...props }) => {
    return (
        <button className={clsx("btn", className)} onClick={onClick} {...props}>
            {text}
        </button>
    );
};
