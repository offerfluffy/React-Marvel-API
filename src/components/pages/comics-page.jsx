import AppBanner from "../app-banner/app-banner";
import ComicsList from "../comics-list/comics-list";
import { Helmet } from "react-helmet";

function ComicsPage() {
  return (
    <>
      <Helmet>
          <meta name="description" content="Marvel comics" />
          <title>Marvel comics</title>
      </Helmet>
      <AppBanner />
      <ComicsList />
    </>
  );
}

export default ComicsPage;
