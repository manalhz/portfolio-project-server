const express = require('express');
const reviewsRouter = express.Router();

reviewsRouter
  .route('/')
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
  })
  .get((req, res) => {
    res.end(`Will send details of all reviews`);
  })

  .post((req, res) => {
    res.end(
      `Will add the review: ${req.body.name} with review ${req.body.review} and rating ${req.body.rating}`
    );
  })

  .put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /reviews');
  })

  .delete((req, res) => {
    res.statusCode = 403;
    res.end('DELETE operation not supported on /reviews');
  });

module.exports = reviewsRouter;
