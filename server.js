const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const surveyRoutes = require('./routes/survey');
const dotenv = require('dotenv');
require('./db'); // Asegura que el Singleton de la base de datos esté inicializado


const app = express();
app.use(express.json());
dotenv.config();
const PORT = process.env.PORT || 5000;

app.get("/",(req, res) =>{
    res.send('ola')
})

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Rutas
app.use('/api/survey', surveyRoutes); // Usa las rutas de encuestas

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor está corriendo en el puerto ${PORT}`);
});
