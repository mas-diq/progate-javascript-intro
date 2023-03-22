let makanan = ["nasgor", "nasdang", "nasduk"];
let minuman = ["jus jeruk", "jus apel", "jus mangga"];

for (let i = 0; i <= 2; i++) {
    if (i % 2 == 0) {
        console.log(`Hari ini makannya ${makanan[i]}, minumnya ${minuman[i]}`);
    } else {
        console.log(`Hari ini minum ${minuman[i]}, dan makannya ${makanan[i]}`);
    }
}