const mongoose = require('mongoose');

class Database {
    constructor() {
        // Si la instancia de Database no existe, creamos una nueva
        if (!Database.instance) {
            this._connect();
            Database.instance = this;
        }

        // Devolvemos la instancia existente (si ya fue creada)
        return Database.instance;
    }

    _connect() {

        // Conectarse a MongoDB usando mongoose
        mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }).then(() => {
            console.log('Conectado a MongoDB');
        }).catch((error) => {
            console.error('Error conectándose a MongoDB:', error.message);
        });
    }
}

// Creamos una instancia única de Database
const instance = new Database();
Object.freeze(instance); // Congelamos la instancia para evitar modificaciones

module.exports = instance; // Exportamos la instancia para su uso en otros archivos
