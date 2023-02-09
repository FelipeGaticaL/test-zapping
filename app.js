require('dotenv').config();
const express = require("express");
const app = express();
const routes = require('./api_backend/routes/');

/* middlewares request http*/
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


/* Rutas Estáticas */
app.use(express.static(__dirname + "/api_front/components"));
app.use(express.static(__dirname + "/api_backend/public/videos"));

/* Layout */
app.get("/", (req, res) => {
  return res
    .status(200)
    .sendFile(`${__dirname}/api_front/components/landingLayout/landing.html`);
});

app.get("/video", (req, res) => {
  return res
    .status(200)
    .sendFile(`${__dirname}/api_front/components/videoLayout/video.html`);
});

app.get("/register", (req, res) => {
  res
    .status(404)
    .sendFile(`${__dirname}/api_front/components/registerLayout/register.html`);
});

app.use('/api', routes);

/* patrón comodín (wildcard pattern) */
app.use('*', (req, res) => {
  res.status(404).sendFile(`${__dirname}/api_front/components/404Layout/404Layout.html`);
});

/* Api connection */



const server = app.listen(3001, function () {
  console.log("Puerto: http://localhost:3001 ");
});


