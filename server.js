const express = require("express");
const questionsRouter = require("./routes/questionsRouter");
const reservationRouter = require("./routes/reservationRouter");
const reviewsRouter = require("./routes/reviewsRouter");

const hostname = "localhost";
const port = 3030;

const app = express();
app.use(express.json());

app.use("/questions", questionsRouter);

app.use("/reservation", reservationRouter);

app.use("/reviews", reviewsRouter);

app.use(express.static(__dirname + "/public"));

app.use((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<html><body><h1>This is an Express Server</h1></body></html>");
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
