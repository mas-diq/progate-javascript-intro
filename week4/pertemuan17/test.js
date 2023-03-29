let kendaraan = [
    { id: 1, nama: "Avanza", harga: 200 },
    { id: 2, nama: "Xenia", harga: 150 },
    { id: 3, nama: "Beat", harga: 20 },
    { id: 4, nama: "Vespa", harga: 25 },
    { id: 5, nama: "Mio", harga: 15 },
]
let diskon = kendaraan.map(kendaraan => {
    return (kendaraan.harga * 0.75);
});

for (let i = 0; i < diskon.length; i++) {
    console.log(`${diskon[i]} Juta`);
}