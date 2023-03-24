let darat = (str) => {
    arr = ["mobil", "motor", "bus"]
    console.log(`${str} selain itu, ada juga transportasi lain seperti ${arr[1]}, ${arr[0]} dan ${arr[2]}.`);
};

let udara = (str) => {
    arr = ["pesawat", "helicopter"]
    return darat(`${str} Tapi kali ini aku naik ${arr[1]}, dan kakak naik ${arr[0]}.`);
};

let air = () => {
    arr = ["perahu", "speedboat"]
    return udara(`Aku naik ${arr[0]}, tapi papah lebih suka ${arr[1]}.`);
};

air();