import { faker } from "@faker-js/faker";
import bcrypt from "bcrypt";





export function generarMascotasMocking(cantidad) {
    const mascotas = [];

    for (let i = 0; i < cantidad; i++) {
        pets.push({
            name: faker.animal.type,
            specie: faker.animal.type,
            age: faker.number.int({min: 1, max: 15})
        })
    }
    
    return pets;
}


export function generarUsersMocking(cantidad) {
    const users = [];

    for (let i = 0; i < cantidad; i++ ) {
        const hashedPassword = bcrypt.hashSync("coder123", 10)
        users.push({
            first_name: faker.person.firstName(),
            last_name: faker.person.lastName(),
            email: faker.person.email(),
            password: hashedPassword,
            role: faker.helpers.arrayElement(["user", "admin"]),
            pets: []
        })
    } 

    return users;
}