# stock-api

## Database Setup

1. Install PostgresSQL (version >= 9.4)
2. Create user to manage the database:

```shell
psql

CREATE USER stock;
ALTER USER betar WITH SUPERUSER;
\q
```

3. Run `rake db:drop db:create db:migrate` to create the database
