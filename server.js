const express = require("express");
const app = express();
const PORT = 5000;

const rapper = {
  "21 savage": {
    age: 29,
    birthname: "Sheyaa Bin Abraham-Joseph",
    birthlocation: "London, England",
  },

  chance: {
    age: 29,
    birthname: "Chancelor Bennett",
    birthlocation: "Chicago, Illinois",
  },

  dylan: {
    age: 29,
    birthname: "Dylan",
    location: "Dylan",
  },
};

//once we hear a request on the route (first param), we respond with something (second param)
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/index.html"); //dirname is just start wherever the js file is and go to its html
});

//the colon below in the url lets express know it is a query parameter, not actually part of the path
app.get("/api/:rapperName", (request, response) => {
  const rappersName = request.params.rapperName.toLowerCase();
  if (rapper[rappersName]) {
    response.json(rapper[rappersName]);
  } else {
    response.json(rapper["dylan"]);
  }
  //response.json(rappers);
});

app.listen(PORT, () => {
  console.log(`The server is running on ${PORT}`);
});
