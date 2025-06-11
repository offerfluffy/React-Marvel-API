import AppHeader from "../app-header/app-header";
import SingleComics from "../single-comics/single-comics";

import { MainWrapper } from "./app-styled";

import MainPage from "../pages/main-page";
import ComicsPage from "../pages/comics-page";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <AppHeader />
      <MainWrapper>
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route exact path="/comics">
            <ComicsPage />
          </Route>
        </Switch>
      </MainWrapper>

      {/* <MainWrapper>
        <AppBanner />
        <SingleComics />
      </MainWrapper> */}
    </Router>
  );
};

export default App;
