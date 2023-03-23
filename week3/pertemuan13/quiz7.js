let europe = [
    { negara: "Belanda", ibuKota: "Amsterdam" },
    { negara: "Bulgaria", ibuKota: "Sofia" },
    { negara: "Belgia", ibuKota: "Brusel" },
];

let africa = [
    { negara: "Jamaika", ibuKota: "Kingston" },
    { negara: "Gambia" },
];

for (let i = 0; i < africa.length; i++) {
    if (africa[i].ibuKota == undefined) {
        console.log("data tidak ditemukan");
    } else {
        console.log(africa[i].ibuKota);
    }
}