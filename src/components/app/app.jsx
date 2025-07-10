import AppHeader from "../app-header/app-header";

import { MainWrapper } from "./app-styled";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Spinner from "../spinner/spinner";
import SinglePage from "../pages/single-page";

const Page404 = lazy(() => import("../pages/404"));
const MainPage = lazy(() => import("../pages/main-page"));
const ComicsPage = lazy(() => import("../pages/comics-page"));
const SingleComics = lazy(() => import("../pages/single-comics/single-comics"));
const SingleCharacter = lazy(() =>
  import("../pages/single-character/single-character")
);

const App = () => {
  return (
    <Router basename="/React-Marvel-API">
      <AppHeader />
      <MainWrapper>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/comics" element={<ComicsPage />} />
            <Route
              path="/comics/:id"
              element={
                <SinglePage Component={SingleComics} dataType="comics" />
              }
            />
            <Route
              path="/character/:id"
              element={
                <SinglePage Component={SingleCharacter} dataType="character" />
              }
            />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </Suspense>
      </MainWrapper>
    </Router>
  );
};

export default App;
