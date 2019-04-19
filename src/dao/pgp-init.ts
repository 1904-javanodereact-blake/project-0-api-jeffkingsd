/*
    PG-Promise is a library that built ontop of PG-Postegre. It simplifies
    connection handling, connection pooling, disconnecting, parent connection
    to child connection. Handle all abstracted Queries results and can be used
    to specifiy different query statements.
*/
const client = {
    host: process.env['ERS_URL'], // This gone to localhost
    database: process.env['ERS_NAME'] || 'postgres',
    user: process.env['ERS_USERNAME'],       // This been successfully read
    password: process.env['ERS_PASSWORD'],   // THis been successfully read
    port: 5432,
};

const initOptions = {
    schema: 'Employee_Reimbursement_System',
    connect(client, dc, useCount) {
        const cp = client.connectionParameters;
        console.log('Connected to database:', cp.database);
    }
};

// Exporting modeules around the server's dao and index.
export const pgp = require('pg-promise')(initOptions);
export const db = pgp(client); // Database instance
