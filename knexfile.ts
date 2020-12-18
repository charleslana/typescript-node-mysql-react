import path from 'path';
import database from "./src/config/database";

module.exports = {
    client: database.config.client,
    connection: {
        host : database.config.host,
        user : database.config.user,
        password : database.config.password,
        database : database.config.database
    },
    migrations: {
        directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    },
    seeds: {
        directory: path.resolve(__dirname, 'src', 'database', 'seeds')
    },
    useNullAsDefault: true
}