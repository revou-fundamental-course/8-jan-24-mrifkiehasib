function hitungLuasDanKeliling() {

    // Mendapatkan nilai panjang sisi dari input
    var sisi = document.getElementById("squareSide").value;
    
    if (sisi === "" || sisi == 0) {
        alert("Masukan Nomer dengan benar")
    } else {
    // Menghitung luas persegi
    var luas = sisi * sisi;

    // Menghitung keliling persegi
    var keliling = 4 * sisi;

    // Menampilkan hasil luas dan keliling
    document.getElementById("rumusLuas").innerHTML = "Rumus Luas = S x S" ;
    document.getElementById("isiLuas").innerHTML = "Luas = <strong>" + sisi + " x " + sisi + "</strong>";
    document.getElementById("hasilLuasKeliling").innerHTML = "Jadi Luas Persegi adalah <strong>" + luas + "</strong>" + " dan Keliling persegi adalah <strong>" + keliling + "</strong>";
    document.getElementById("rumusKeliling").innerHTML = "Rumus Keliling = 4 x S" ;
    document.getElementById("isiKeliling").innerHTML = "Keliling = <strong> 4 " + " x " + sisi + "</strong>" ;
    }
}