import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { persistor } from "./redux/store";
import store from "./redux/store";
import { BrowserRouter } from "react-router-dom";
// import { HelmetProvider } from "react-helmet";
import { Toaster } from "react-hot-toast";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {/* <HelmetProvider> */}
          <App />
          {/* </HelmetProvider> */}
        </PersistGate>
      </Provider>
    </BrowserRouter>
    <Toaster position="top-right" toastOptions={{ duration: 1000 }} />
  </StrictMode>
);
