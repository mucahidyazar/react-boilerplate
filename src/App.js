import React, { Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";

const Loader = () => (
  <div>
    <div>loading...</div>
  </div>
);

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
