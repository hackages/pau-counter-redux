import React from "react";
import ReactDOM from "react-dom";
import { Counter } from "./Counter";
import { Provider } from "react-redux";
import { store } from "./store";
import { MovieList } from "./MovieList";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Counter />
      <MovieList />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
