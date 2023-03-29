let mahasiswa = [
    { nim: "00012345", nama: "Jajang", alamat: "Tangerang", umur: 21 },
    { nim: "00012346", nama: "Jaka", alamat: "Medan", umur: 22 },
    { nim: "00012347", nama: "Mamat", alamat: "Surabaya", umur: 23 },
    { nim: "00012348", nama: "Angga", alamat: "Magelang", umur: 21 },
    { nim: "00012349", nama: "Sahrul", alamat: "Aceh", umur: 21 },
    { nim: "00012350", nama: "Aldi", alamat: "Jakarta", umur: 21 },
];

let umur = mahasiswa.filter(data => {
    return data.umur < 22;
});

mahasiswa.forEach(data => {
    for (let i = 0; i < umur.length; i++) {
        if (data.nama === umur[i].nama) {
            data.nama = "Muhammad " + umur[i].nama
        }
    }
})

console.log(mahasiswa);