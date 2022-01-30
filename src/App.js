import { Fragment, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { Details } from "./pages/movieDetails";
import { Main } from "./pages/main";
import { Favorites } from "./pages/favorites";
import { Header } from "./components/header";
import { Wrapper } from "./components/containers";
import { NotFound } from "./pages/notFound";
import "./App.css";

function App() {
  useEffect(() => {
    if (!localStorage.getItem("favorites")) {
      localStorage.setItem("favorites", JSON.stringify([]));
    }
  });

  return (
    <Fragment>
      <Header />
      <Wrapper>
        <Switch>
          <Route exact path="/" component={() => <Redirect to="/movies/1" />} />
          <Route path="/movies/:page" component={Main} />
          <Route path="/details/:id" component={Details} />
          <Route path="/favorites" component={Favorites} />
          <Route component={NotFound} />
        </Switch>
      </Wrapper>
    </Fragment>
  );
}

export default App;
