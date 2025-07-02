import AppHeader from "../app-header/app-header";

import { MainWrapper } from "./app-styled";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Spinner from "../spinner/spinner";

const Page404 = lazy(() => import("../pages/404"));
const MainPage = lazy(() => import("../pages/main-page"));
const ComicsPage = lazy(() => import("../pages/comics-page"));
const SingleComics = lazy(() => import("../single-comics/single-comics"));

const App = () => {
  return (
    <Router basename="/React-Marvel-API">
      <AppHeader />
      <MainWrapper>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/comics" element={<ComicsPage />} />
            <Route path="/comics/:comicsId" element={<SingleComics />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </Suspense>
      </MainWrapper>
    </Router>
  );
};

export default App;