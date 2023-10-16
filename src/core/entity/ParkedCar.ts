export default class ParkedCar {
    code: any;
    plate: any;
    date: any;

    constructor(code, plate, date) {
        if (!/[A-Z]{3}-[0-9]{4}/.test(plate)) throw new Error("Invalid plate");
        this.code = code;
        this.plate = plate;
        this.date = date;
    }
}