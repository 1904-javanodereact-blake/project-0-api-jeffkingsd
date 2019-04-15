const { Client } = require ('pg');

const client = new Client ({
    host: process.env['ERS_DB_URL'], // This gone to localhost
    database: process.env['ERS_DB_NAME'] || 'postgres',
    user: process.env['ERS_DB_USERNAME'],       // This been successfully read
    password: process.env['ERS_DB_PASSWORD'],   // THis been successfully read
    port: 5432,
});

const initOptions = {
    schema: 'Employee_Reimbursement_System',
    connect(client, dc, useCount) {
        const cp = client.connectionParameters;
        console.log('Connected to database:', cp.database);
    }
};

// Exporting modeules around the server's dao and index.
export const pgp = require('pg-promise')(initOptions);
const cn = client;
export const db = pgp(cn); // Database instance
