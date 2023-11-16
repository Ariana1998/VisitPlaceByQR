const express = require('express');
const cors = require('cors');
const app = express();
// settings
app.set('port', process.env.PORT || 4000);
// middlewares
app.use(cors());
app.use(express.json());
// routes
app.use('/api/administrador', require("../routes/administrador"));
app.use('/api/registro', require("../routes/registroVisitante"));
app.use('/api/visitante', require("../routes/visitante"));
app.use('/api/categoria', require("../routes/categoria"));
app.use('/api/lugar', require ("../routes/lugar"))
module.exports = app;