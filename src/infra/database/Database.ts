import pgPromise from "pg-promise";

const pgp = pgPromise({});

const db = pgp({
    user: "nuxeo",
    password: "nuxeo",
    host: "localhost",
    port: 5432,
    database: "cleanarchts",
    idleTimeoutMillis: 100
});

export default db;