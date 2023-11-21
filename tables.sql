Building a movie ticket booking system 

CREATE TABLE movies (
  id INTEGER PRIMARY KEY,
  title TEXT NOT NULL,
  year NUMERIC
);

CREATE TABLE people (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  birth NUMERIC
);

CREATE TABLE stars (
  movie_id INTEGER NOT NULL,
  person_id INTEGER NOT NULL,
  FOREIGN KEY(movie_id) REFERENCES movies(id),
  FOREIGN KEY(person_id) REFERENCES people(id)
);

CREATE TABLE directors (
  movie_id INTEGER NOT NULL,
  person_id INTEGER NOT NULL,
  FOREIGN KEY(movie_id) REFERENCES movies(id),
  FOREIGN KEY(person_id) REFERENCES people(id)
);

CREATE TABLE ratings (
  movie_id INTEGER NOT NULL,
  rating REAL NOT NULL,
  votes INTEGER NOT NULL,
  FOREIGN KEY(movie_id) REFERENCES movies(id)
);

CREATE TABLE genre (
  id INTEGER PRIMARY KEY
);

CREATE TABLE movies_genre (
  id INTEGER,
  movie_id INTEGER NOT NULL,
  genre_id INTEGER NOT NULL,
  FOREIGN KEY(movie_id) REFERENCES movies(id),
  FOREIGN KEY(genre_id) REFERENCES genre(id)
);

CREATE TABLE screenings (
  id INTEGER PRIMARY KEY,
  time_stamp TIMESTAMP,
  number_of_tickets INTEGER,
  number_of_tickets_left INTEGER,
  movie_id INTEGER,
  FOREIGN KEY(movie_id) REFERENCES movies(id)
);
