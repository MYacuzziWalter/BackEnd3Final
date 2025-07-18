import app from "./app.js";
import logger from "./logger.js";

const PORT = process.env.PORT||8080;

app.listen(PORT,() => {
    logger.info(`Servidor escuchando en el puerto ${PORT}`)
});
    