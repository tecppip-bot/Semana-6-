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

app.put('/reportes/:id', (req, res) => {
  const id = req.params.id;
  const reporte = reportes.find(reporte => reporte.id === id);
  if (!reporte) {
    return res.status(404).json({ mensaje: "Reporte no encontrado" });
  }
  reporte.tipo = req.body.tipo;
  reporte.descripcion = req.body.descripcion;
  res.json({ mensaje: "Reporte actualizado", reporte: reporte });
});

app.delete('/reportes/:id', (req, res) => {
  const id = req.params.id;
  const index = reportes.findIndex(reporte => reporte.id === id);
  if (index === -1) {
    return res.status(404).json({ mensaje: "Reporte no encontrado" });
  }
  reportes.splice(index, 1);
  res.json({ mensaje: "Reporte eliminado" });
});   

npm init -y
npm install express
node server.js
