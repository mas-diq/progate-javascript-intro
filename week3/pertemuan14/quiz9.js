let n = true;

let check = (nilai) => {
    return ((true || false) && (nilai || false));
};

if (check(n)) {
    console.log("Jawabannya Benar");
} else {
    console.log("Jawabannya Salah");
}