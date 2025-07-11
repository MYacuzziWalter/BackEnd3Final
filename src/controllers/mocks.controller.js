import petModel from "../dao/models/Pet.js";
import userModel from "../dao/models/User.js";
import { generarMascotasMocking, generarUsersMocking } from "../services/mocking.service.js";

const crearMascota =  (req, res) => {
    const mascotas = generarMascotasMocking(5);
    res.send({status: "Exitoso", payload: mascotas});

}

const crearUsuarios = (req, res) => {
    const usuarios = generarUsersMocking(5);
    res.send({status: "Exitoso", payload: usuarios});
}

const generarDataMock = async (req, res) => {
    try {
        const {users = 0, pets = 0} = req.query;
         const usuariosMock = generarUsersMocking(Number(users));
         const mascotasMock = generarMascotasMocking(Number(pets));

         const usuariosInsertados = await userModel.insertMany(usuariosMock);
         const mascotasInsertadas = await petModel.insertMany(mascotasMock);

         res.send({
            status: "success",
            users: usuariosInsertados.length,
            pets: mascotasInsertadas.length
         });
    } catch (error) {
        res.status(500).send({status: "Error", message: error.message})
    }

}


export default {
    crearMascota,
    crearUsuarios,
    generarDataMock
}