let kendaraan = ["Mobil", "Motor", "Bus", "Truk", "Pesawat"];
let harga = ["Murah", "Standar", "Mahal"]

kendaraan.forEach((k) => {
    harga.forEach((h) => {
        console.log(`Kendaraan ${k} ada yang - ${h}`);
    })
    console.log("------");
})