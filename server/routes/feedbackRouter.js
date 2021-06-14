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
router.post('/', (req, res) => {

    // req.body is the object to post to the database
    const newFeedback = req.body;
    console.log(req.body);
    console.log(`Posting`, newFeedback,`to table`);

    // SQL insert statement for the pool query
    const queryText = `INSERT INTO feedback ("feeling", "understanding", "support", "comments")
        VALUES ($1, $2, $3, $4);`;

    // run pool query with array of sanitized data
    pool.query(
        queryText, 
        [newFeedback.feeling, newFeedback.understanding, newFeedback.support, newFeedback.comment]
    )

    // async call sends a result to client
    .then(result => {
        res.sendStatus(201);
    })

    // catch error in post
    .catch(err => {
        console.log(`Couldn't post`, newFeedback,`to database`, err);
    });
})

module.exports = router;