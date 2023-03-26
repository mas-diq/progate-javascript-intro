class Kendaraan {
    constructor(kendaraan, merek, tipe, kecepatan) {
        this.kendaraan = kendaraan;
        this.merek = merek;
        this.tipe = tipe;
        this.kecepatan = kecepatan
    }
    info() {
        return (`${this.merek} merupakan ${this.kendaraan} dengan tipe ${this.tipe}`);
    }
    spek() {
        return (`${this.merek} ini memiliki kecepatan ${this.kecepatan} km/jam`)
    }
}

let avanza = new Kendaraan("Mobil", "Avanza", "S", 150);
let mio = new Kendaraan("Motor", "Mio", "N", 100);

export { avanza, mio };