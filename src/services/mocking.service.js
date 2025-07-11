import { faker } from "@faker-js/faker";
import bcrypt from "bcrypt";

export function generarMascotasMocking(cantidad) {
  try {
    // Validamos que el numero sea un entero positivo
    if (
      isNaN(cantidad) ||
      cantidad <= 0 ||
      !Number.isInteger(Number(cantidad))
    ) {
      throw new Error("La cantidad debe ser un número entero positivo");
    }

    const mascotas = [];

    for (let i = 0; i < cantidad; i++) {
      mascotas.push({
        name: faker.animal.type(),
        specie: faker.animal.type(),
        birthDate: faker.date.past({ years: 10 }),
        adopted: faker.datatype.boolean(),
      });
    }

    return mascotas;
  } catch (error) {
    throw new Error(`Error al generar mascotas: ${error.message}`);
  }
}

export function generarUsersMocking(cantidad) {
  try {
    if (
      isNaN(cantidad) ||
      cantidad <= 0 ||
      !Number.isInteger(Number(cantidad))
    ) {
      throw new Error("La cantidad debe ser un número entero positivo");
    }
    const users = [];

    for (let i = 0; i < cantidad; i++) {
      const hashedPassword = bcrypt.hashSync("coder123", 10);
      users.push({
        first_name: faker.person.firstName(),
        last_name: faker.person.lastName(),
        email: faker.internet.email(),
        password: hashedPassword,
        role: faker.helpers.arrayElement(["user", "admin"]),
        pets: [],
      });
    }

    return users;
  } catch (error) {
    throw new Error(`Error al generar usuarios: ${error.message}`);
    
  }
}
