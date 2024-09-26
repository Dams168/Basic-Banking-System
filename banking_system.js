class bankAccount {
    constructor(saldo) {
        this.saldo = saldo;
    }
    displaySaldo() {
        document.getElementById("saldo").innerHTML = this.saldo;
    }

    async deposit(amount) {
        amount = parseInt(amount);
        if (isNaN(amount) || amount <= 0) {
            alert("Masukkan angka yang valid!");
        } else {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            this.saldo += amount;
            this.displaySaldo();
            alert(`Saldo Berhasil Ditambahkan sebesar ${amount}!`);
        }
    }

    async withdraw(amount) {
        amount = parseInt(amount);
        if (isNaN(amount) || amount <= 0) {
            alert("Masukkan angka yang valid!");
        } else if (amount > this.saldo) {
            alert("Saldo anda tidak cukup!");
        } else {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            this.saldo -= amount;
            this.displaySaldo();
            alert(`Saldo Berhasil Dikurangi sebesar ${amount}!`);
        }
    }
}

class myAccount extends bankAccount {
    constructor(saldo) {
        super(saldo);
    }
    checkSaldo() {
        super.displaySaldo();
    }
}

const account = new myAccount(0);
account.checkSaldo();

document.getElementById("deposit").addEventListener("click", () => {
    const amount = prompt("Masukkan jumlah saldo yang ingin ditambahkan:");
    account.deposit(amount);
});

document.getElementById("withdraw").addEventListener("click", () => {
    const amount = prompt("Masukkan jumlah saldo yang ingin ditarik:");
    account.withdraw(amount);
})


