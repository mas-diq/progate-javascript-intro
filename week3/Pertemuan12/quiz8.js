let simbol = ["*", "|"];
let nilai = 5

for (let i = 0; i < nilai; i++) {
    for (let j = nilai; j > i; j--) {
        process.stdout.write(simbol[0]);
    } console.log("");
}

for (let k = 0; k < nilai; k++) {
    for (let l = 0; l !== k + 1; l++) {
        process.stdout.write(simbol[1]);
    } console.log("");
}