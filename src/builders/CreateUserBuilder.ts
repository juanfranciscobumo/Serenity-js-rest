import { CreateUserInterface } from "../interfaces/createUserInterface";
import { Users } from "../models/Users";

export class CreateUserBuilder implements CreateUserInterface {
    private nombre: string;
    private trabajo: string;
    constructor(nombre: string) {
        this.nombre = nombre;
    }
    
    static withName(nombre: string) {
        return new CreateUserBuilder(nombre);
    }

    public andJob(trabajo: string) {
        this.trabajo = trabajo;
        return this.build();
    }
    build(): Users {
        var users = new Users();
        users.setNombre(this.nombre);
        users.setTrabajo(this.trabajo)
        return users;
    }
}