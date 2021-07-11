import React from "react";

export const Display = (props) => {
    const displayTime = (time) => {
        let hours = Math.floor(time / (60 * 60));

        let divisor_for_minutes = time % (60 * 60);
        let minutes = Math.floor(divisor_for_minutes / 60);

        let divisor_for_seconds = divisor_for_minutes % 60;
        let seconds = Math.ceil(divisor_for_seconds);

        if(seconds < 10) seconds = '0' + seconds
        if(minutes < 10) minutes = '0' + minutes
        if(hours < 10) hours = '0' + hours

        return `${hours}:${minutes}:${seconds}`;
    };

    return <div {...props}>{displayTime(props.time)}</div>;
};
