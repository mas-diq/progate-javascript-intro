class Kendaraan {
    constructor(roda, kursi) {
        this.roda = roda;
        this.kursi = kursi;
    }
    info() {
        console.log(`rodanya ada ${this.roda}`);
    }
}

class Mobil extends Kendaraan {
    constructor(roda, kursi, harga) {
        super(roda, kursi);
        this.harga = harga
    }
    info() {
        console.log(`Kursinya ada ${this.kursi}`);
    }
}

let avanza = new Mobil(4, 2, 250);
console.log(avanza);