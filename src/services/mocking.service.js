import { faker } from "@faker-js/faker";
import bcrypt from "bcrypt";


export function generarMascotasMocking(cantidad) {
    const mascotas = [];

    for (let i = 0; i < cantidad; i++) {
        mascotas.push({
            name: faker.animal.type(),
            specie: faker.animal.type(),
            birthDate: faker.date.past({years: 10}),
            adopted: faker.datatype.boolean(),
        })
    }
    
    return mascotas;
}


export function generarUsersMocking(cantidad) {
    const users = [];

    for (let i = 0; i < cantidad; i++ ) {
        const hashedPassword = bcrypt.hashSync("coder123", 10)
        users.push({
            first_name: faker.person.firstName(),
            last_name: faker.person.lastName(),
            email: faker.internet.email(),
            password: hashedPassword,
            role: faker.helpers.arrayElement(["user", "admin"]),
            pets: []
        })
    } 

    return users;
}