class MarvelService {
  _apiBase = "https://marvel-server-zeta.vercel.app/";
  _apiKey = `apikey=${process.env.REACT_APP_API_KEY}`;

  getResource = async (url) => {
    let res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    return await res.json();
  };

  getAllCharacters = async (limit = 9, offset = 0) => {
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

  _transfromCharacter = (char) => ({
    name: char.name,
    description: char.description,
    thumbnail: char.thumbnail.path + "." + char.thumbnail.extension,
    homepage: char.urls[0].url,
    wiki: char.urls[1].url,
  });
}

export default MarvelService;
