const express = require("express");
const questionsRouter = express.Router();

questionsRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res) => {
    res.statusCode = 403;
    res.end("GET operation not supported on /questions");
  })

  .post((req, res) => {
    // req.body.question
    res.end(
      `Will forward ${req.body.name}, ${req.body.email}, and question to maintainer`
    );
  })

  .put((req, res) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on /questions");
  })

  .delete((req, res) => {
    res.statusCode = 403;
    res.end("DELETE operation not supported on /questions");
  });

module.exports = questionsRouter;
