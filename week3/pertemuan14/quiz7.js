let max = (a, b, c) => {
    if (a > b) {
        if (a > c) {
            console.log(`Nilai ${a} paling besar`);
        } else if (b > c) {
            console.log(`Nilai ${b} paling besar`);
        }
    } else if (b > c) {
        console.log(`Nilai ${b} paling besar`);
    } else {
        console.log(`Nilai ${c} paling besar`);
    }
}

max(3, 2, 1);
max(2, 3, 1);
max(1, 2, 3);