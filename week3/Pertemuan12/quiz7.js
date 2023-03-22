let simbol = ["A", "B", "C", "D", "E"];

for (let i = 0; i <= 5; i++) {
    for (let n = 0; n < 5 - i; n++) {
        console.log(`${simbol[i]}`);
    }
}