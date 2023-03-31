let dua = (callback) => {
    console.log("cetak dalam function dua");
    callback();
}

// Cara 1
// dua(satu);

// cara 2
dua(() => {
    console.log("cetak dalam function satu");
});