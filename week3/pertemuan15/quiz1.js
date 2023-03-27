let mahasiswa = {
    nama: "Joko",
    kegiatan: () => {
        console.log("kuliah, pulang");
    },
    nilai: (n) => {
        console.log(`IPK Sebesar ${n}`);
    }
}

console.log(mahasiswa.nama);
mahasiswa.kegiatan();
mahasiswa.nilai(3.4);