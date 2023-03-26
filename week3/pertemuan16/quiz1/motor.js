import Kendaraan from "./kendaraan.js";

class Motor extends Kendaraan {
    info() {
        console.log("Merupakan kelas motor");
    }
}

let mio = new Motor();
mio.info();