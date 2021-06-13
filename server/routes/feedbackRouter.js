// bring in express
const express = require('express');
// bring in pool from pool module
const pool = require('../modules/pool');
// bring in router functionality from express
const router = express.Router()

/* ---GET--- */
router.get('/', (req, res) => {
    console.log('Reading Feedback Table');

    // SQL select statement for the pool query
    const queryText = `SELECT * FROM feedback ORDER BY "date";`;
    pool.query(queryText)

    // async send result to client
    .then(result => {
        res.send(result.rows);
    })

    // catch error on GET
    .catch(err => {
        console.log('Error Sending Feedback', err);
    });
});

/* ---POST--- */

module.exports = router;