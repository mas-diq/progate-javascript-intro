let phrase2 = (phrase1) => {
    phrase1();
    console.log("panas matahari sangat menyengat,");
}

phrase2(() => {
    console.log("Hari ini cerah banget,");
})