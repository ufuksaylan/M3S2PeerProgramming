import createTestDatabase from '@tests/utils/createTestDatabase';
import { createFor } from '@tests/utils/records';
import buildRepository from '../repository';
import supertest from 'supertest';
import createApp from '@/app';
import buildMovieRepository from '../../movies/repository';

const db = await createTestDatabase();
const repository = buildRepository(db);
const movieRepository = buildMovieRepository(db);
const createScrenings = createFor(db, 'screenings');
const createMovies = createFor(db, 'movies');
const app = createApp(db);

describe('GET', () => {
  it('should return movies by a list of query params', async () => {
    await createMovies([
      {
        id: 1,
        title: 'The Matrix',
        year: 1999,
      },
    ]);

    await createScrenings([
      {
        id: 1,
        timeStamp: '2021-01-01',
        numberOfTickets: 100,
        numberOfTicketsLeft: 100,
        movieId: 1,
      },
    ]);

    const { body } = await supertest(app).get('/screenings').expect(200);

    // ASSERT (Then we should get...)
    expect(body).toHaveLength(1);
    expect(body).toEqual([
      {
        id: 1,
        timeStamp: '2021-01-01',
        numberOfTickets: 100,
        numberOfTicketsLeft: 100,
        movieId: 1,
      },
    ]);
  });

  it('should return an empty array if no movies are found', async () => {
    // ACT (When we request...)
    const { body } = await supertest(app).get('/screenings').expect(200);

    // ASSERT (Then we should get...)
    expect(body).toHaveLength(0);
  });
});