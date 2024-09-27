let saldo = 0;

function tambahSaldo() {
    let tambahUang = prompt("Masukkan jumlah uang yang ingin ditambah: ");
    tambahUang = parseInt(tambahUang);

    if (isNaN(tambahUang) || tambahUang <= 0) {
        alert("Masukkan angka yang valid!");
    } else {
        saldo += tambahUang;
        document.getElementById("saldo").innerHTML = saldo;
        alert("Saldo berhasil ditambahkan!");
    }
}

function kurangiSaldo() {
    let kurangiUang = prompt("Masukkan jumlah uang yang ingin dikurangi: ");
    kurangiUang = parseInt(kurangiUang);

    if (isNaN(kurangiUang) || kurangiUang <= 0) {
        alert("Masukkan angka yang valid!");
    } else {
        if (kurangiUang > saldo) {
            alert("Transaksi gagal, Saldo tidak cukup!");
        } else {
            saldo -= kurangiUang;
            document.getElementById("saldo").innerHTML = saldo;
            alert("Saldo berhasil dikurangi!");
        }
    }
}
