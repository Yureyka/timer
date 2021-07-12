import React from "react";
import clsx from "clsx";

export const Button = ({ className, text, ...props }) => {
    return (
        <button className={clsx("btn", className)} {...props}>
            {text}
        </button>
    );
};
