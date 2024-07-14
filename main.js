let balance = 0;
let level = 1;

document.addEventListener('DOMContentLoaded', () => {
    const user = window.Telegram.WebApp.initDataUnsafe.user;

    if (user) {
        const storedBalance = localStorage.getItem(`balance_${user.id}`);
        const storedLevel = localStorage.getItem(`level_${user.id}`);

        if (storedBalance !== null) {
            balance = parseInt(storedBalance, 10);
        }

        if (storedLevel !== null) {
            level = parseInt(storedLevel, 10);
        }

        document.getElementById('balance-value').innerText = balance;
    } else {
        alert("Unable to get Telegram user info.");
    }
});

document.getElementById('main-img').addEventListener('click', () => {
    if (level === 1) {
        balance += 1;
    } else if (level === 2) {
        balance += 2;
    }
    document.getElementById('balance-value').innerText = balance;

    const user = window.Telegram.WebApp.initDataUnsafe.user;
    if (user) {
        localStorage.setItem(`balance_${user.id}`, balance);

        if (balance >= 10 && level === 1) {
            level = 2;
            showPopup();
            localStorage.setItem(`level_${user.id}`, level);
        }
    }
});

document.getElementById('tap').addEventListener('click', () => {
    window.location.href = 'main.html';
});

function showPopup() {
    const popup = document.getElementById('popup');
    popup.classList.remove('hidden');
    popup.style.display = 'block';
    setTimeout(() => {
        popup.style.display = 'none';
    }, 3000);
}