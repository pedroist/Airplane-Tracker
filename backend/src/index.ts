import express from "express";
import planesRoute from './routes/planesRoute';

const app = express();

app.get("/greeting", (request, response) => {
  response.send({ message: "Hello!" });
});


app.use('/planes', planesRoute);

app.listen(3000, () => {
  console.log("Server Listening on PORT:", 3000);
});
