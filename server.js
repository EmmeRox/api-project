const express = require("express");
const app = express();
const PORT = 5000;

const savage = {
  "21 Savage": {
    age: 29,
    birthname: "Sheyaa Bin Abraham-Joseph",
    birthlocation: "London, England",
  },

  Chance: {
    age: 29,
    birthname: "Chancelor Bennett",
    birthlocation: "Chicago, Illinois",
  },

  Dylan: {
    age: 29,
    birthname: "Dylan",
    location: "Dylan",
  },
};

//once we hear a request on the route (first param), we respond with something (second param)
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/index.html"); //dirname is just start wherever the js file is and go to its html
});

app.get("/api", (request, response) => {
  response.json(savage);
});

app.listen(PORT, () => {
  console.log(`The server is running on ${PORT}`);
});
