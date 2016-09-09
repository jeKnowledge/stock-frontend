# stock-api

## Database Setup

1. Install PostgresSQL (version >= 9.5)
2. Create user to manage the database:

```shell
psql

CREATE USER stock WITH SUPERUSER;
\q
```

3. Run `rails db:drop db:create db:migrate` to create the database.
