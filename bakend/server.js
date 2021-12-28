const express = require("express");
const app = express();
app.get("/", (request, response) => {
  let path = "../frontend";
  response.sendFile("index.html", { root: path });
});

const PORT = 3001;
app.listen(PORT);
console.log(`Server running in port ${PORT}`);
