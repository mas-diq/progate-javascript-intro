let mahasiswa = (nama, nim) => {
    console.log(`Nama : ${nama}`);
    console.log(`NIM : ${nim}`);
    console.log("-------------");
}

let alamat = (jalan, kota) => {
    console.log(`${jalan} - ${kota}`);
}

mahasiswa("Jajang", 123456);
alamat("beringin", "tangerang");
mahasiswa("Jaka", 123457);
alamat("mt haryono", "jakarta");