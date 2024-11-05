"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
app.get('/:number', (req, res) => {
    console.log('Prueba de consola');
    if (req.query) {
        const name = req.query ? req.query.name : null;
        const edad = req.query ? req.query.edad : null;
        res.send(`¡hola, ${name}! con ${edad} años`);
        return;
        console.log(name, 'name');
    }
});
app.get('/hello', (_req, res) => {
    res.send('¡Hola, Papu!');
});
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
//# sourceMappingURL=newproject.js.map