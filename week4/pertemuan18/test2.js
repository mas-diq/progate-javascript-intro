let raport = (callback) => {
    console.log("berikut hasil nilai raport");
    callback(92, 32);
}

raport((nilai1, nilai2) => {
    console.log(`Nilai - 1 anda ${nilai1}`);
    console.log(`Nilai - 2 anda ${nilai2}`);
})


