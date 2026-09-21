import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

import StoreWrapper from "@stores/index";

document.getElementById("fa")!.innerHTML = `@import url("/font-awesome/css/all.min.css");`;

createRoot(document.getElementById("app") as HTMLElement).render(<StrictMode><BrowserRouter><StoreWrapper><App /></StoreWrapper></BrowserRouter></StrictMode>);