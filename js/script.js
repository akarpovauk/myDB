'use strict';

let numberOfFilms;

function start() {
	numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', '');

	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', '');
	}
}

start();
    
const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	private: false
};

function rememberMyFilms() {
	for (let i = 0; i < 2; i++ ) {
		const movie = prompt('Один из последних просмотренных фильмов', '');
		const rating = prompt('На сколько оцените его', '');
		if (!movie || movie && movie.length > 50) {
			if (!movie) {
				console.log('film name must be greater then 0 characters');
			} else {
				console.log('movie name should be less than 50 characters');
			}
			i--;
		} else {
			personalMovieDB.movies[movie] = rating;
		}
	}
}

rememberMyFilms();


function detectPersonalLevel() {
	if (personalMovieDB.count < 10) {
		console.log('Просмотрено довольно мало фильмов');
	} else if (personalMovieDB.count >=10 && personalMovieDB.count < 30) {
		console.log('Вы классический зритель');
	} else if (personalMovieDB.count > 30) {
		console.log('Вы киноман');
	} else {
		console.log('Произошла ошибка');
	}
}

detectPersonalLevel();

function writeYourGenres() {

	for (let i = 0; i < 3; i++) {
		personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}`, '');
	}
}

writeYourGenres();

function showMyDB(hidden) {
	if (!hidden) {
		console.log(personalMovieDB);
	}
}

showMyDB(personalMovieDB.private);









