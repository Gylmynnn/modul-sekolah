function showBab(number) {
    document.getElementById("daftar-isi").classList.add("hidden");
    document.querySelectorAll("section").forEach(s => s.classList.add("hidden"));
    document.getElementById("bab" + number).classList.remove("hidden");
}

function backToMenu(number) {
    document.getElementById("bab" + number).classList.add("hidden");
    document.getElementById("daftar-isi").classList.remove("hidden");
}
