import instance from "../axios";
import { API_KEY } from "../requests";

export const getMovieTrailerVsGenres = async (movie) => {
  let result = {
    trailerKey: null,
    genres: null,
  };
  try {
    //   const data = await request.GET(
    //     `${constants.BASE_URL}/${movie?.media_type === 'tv' ? 'tv' : 'movie'}/${movie?.id}?api_key=${
    //       constants.API_KEY
    //     }&language=en-US&append_to_response=videos`
    //   );
    let data = await instance.get(
      `/${movie?.media_type === "tv" ? "tv" : "movie"}/${
        movie?.id
      }?api_key=${API_KEY}&language=en-US&append_to_response=videos`
    );
    data = data.data;
    if (data?.videos) {
      const index = data.videos.results.findIndex(
        (element) => element.type === "Trailer"
      );
      result.trailerKey = data.videos?.results[index]?.key;
    }
    if (data?.genres) {
      result.genres = data.genres;
    }
  } catch (error) {
    console.log(
      "🚀 ~ file: function.ts:19 ~ getMovieTrailerVsGenres ~ error",
      error
    );
  }
  return result;
};

export const searchMovie = async (query, page = 1) => {
  try {
    // const result = await request.GET(
    //   `${constants.BASE_URL}/search/movie?api_key=${constants.API_KEY}&language=en-US&query=${query}&page=${page}`
    // );
    const result = await instance.get(
      `/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}`
    );
    console.log("🚀 ~ file: functions.js:47 ~ searchMovie ~ result:", result);
    return result.data?.results;
  } catch (error) {
    console.log("🚀 ~ file: function.ts:108 ~ searchMovie ~ error", error);
  }
};
