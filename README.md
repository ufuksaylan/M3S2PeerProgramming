## Setup

**Note:** For this exercise, we have provided an `.env` file with the database connection string. Normally, you would not commit this file to version control. We are doing it here for simplicity and given that we are using a local SQLite database.

## Database

This project should be used with the `movies.db` database in `data/` folder. It is the same database that we used in the previous exercise. You can download a fresh database [here](https://cdn.cs50.net/2022/fall/psets/7/movies.zip) or from [CS50](https://cs50.harvard.edu/x/2023/psets/7/movies/).

## Migrations

We can run migrations with the following command:

```bash
npm run migrate:latest
```

## Running the server

In development mode:

```bash
npm run dev
```

In production mode:

```bash
npm run start
```

## Updating types

If you make changes to the database schema, you will need to update the types. You can do this by running the following command:

```bash
npm run generate-types
```

## Users

1. **Get a list of users by providing their IDs**

- Endpoint: `Get /movies`
- Parameters: `id`
- e.g: `Get /movies?id=133093,816692` should return 2 movies with these IDs
- Constraints: Movie IDs must exists in the database
- Data: each movie must contain Id, title, and year.

2. **Get a list of screenings available for booking**

- should return a list of existing articles
- Endpoint: `Get /screenings`
- Parameters: None
- e.g: `Get /screenings` should return existing articles, if no screenings is avaliable, return an empty array
- Data: session information (timestamp, number of tickets, number of tickets left) and movies: (title and year).
- Suggested table:

```sql
CREATE TABLE screenings (
  id INTEGER PRIMARY KEY,
  time_stamp TIMESTAMP,
  number_of_tickets INTEGER,
  number_of_tickets_left INTEGER,
  movie_id INTEGER,
  FOREIGN KEY(movie_id) REFERENCES movies(id)
);
```

3. **get a list of bookings (tickets) they have booked**

- should return a list of existing tickets
- Endpoint: `Get /tickets`
- Parameters: None
- e.g: `Get /screenings` should return existing tickes, if no ticket is avaliable, return an empty array
- Data:

4. **create a booking (ticket) for movie screening**

- should create a ticket
- Enpoint: `Post /tickets`
- Data: e.g {
  "movie_id" = 1, number_of_tickets_purchase = 2
  }

## Administrators

1. **create new viewing screenings for watching a movie**

- should create a new viewing
- Endpoint: `Post /screenings`
- Data: e.g. {
  movie_id = 1,
  screening_timestamp= "some time stamp",
  total_tickets_allocation= 100
  }
