import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import App from "./App.tsx";
import "./index.css";
import { loadConfig } from "./constants/api.ts";

axios.defaults.timeout = 15000;

async function bootstrap() {
  try {
    await loadConfig();
  } catch (e) {
    console.error("[bootstrap] loadConfig failed, using defaults:", e);
  }

  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>,
  );
}

bootstrap();
