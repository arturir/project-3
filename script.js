const numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    geners: [],
    privat: false
};
const a = prompt('Один из последних просмотренных фильмов?', '' ),
      b = prompt('Ваша оценка?', '' ),
      c = prompt('Один из последних просмотренных фильмов?', '' ),
      d = prompt('Ваша оценка?', '' );
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);