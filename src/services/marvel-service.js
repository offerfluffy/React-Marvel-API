class MarvelService {
  _apiBase = "https://gateway.marvel.com:443/v1/public/";
  _apiKey = `apikey=${process.env.REACT_APP_API_KEY}`;

  getResource = async (url) => {
    let res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    return await res.json();
  };

  getAllCharacters = async (limit = 9, offset = 290) => {
    const res = await this.getResource(
      `${this._apiBase}characters?limit=${limit}&offset=${offset}&${this._apiKey}`
    );
    return res.data.results.map(this._transfromCharacter);
  };

  getCharacter = async (id) => {
    const res = await this.getResource(
      `${this._apiBase}characters/${id}?${this._apiKey}`
    );
    return this._transfromCharacter(res.data.results[0]);
  };

  getComics = async (id, limit = 9) => {
    const res = await this.getResource(
      `${this._apiBase}comics/?$id=${id}&limit=${limit}&${this._apiKey}`
    );

    return res.data.results.map(this._transfromComics);
  };

  _transfromCharacter = (char) => ({
    id: char.id,
    name: char.name,
    description: char.description,
    thumbnail: char.thumbnail.path + "." + char.thumbnail.extension,
    homepage: char.urls[0].url,
    wiki: char.urls[1].url,
    comics: char.comics.items,
  });

  _transfromComics = (comics) => ({
    id: comics.id,
    title: comics.title,
    description: comics.description,
    thumbnail: comics.thumbnail.path + "." + comics.thumbnail.extension,
    language: comics.textObjects.languages,
    price: comics.prices[0].price,
  });
}

export default MarvelService;
