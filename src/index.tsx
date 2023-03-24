import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { TableDataContextProvider } from "./context";

import { Provider } from "react-redux";
// import store from "./reduxContainer/Store";
// import store from "./pages/reduxAgain/storeA";
// import storeA from "./pages/reduxAgain/storeA";
import store from "./pages/reduxToolKit/store";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <TableDataContextProvider>
        <App />
      </TableDataContextProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
