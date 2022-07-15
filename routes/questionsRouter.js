const express = require('express');
const Questions = require('../models/questions');
const questionsRouter = express.Router();

questionsRouter.route('/');
get((req, res, next) => {
  Questions.findById(req.params.questionId)
    .then((question) => {
      if (question) {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(question);
      } else {
        err = new Error(`Question not found`);
        err.status = 404;
        return next(err);
      }
    })
    .catch((err) => next(err));
})
  .post((req, res, next) => {
    Questions.findById(req.params.questionId)
      .then((question) => {
        if (question) {
          question.push(req.body);
          question
            .save()
            .then((question) => {
              res.statusCode = 200;
              res.setHeader('Content-Type', 'application/json');
              res.json(question);
            })
            .catch((err) => next(err));
        } else {
          err = new Error(`Question ${req.params.questionId} not found`);
          err.status = 404;
          return next(err);
        }
      })
      .catch((err) => next(err));
  })
  .put((req, res) => {
    res.statusCode = 403;
    res.end(
      `PUT operation not supported on /questions/${req.params.questionId}/comments`
    );
  })
  .delete((req, res, next) => {
    Campsite.findById(req.params.campsiteId)
      .then((campsite) => {
        if (campsite) {
          for (let i = campsite.comments.length - 1; i >= 0; i--) {
            campsite.comments.id(campsite.comments[i]._id).remove();
          }
          campsite
            .save()
            .then((campsite) => {
              res.statusCode = 200;
              res.setHeader('Content-Type', 'application/json');
              res.json(campsite);
            })
            .catch((err) => next(err));
        } else {
          err = new Error(`Question not found`);
          err.status = 404;
          return next(err);
        }
      })
      .catch((err) => next(err));
  });

module.exports = questionsRouter;
