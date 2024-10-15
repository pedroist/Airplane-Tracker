import express from "express";

const app = express();

app.get("/greeting", (request, response) => {
  response.send({ message: "Hello!" });
});

app.listen(3000, () => {
  console.log("Server Listening on PORT:", 3000);
});
