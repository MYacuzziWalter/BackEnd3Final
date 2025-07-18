import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Adoptions y users",
            version: "1.0.0",
            description: "Generador de mascotas y usuarios",
            contact: {
                name: "walter",
                email: "walteryacuzzi@hotmail.com",
            }
        },
        servers: [
            {
                url: "http://localhost:8081",
                description: "Servidor de desarollo"
            }
        ]
    },
    apis: ['./src/routes/*.js'],
};


const swaggerSpect = swaggerJSDoc(options);

export const setupSwagger = (app) => {
    app.use('/api-doc', swaggerUi.serve, swaggerUi.setup(swaggerSpect));
}