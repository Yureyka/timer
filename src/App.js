import React from "react";
import { Display } from "./components/Display";
import { TimerPanel } from "./components/TimerPanel";
import { Notification } from "./components/Notification";

export const App = () => {
    return (
        <div className="app">
            <div className="timer">
                <Display />
                <TimerPanel />
                <Notification />
            </div>
        </div>
    );
};
