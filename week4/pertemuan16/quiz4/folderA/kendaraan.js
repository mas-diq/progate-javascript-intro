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
    brocure() {
        return (`${this.info()}, ${this.spek()}. Bila berminat, harap hubungi 08123456789`);
    }
}

export default Kendaraan;