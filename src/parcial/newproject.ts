import express, { Request, Response } from 'express';

const app = express();      // Crea una instancia de la aplicación Express
const port = 3000;          // Define el puerto

// Define una ruta en la raíz ('/') que responde con 'Hola, Mundo'
app.get('/:number', (req: Request, res: Response) => {
    console.log('Prueba de consola')
  if(req.query){
    // listo, estamos llamando esta constante de abajo la cual está vacia porque le vamos a enviar datos para obtener con el metodo GET
    const name = req.query ? req.query.name : null;
    // e implementamos aqui
    const edad = req.query ? req.query.edad : null;
    res.send(`¡hola, ${name}! con ${edad} años`); // luego obtenemos esta respuesta, para ello seguido del numero vamos a usar la sintaxis ?nombre de la variable = valor para esa variable
    return;
    console.log(name,'name');
    // listo ya pille, en caso de querer hacerlo con mas variables?, aparte siempre y cuando sea buna tiene darme esto de aqui, si no es por que esta mal implementada la variable ? en efecto pero ya va, trabajalo en index
  }
});
app.get('/hello', (_req: Request, res: Response) => {
    res.send('¡Hola, Papu!');
  });
// Inicia el servidor y escucha en el puerto especificado
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});


// una duda mas ya que ñor ahora solo estamso con una variable, en caso de 2 o mas variables de debe poner "?" para indicarle que es otra ?
// no papucho para ello deberia de usarse el "&" quedando tal que, http://localhost:3000/1?name=Rudzy&age=30
// recuerda tumbar terminal e inicializar compilado ;) 