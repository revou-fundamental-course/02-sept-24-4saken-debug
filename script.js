document.getElementById('calculateBtn').addEventListener('click', function () {
    // Ambil nilai input dari form
    let base = parseFloat(document.getElementById('base').value);
    let height = parseFloat(document.getElementById('height').value);
    let sideA = parseFloat(document.getElementById('sideA').value);
    let sideB = parseFloat(document.getElementById('sideB').value);

    // Validasi Input: pastikan semua input terisi dan merupakan angka
    if (isNaN(base) || isNaN(height) || isNaN(sideA) || isNaN(sideB) || base <= 0 || height <= 0 || sideA <= 0 || sideB <= 0) {
        alert("Pastikan semua input diisi dengan benar dan merupakan angka positif.");
        return;
    }

    // Hitung Luas Segitiga
    let area = 0.5 * base * height;

    // Hitung Keliling Segitiga
    let perimeter = base + sideA + sideB;

    // Tampilkan Hasil di Halaman
    document.getElementById('areaResult').textContent = `Luas Segitiga: ${area}`;
    document.getElementById('perimeterResult').textContent = `Keliling Segitiga: ${perimeter}`;
    
    // Pastikan bagian hasil ditampilkan
    document.getElementById('resultSection').style.display = "block";
});

document.getElementById('resetBtn').addEventListener('click', function () {
    // Reset nilai input
    document.getElementById('base').value = '';
    document.getElementById('height').value = '';
    document.getElementById('sideA').value = '';
    document.getElementById('sideB').value = '';

    // Sembunyikan bagian hasil
    document.getElementById('resultSection').style.display = "none";
});
