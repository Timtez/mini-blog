import React from "react";
import * as ReactDOMClient from 'react-dom/client';
import App from "./App"
import "./index.css";

const root = ReactDOMClient.createRoot(document.querySelector("#root"));
root.render(
    <React.StrictMode>
         <App />
     </React.StrictMode>
);