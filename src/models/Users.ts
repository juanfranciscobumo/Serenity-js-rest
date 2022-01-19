export class Users {
    private nombre: string;
    private trabajo: string;

    public getTrabajo(): string {
        return this.trabajo;
    }
    public setTrabajo(trabajo: string) {
        this.trabajo = trabajo;
    }
    public getNombre(): string {
        return this.nombre;
    }
    public setNombre(nombre: string) {
        this.nombre = nombre;
    }
}