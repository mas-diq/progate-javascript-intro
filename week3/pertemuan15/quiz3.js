class KendaraanDarat {
    constructor() {
        this.nama = "Mobil";
        this.roda = 4;
        this.harga = 250;
    }
}

class KendaraanLaut {
    constructor() {
        this.nama = "Perahu";
        this.roda = 0;
        this.harga = 150;
    }
}

let mobil = new KendaraanDarat();
let perahu = new KendaraanLaut();

console.log(`${mobil.nama} - ${mobil.harga}`);
console.log(`${perahu.nama} - ${perahu.harga}`);