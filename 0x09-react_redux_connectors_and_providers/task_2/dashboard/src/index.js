import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import App from "./App/App";
import reportWebVitals from "./reportWebVitals";
import Notifications from "./Notifications/Notifications";

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

const rootNotifications = ReactDOM.createRoot(document.getElementById("root-notifications"));
rootNotifications.render(
  <React.StrictMode>
    <Notifications />
  </React.StrictMode>
);

reportWebVitals();
