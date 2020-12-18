import Knex from "knex";
import database from "../config/database";

const connection = Knex({
    client: database.config.client,
    connection: {
        host : database.config.host,
        user : database.config.user,
        password : database.config.password,
        database : database.config.database
    },
    useNullAsDefault: true
});

export default connection;