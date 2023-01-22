export class Contact {
    name = '';
    lastname = '';
    number = 0;
    conected = false;

    constructor (name, lastname, number, conected) {
        this.name = name;
        this.lastname = lastname;
        this.number = number;
        this.conected = conected;
    }
}