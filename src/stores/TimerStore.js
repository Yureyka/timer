import { makeAutoObservable, action, reaction } from "mobx";

class TimerStore {
    time = 3;
    isCountdown = false;
    timer = undefined;
    isFinish = false;
    isReset = false;

    constructor() {
        makeAutoObservable(this);

        reaction(
            () => this.time,
            (time) => {
                if (time === 0) {
                    this.setDefaultTimer();
                    if (!this.isReset) {
                        this.isFinish = true;
                    }
                }
            }
        );
    }

    handleToggleTimer = () => {
        if (this.isCountdown) {
            clearInterval(this.timer);
        } else {
            this.isFinish = false;
            this.isReset = false;
            this.timer = setInterval(
                action(() => {
                    this.time -= 1;
                }),
                1000
            );
        }

        this.isCountdown = !this.isCountdown;
    };

    addTime = (time) => {
        this.time += time;
    };

    setDefaultTimer = () => {
        clearInterval(this.timer);
        this.time = 0;
        this.isCountdown = false;
        this.isFinish = false;
    };

    resetTimer = () => {
        this.setDefaultTimer()
        this.isReset = true;
    }

    displayTime = () => {
        let hours = Math.floor(this.time / (60 * 60));

        let divisor_for_minutes = this.time % (60 * 60);
        let minutes = Math.floor(divisor_for_minutes / 60);

        let divisor_for_seconds = divisor_for_minutes % 60;
        let seconds = Math.ceil(divisor_for_seconds);

        if (seconds < 10) seconds = "0" + seconds;
        if (minutes < 10) minutes = "0" + minutes;
        if (hours < 10) hours = "0" + hours;

        return `${hours}:${minutes}:${seconds}`;
    };
}

export const timerStore = new TimerStore();
