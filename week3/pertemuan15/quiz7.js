class Kendaraan {
    constructor(nama, roda) {
        this.nama = nama;
        this.roda = roda
    }

    selamat() {
        console.log(`Selamat anda mendapatkan ${this.nama}!`);
    }

    info() {
        this.selamat();
        console.log(`${this.nama} anda memiliki ${this.roda} roda`);
    }
}

class Mobil extends Kendaraan {
}

let avanza = new Mobil("mobil", 4);
avanza.info();