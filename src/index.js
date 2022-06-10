import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import * as React from "react";

import App from "./App";
import { GlobalAppContextProvider} from "./context/GlobalAppContext";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <GlobalAppContextProvider>
      <App />
    </GlobalAppContextProvider>
  </StrictMode>
);
