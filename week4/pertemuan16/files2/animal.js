class Animal {
    constructor(nama, umur, jenis) {
        this.nama = nama;
        this.umur = umur;
        this.jenis = jenis;
    }
    info() {
        console.log(`${this.nama} - ${this.umur} - ${this.jenis}`);
    }
}

let dog1 = new Animal("dog", 4, "chihuahua");
let dog2 = new Animal("dog", 4, "poodle");
export { dog1, dog2 };