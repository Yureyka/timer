import React from "react";
import { inject, observer } from "mobx-react";

const _Display = ({ timerStore }) => {
    const { displayTime } = timerStore;

    return <div className="timer__display">{displayTime()}</div>;
};

export const Display = inject("timerStore")(observer(_Display));
