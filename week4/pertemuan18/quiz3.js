let perkenalan = (callback) => {
    callback("Jajang", 21);
}

perkenalan((nama, umur) => {
    console.log(`Halo nama saya ${nama}, umur saya ${umur}`);
})