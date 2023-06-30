'use strict';
    
const personalMovieDB = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	private: false,
	start: function() {
		personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели', '');
	
		while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
			personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели', '');
		}
	},
	rememberMyFilms: function() {
		for (let i = 0; i < 2; i++ ) {
			const movie = prompt('Один из последних просмотренных фильмов', '').trim();
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
	},
	detectPersonalLevel: function() {
		if (personalMovieDB.count < 10) {
			console.log('Просмотрено довольно мало фильмов');
		} else if (personalMovieDB.count >=10 && personalMovieDB.count < 30) {
			console.log('Вы классический зритель');
		} else if (personalMovieDB.count > 30) {
			console.log('Вы киноман');
		} else {
			console.log('Произошла ошибка');
		}
	},
	showMyDB: function(hidden) {
		if (!hidden) {
			console.log(personalMovieDB);
		}
	},
	toggleVisibleMyDB: function() {
		if (personalMovieDB.private) {
			personalMovieDB.private = false;
		} else {
			personalMovieDB.private = true;
		}
	},
	writeYourGenres: function() {

		for (let i = 0; i < 3; i++) {
			let genre= prompt(`Ваш любимый жанр под номером ${i + 1}`, '');
			if ( genre && genre.trim()) {
				personalMovieDB.genres[i] = genre.toLowerCase();
			} else {
				console.log('Вы ввели некоректные данные или не ввели их вовсе');
				i--;
			}
		}
		
		personalMovieDB.genres.forEach ((item, i) => {
			console.log(`Любимый жанр ${i+1} - это ${item}`);
		});

	}
};

personalMovieDB.writeYourGenres();





