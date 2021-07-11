import React from "react";
import { inject, observer } from "mobx-react";
import audio from "../assets/notification.wav";

const _Notification = ({ timerStore }) => {
    const { isFinish } = timerStore;

    React.useEffect(() => {
        if (isFinish) {
            let notification = new Audio(audio);
            notification.play();
        }
    }, [isFinish]);

    return null;
};

export const Notification = inject("timerStore")(observer(_Notification));
