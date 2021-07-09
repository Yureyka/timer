import React from "react";

export const Display = (props) => {
    return (
        <div {...props}>
            {props.time}
        </div>
    );
};