let mahasiswa = [
    { nim: "00012345", nama: "Jajang", alamat: "Tangerang" },
    { nim: "00012346", nama: "Jaka", alamat: "Medan" },
    { nim: "00012347", nama: "Mamat", alamat: "Surabaya" },
    { nim: "00012348", nama: "Angga", alamat: "Magelang" },
    { nim: "00012349", nama: "Sahrul", alamat: "Aceh" },
    { nim: "00012350", nama: "Aldi", alamat: "Jakarta" },
];

let cariNim = mahasiswa.find((nim) => {
    return nim.nim === "00012349";
})

console.log(`Hasilnya adalah ${cariNim.nama} memiliki NIM : ${cariNim.nim} `);
console.log(`dan berasal dari daerah ${cariNim.alamat}`);