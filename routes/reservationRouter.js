const express = require('express');
const reservationRouter = express.Router();

reservationRouter
  .route('/')
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
  })
  .get((req, res) => {
    // /app/reservation?year=2022
    // [ { month: 1, reservedDates: [1,2,3,5,6,7] }, ... ]
    res.end(`Will send reserved date range ${req.query.year}`);
  })

  .post((req, res) => {
    res.end(
      `Will save ${req.body.name}, ${req.body.email}, ${req.body.numGuests} and ${req.body.checkInDate} and ${req.body.checkOutDate}`
    );
  })

  .put((req, res) => {
    res.end(
      `Will update ${req.body.reservationId.numGuests} and ${req.body.reservationId.checkInDate} and ${req.body.reservationId.checkOutDate}`
    );
  })

  .delete((req, res) => {
    res.statusCode = 403;
    res.end('DELETE operation not supported on /reservation');
  });

reservationRouter.route('/cancel').put((req, res) => {
  res.statusCode = 200;
  res.end(`Will cancel ${req.body.reservationId}`);
});

module.exports = reservationRouter;
