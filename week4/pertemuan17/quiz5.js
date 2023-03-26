let mahasiswa = [
    { nim: "00012345", nama: "Jajang", alamat: "Tangerang", umur: 21 },
    { nim: "00012346", nama: "Jaka", alamat: "Medan", umur: 22 },
    { nim: "00012347", nama: "Mamat", alamat: "Surabaya", umur: 23 },
    { nim: "00012348", nama: "Angga", alamat: "Magelang", umur: 21 },
    { nim: "00012349", nama: "Sahrul", alamat: "Aceh", umur: 21 },
    { nim: "00012350", nama: "Aldi", alamat: "Jakarta", umur: 21 },
];

let namaPanjang = mahasiswa.map((data) => {
    return (data.nama + " Panjaitan");
});

namaPanjang.forEach(nama => {
    mahasiswa.map((data) => {
        data.nama = nama
    })
});

console.log(mahasiswa);