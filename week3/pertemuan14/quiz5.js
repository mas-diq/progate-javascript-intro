let cetakGenap = (g) => {
    return `Bilangan Genap - ${g}`;
}

let cetakKelipatanTiga = (t) => {
    return `Kelipatan Tiga - ${t}`;
}

let nilai = [2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < nilai.length; i++) {
    if (nilai[i] % 2 == 0) {
        console.log(cetakGenap(nilai[i]));
    } else if (nilai[i] % 3 == 0) {
        console.log(cetakKelipatanTiga(nilai[i]));
    } else {
        console.log(nilai[i]);
    }
}