import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Display } from "./Display";

export const App = () => {
    const [time, setTime] = useState(30);
    const [isCountdown, setIsCountdown] = useState(false);
    const [timer, setTimer] = useState();

    useEffect(() => {
        if (time === 0) resetTimer();
    }, [time]);

    const handleToggleTimer = () => {
        if (isCountdown) {
            clearInterval(timer);
        } else {
            setTimer(
                setInterval(() => {
                    setTime((prev) => prev - 1);
                }, 1000)
            );
        }

        setIsCountdown((prev) => !prev);
    };

    const resetTimer = () => {
        clearInterval(timer);
        setTime(0);
        setIsCountdown(false);
    };

    return (
        <div className="app">
            <div className="timer">
                <Display className="timer__display" time={time} />
                <div className="timer__add-options">
                    <Button className="timer__add-btn" text="+1" onClick={() => setTime((prev) => prev + 1 * 60)} />
                    <Button className="timer__add-btn" text="+5" onClick={() => setTime((prev) => prev + 5 * 60)} />
                    <Button className="timer__add-btn" text="+10" onClick={() => setTime((prev) => prev + 10 * 60)} />
                    <Button className="timer__add-btn" text="+15" onClick={() => setTime((prev) => prev + 15 * 60)} />
                </div>
                <div className="timer__options">
                    <Button className="timer__start-btn" text={isCountdown ? "Stop" : "Start"} onClick={handleToggleTimer} />
                    <Button className="timer__reset-btn" text="Reset" onClick={resetTimer} />
                </div>
            </div>
        </div>
    );
};
