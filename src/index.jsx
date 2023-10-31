import React from "react";
import ReactDOMClient from "react-dom/client";
import { ToExport } from "./screens/ToExport";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<ToExport />);
