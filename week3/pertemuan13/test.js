let char = {
    name: "jaka",
    age: 12,
    tim: {
        inggris: ["MANU", "MANCIT"],
        indonesia: [
            { "Persija": "Jakarta" },
            { "Persita": "Tangerang" }
        ]
    }
}

console.log(char.tim.inggris[0]);
console.log(char.tim.indonesia[1]);
console.log(char.tim.indonesia[1].Persita);