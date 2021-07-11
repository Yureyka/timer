import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";

import { App } from "./App";
import { timerStore } from "./stores/TimerStore";
import "./index.scss";

ReactDOM.render(
    <React.StrictMode>
        <Provider timerStore={timerStore}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);
