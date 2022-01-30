export default class Api {
  static apiKey = process.env.REACT_APP_API_KEY;
  static baseUrl = "https://api.themoviedb.org/3/movie";
  static poster_url = "http://image.tmdb.org/t/p/w342";

  static getNowPlaying(page) {
    return new Promise(async (res, rej) => {
      const responce = await fetch(
        `${Api.baseUrl}/now_playing?api_key=${Api.apiKey}&language=en-US&page=${page}`
      );
      if (responce.status === 200) {
        res(await responce.json());
      } else rej(await responce.json());
    });
  }

  static getDatails(id) {
    return new Promise(async (res, rej) => {
      const responce = await fetch(
        `${Api.baseUrl}/${id}?api_key=${Api.apiKey}&language=en-US`
      );
      if (responce.status === 200) {
        res(await responce.json());
      } else rej(await responce.json());
    });
  }
}
