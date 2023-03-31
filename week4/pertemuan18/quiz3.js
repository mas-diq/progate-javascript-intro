let perkenalan = (callback) => {
    callback("Jajang", 21);
    callback("mamat", 32);
    callback("aldi", 19);
}

perkenalan((nama, umur) => {
    console.log(`Halo nama saya ${nama}, umur saya ${umur}`);
});