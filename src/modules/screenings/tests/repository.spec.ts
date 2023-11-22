import createTestDatabase from '@tests/utils/createTestDatabase';
import { createFor } from '@tests/utils/records';
import buildRepository from '../repository';

const db = await createTestDatabase();
const repository = buildRepository(db);
const createMovies = createFor(db, 'movies');
const createScreenings = createFor(db, 'screenings');

describe('GET', async () => {
  it('should return empty array when no movies exist', async () => {
    const screenings = await repository.findAll();

    expect(screenings).toEqual([]);
  });

  it('should return all movies', async () => {
    await createMovies([
      {
        title: 'The Matrix',
        year: 1999,
      },
    ]);

    await createScreenings([
      {
        timeStamp: '2021-01-01',
        numberOfTickets: 100,
        numberOfTicketsLeft: 100,
        movieId: 1,
      },
    ]);

    const screenings = await repository.findAll();

    expect(screenings).toEqual([
      {
        id: 1,
        timeStamp: '2021-01-01',
        numberOfTickets: 100,
        numberOfTicketsLeft: 100,
        movieId: 1,
      },
    ]);
  });
});