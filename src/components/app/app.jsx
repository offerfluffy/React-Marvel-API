import AppHeader from "../app-header/app-header";
import SingleComics from "../single-comics/single-comics";

import { MainWrapper } from "./app-styled";

import MainPage from "../pages/main-page";
import ComicsPage from "../pages/comics-page";
import Page404 from "../pages/404";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <AppHeader />
      <MainWrapper>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/comics" element={<ComicsPage />} />
          <Route path="/comics/:comicsId" element={<SingleComics />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </MainWrapper>
    </Router>
  );
};

export default App;
