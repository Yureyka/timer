import React from "react";
import { inject, observer } from "mobx-react";

import { Button } from "./Button";

const _TimerPanel = ({ timerStore }) => {
    const { addTime, isCountdown, handleToggleTimer, resetTimer, time } = timerStore;

    return (
        <React.Fragment>
            <div className="timer__add-options">
                <Button className="timer__add-btn" text="+1" onClick={() => addTime(1 * 3)} />
                <Button className="timer__add-btn" text="+5" onClick={() => addTime(5 * 60)} />
                <Button className="timer__add-btn" text="+10" onClick={() => addTime(10 * 60)} />
                <Button className="timer__add-btn" text="+15" onClick={() => addTime(15 * 60)} />
            </div>
            <div className="timer__options">
                <Button
                    className="timer__start-btn"
                    text={isCountdown ? "Stop" : "Start"}
                    onClick={handleToggleTimer}
                    disabled={time === 0}
                />
                <Button className="timer__reset-btn" text="Reset" onClick={resetTimer} />
            </div>
        </React.Fragment>
    );
};

export const TimerPanel = inject("timerStore")(observer(_TimerPanel));
