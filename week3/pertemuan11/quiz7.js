let n = 10;
let m = 20;
let o = 30;

switch (o) {
    case 10:
        if (n > 4) {
            if (m > n || m > o) {
                console.log("cetak disini");
            } else {
                console.log("cetak disana");
            }
        } else {
            console.log("cetak kemari");
        }
        break;

    case 30:
        if (o > m && o > m) {
            console.log("pusing :)");
        }
        break;

    default:
        console.log("error bang!");
        break;
}