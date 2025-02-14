import React from "react";
import ReactDOM from "react-dom/client";
import {VisibilityProvider} from "./providers/VisibilityProvider";
import "./index.css";
import App from "./app/App";

console.log(`App initiating in ${import.meta.env.MODE} mode.`);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <VisibilityProvider>
            <App/>
        </VisibilityProvider>
    </React.StrictMode>
);
