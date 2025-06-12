import { useHttp } from "../hooks/http.hook";

const useMarvelService = () => {
  const { loading, request, error, clearError } = useHttp();

  const _apiBase = "https://gateway.marvel.com:443/v1/public/";
  const _apiKey = `apikey=${process.env.REACT_APP_API_KEY}`;
  const _baseOffsetChar = 291;

  const getAllCharacters = async (offset = _baseOffsetChar, limit = 9) => {
    const res = await request(
      `${_apiBase}characters?limit=${limit}&offset=${offset}&${_apiKey}`
    );
    return res.data.results.map(_transfromCharacter);
  };

  const getCharacter = async (id) => {
    const res = await request(`${_apiBase}characters/${id}?${_apiKey}`);
    return _transfromCharacter(res.data.results[0]);
  };

  const getAllComics = async (offset = _baseOffsetChar, limit = 8) => {
    const res = await request(
      `${_apiBase}comics/?limit=${limit}&offset=${offset}&${_apiKey}`
    );

    return res.data.results.map(_transfromComics);
  };

  const getComics = async (id) => {
    const res = await request(`${_apiBase}comics/${id}?${_apiKey}`);
    console.log(res);
    return _transfromComics(res.data.results[0]);
  };

  const _transfromCharacter = (char) => ({
    id: char.id,
    name: char.name,
    description: char.description,
    thumbnail: char.thumbnail.path + "." + char.thumbnail.extension,
    homepage: char.urls[0].url,
    wiki: char.urls[1].url,
    comics: char.comics.items,
  });

  const _transfromComics = (comics) => ({
    id: comics.id,
    title: comics.title,
    description: comics.description,
    thumbnail: comics.thumbnail.path + "." + comics.thumbnail.extension,
    language: comics.textObjects.languages,
    price: comics.prices[0].price,
    pages: comics.pageCount
  });

  return {
    loading,
    error,
    getAllCharacters,
    getCharacter,
    getAllComics,
    getComics,
    clearError,
  };
};

export default useMarvelService;
