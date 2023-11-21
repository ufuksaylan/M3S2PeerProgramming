import { Kysely, SqliteDatabase } from 'kysely';

export async function up(db: Kysely<SqliteDatabase>) {
  await db.schema
    .createTable('screenings')
    .ifNotExists()
    .addColumn('id', 'integer', (c) => c.primaryKey().autoIncrement().notNull())
    .addColumn('time_stamp', 'timestamp', (c) => c.notNull())
    .addColumn('number_of_tickets', 'integer', (c) => c.notNull())
    .addColumn('number_of_tickets_left', 'integer', (c) => c.notNull())
    .addColumn('movie_id', 'integer', (c) => c.notNull().references('movies.id'))
}

export async function down(db: Kysely<SqliteDatabase>) {
  await db.schema
    .dropTable('screenings')
    .execute();
}