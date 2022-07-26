const express = require('express');
const Reviews = require('../models/reviews');
const reviewsRouter = express.Router();

reviewsRouter
  .route('/')
  .get((req, res, next) => {
    Reviews.find()
      //.populate()
      .then((reviews) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(reviews);
      })
      .catch((err) => next(err));
  })

  .post((req, res, next) => {
    console.log('Review Created');
    // Reviews.create(req.body)
    //   .then((review) =>{
    //     console.log
    //   })

    // const reviewData = {
    //   text: req.body.review,
    //   rating: req.body.rating,
    //   user: req.body.author,
    // };

    // const review = new Reviews(reviewData);
    // review.save(function (err) {
    //   if (err) return handleError(err);
    //   // saved!
    // });

    Reviews.create(req.body, function (err, review) {
      if (err) return handleError(err);
      console.log(review);
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(review);
    });
  });

module.exports = reviewsRouter;
