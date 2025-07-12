import petModel from "../dao/models/Pet.js";
import userModel from "../dao/models/User.js";
import {
  generarMascotasMocking,
  generarUsersMocking,
} from "../services/mocking.service.js";

const crearMascota = (req, res) => {
    try {
        const { cantidad } = req.query;
        const num = Number(cantidad);

        if(isNaN(num) || num <= 0 || !Number.isInteger(num)) {
            return res.status(400).send({
                status: "error",
                message: "El parametro cantidad deber ser un entero positivo"
            })
        }
        const mascotas = generarMascotasMocking(num);
        res.send({ status: "Exitoso", payload: mascotas });
        
    } catch (error) {
        res.status(500).send({ status: "Error", message: error.message});
    }   
  
};

const crearUsuarios = (req, res) => {
    try {
        const { cantidad } = req.query;
        const num = Number(cantidad);

        if(isNaN(num) || num <= 0 || !Number.isInteger(num)) {
            return res.status(400).send({
                status: "error",
                message: "El parametro cantidad deber ser un entero positivo"
            })
        }

        const usuarios = generarUsersMocking(num);
        res.send({ status: "Exitoso", payload: usuarios });

    } catch (error) {
        res.status(500).send({ status: "Error", message: error.message});
    }
  
};

const generarDataMock = async (req, res) => {
  try {
    const { users = 0, pets = 0 } = req.query;

    const numUser = Number(users);
    const numPets = Number(pets);

    if (
        isNaN(numUser) || numUser <= 0 || !Number.isInteger(numUser) || 
        isNaN(numPets) || numPets <= 0 || !Number.isInteger(numPets)
    ) {
        return res.status(400).send({
            status: "error",
            message: "Los parametros user y pets deben ser numeros enteros positivos"
        })
    }
    const usuariosMock = generarUsersMocking(Number(users));
    const mascotasMock = generarMascotasMocking(Number(pets));

    const usuariosInsertados = await userModel.insertMany(usuariosMock);
    const mascotasInsertadas = await petModel.insertMany(mascotasMock);

    res.send({
      status: "success",
      users: usuariosInsertados.length,
      pets: mascotasInsertadas.length,
    });
  } catch (error) {
    res.status(500).send({ status: "Error", message: error.message });
  }
};

export default {
  crearMascota,
  crearUsuarios,
  generarDataMock,
};
