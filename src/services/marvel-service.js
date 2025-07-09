import { useHttp } from "../hooks/http.hook";
import { useState } from "react";

const useMarvelService = () => {
  const { loading, request, error, clearError } = useHttp();

  const _API = {
    base: "https://gateway.marvel.com/v1/public/",
    fallback: "https://marvel-server-zeta.vercel.app/",
    key: `apikey=${process.env.REACT_APP_PUBLIC_API_KEY}`,
    fallbackKey: `apikey=${process.env.REACT_APP_FALLBACK_API_KEY}`,
    baseOffset: 0,
  };

  const getAllCharacters = async (offset = _API.baseOffset, limit = 9) => {
    try {
      const res = await request(
        `${_API.base}characters?limit=${limit}&offset=${offset}&${_API.key}`,
        true
      );
      return res.data.results.map(_transfromCharacter);
    } catch {
      clearError();
      const res = await request(
        `${_API.fallback}characters?limit=${limit}&${_API.fallbackKey}`
      );
      return res.data.results.map(_transfromCharacter);
    }
  };

  const getCharacter = async (id) => {
    try {
      const res = await request(
        `${_API.base}characters/${id}?${_API.key}`,
        true
      );
      return _transfromCharacter(res.data.results[0]);
    } catch {
      clearError();
      const res = await request(
        `${_API.fallback}characters/${id}?${_API.fallbackKey}`
      );
      return _transfromCharacter(res.data.results[0]);
    }
  };

  const getCharacterByName = async (name) => {
    try {
      const res = await request(
        `${_API.base}characters?name=${name}&${_API.key}`,
        true
      );
      return _transfromCharacter(res.data.results[0]);
    } catch {
      clearError();
      const res = await request(
        `${_API.fallback}characters?name=${name}&${_API.fallbackKey}`
      );
      return _transfromCharacter(res.data.results[0]);
    }
  };

  const getRandomCharacter = async () => {
    try {
      const id = Math.floor(Math.random() * 400) + 1011000;
      const res = await request(
        `${_API.base}characters/${id}?${_API.key}`,
        true
      );
      return _transfromCharacter(res.data.results[0]);
    } catch {
      clearError();
      const fallbackId = Math.floor(Math.random() * 20) + 1;
      const res = await request(
        `${_API.fallback}characters/${fallbackId}?${_API.fallbackKey}`
      );
      return _transfromCharacter(res.data.results[0]);
    }
  };

  const getAllComics = async (offset = _API.baseOffset, limit = 8) => {
    try {
      const res = await request(
        `${_API.base}comics/?limit=${limit}&offset=${offset}&${_API.key}`,
        true
      );
      return res.data.results.map(_transfromComics);
    } catch {
      clearError();
      const res = await request(
        `${_API.fallback}comics/?limit=${limit}&${_API.fallbackKey}`
      );
      return res.data.results.map(_transfromComics);
    }
  };

  const getComics = async (id) => {
    try {
      const res = await request(`${_API.base}comics/${id}?${_API.key}`, true);
      return _transfromComics(res.data.results[0]);
    } catch {
      clearError();
      const res = await request(
        `${_API.fallback}comics/${id}?${_API.fallbackKey}`
      );
      return _transfromComics(res.data.results[0]);
    }
  };

  const _transfromCharacter = (char) => {
    if (!char) {
      return null;
    }

    return {
      id: char.id,
      name: char.name,
      description: char.description || "No description available",
      thumbnail: `${char.thumbnail.path}.${char.thumbnail.extension}`,
      homepage: char.urls?.[0]?.url || "#",
      wiki: char.urls?.[1]?.url || "#",
      comics: char.comics?.items || [],
    };
  };

  const _transfromComics = (comics) => ({
    id: comics.id,
    title: comics.title,
    description: comics.description,
    thumbnail: comics.thumbnail.path + "." + comics.thumbnail.extension,
    language: comics.textObjects.languages,
    price: comics.prices[0].price,
    pages: comics.pageCount,
  });

  return {
    loading,
    error,
    getAllCharacters,
    getCharacter,
    getCharacterByName,
    getRandomCharacter,
    getAllComics,
    getComics,
    clearError,
  };
};

export default useMarvelService;
