const initOptions = {
    connect(client, useCount) {
        const cp = client.connectionParameters;
        console.log('Connected to the database', cp.database);
    }
};
export const pgp = require('pg-promise')(initOptions);
const cn = 'postgres://osmium:@jeffkingdb.cvmwipaukxxd.us-east-2.rds.amazonaws.com:5432/postgres';
export const db = pgp(cn); // Database instance


