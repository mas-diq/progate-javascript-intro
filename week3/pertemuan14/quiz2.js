let kendaraan = () => {
    console.log("Berikut merupakan list kendaraan");
    rodaEmpat();
    rodaDua();
}

let rodaEmpat = () => {
    let arr = ["mobil", "bus", "truk"]
    console.log(`${arr[0]}, - ${arr[1]} - ${arr[2]}`);
}

let rodaDua = () => {
    let arr = ["motor", "sepeda"]
    console.log(`${arr[0]}, - ${arr[1]}`);
}

kendaraan();