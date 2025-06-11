import AppBanner from "../app-banner/app-banner";
import ComicsList from "../comics-list/comics-list";

import { useState } from "react";

function ComicsPage() {
  const [selectedComics, setSelectedComics] = useState(null);

  const onSelectComics = (id) => {
    setSelectedComics(id);
  };

  return (
    <>
      <AppBanner />
      <ComicsList onSelectComics={onSelectComics} />
    </>
  );
}

export default ComicsPage;
