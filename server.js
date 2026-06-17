const express = require('express');
const app = express();

app.use(express.json());

let reportes = [];

app.get('/reportes', (req, res) => {
  res.json(reportes);
});

app.post('/reportes', (req, res) => {

  const reporte = {
    id: reportes.length + 1,
    tipo: req.body.tipo,
    descripcion: req.body.descripcion
  };

  reportes.push(reporte);

  res.json({
    mensaje: "Reporte registrado",
    reporte: reporte
  });

});

app.listen(3000, () => {
  console.log('Servidor ejecutándose en puerto 3000');
});

node server.js
postman: http://localhost:3000/reportes
{
    "tipo": "comunal",
    "descripcion": "La sociedad debe trabajar en conjunto para avanzar"
    }   
    const express = require('express');
const app = express();

app.use(express.json());

let reportes = [];

app.get('/reportes', (req, res) => {
    res.json(reportes);
});

app.post('/reportes', (req, res) => {
    const reporte = {
        id: reportes.length + 1,
        tipo: req.body.tipo,
        descripcion: req.body.descripcion
    };
    reportes.push(reporte);
    res.json(reporte);
});

app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});

npm init -y
npm install express
node server.js
postman: http://localhost:3000/reportes
New-Item server.js -ItemType File
code server.js
New-Item package.json -ItemType File
code package.json
npm install express
node server.js
const express = require('express');
const app = express();

app.use(express.json());

let reportes = [];

app.get('/reportes', (req, res) => {
    res.json(reportes);
});

app.post('/reportes', (req, res) => {
    const reporte = {
        id: reportes.length + 1,
        tipo: req.body.tipo,
        descripcion: req.body.descripcion
    };
    reportes.push(reporte);
    res.json(reporte);
});

app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});

npm init -y
npm install express
node server.js
postman: http://localhost:3000/reportes
postman: http://localhost:3000/reportes
Json:
{
    "tipo": "infraestructura",
    "descripcion": "daño de luz en el pueblo"
}
{
    "id": 1,
    "tipo": "Infraestructura",
    "descripcion": "Daño en alumbrado público"
  }
  get: http://localhost:3000/reportes
  [
    {
      "id": 1,
      "tipo": "Infraestructura",
      "descripcion": "Daño en alumbrado público"
    }
  ]

  

    






