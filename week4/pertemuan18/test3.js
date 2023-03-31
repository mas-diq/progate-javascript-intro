let nilaiAkhir = (callback) => {
    console.log("Nilai akhir kamu adalah");
    callback(54, 64, 36, 76, 87, 100);
    callback(20, 98, 36, 100, 87, 100, "Beno");
};

nilaiAkhir((n1, n2, n3, n4, n5, n6, nama = "joko") => {
    console.log(`nilai akhir - ${nama}`);
    console.log((n1 + n2 + n3 + n4 + n5 + n6) / 6);
});