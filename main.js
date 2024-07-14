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
    const mainImg = document.getElementById('main-img');
    mainImg.classList.add('animated');

    setTimeout(() => {
        mainImg.classList.remove('animated');
    }, 500);

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
            showPopup("wow🤣 you are upgraded to level 2");
            localStorage.setItem(`level_${user.id}`, level);
        }
    }
});

document.getElementById('tap').addEventListener('click', () => {
    window.location.href = 'main.html';
});

document.getElementById('boost').addEventListener('click', () => {
    showPopup("በቅርቡ Boost system ሰርተን እንጨርሳለን, እስከዛ ከኛ ጋር ይሁኑ!");
});

document.getElementById('frens').addEventListener('click', () => {
    showPopup("To get referral link:\n1. Open the bot\n2. Click referral link button\n3. Get your referral link");
});

function showPopup(message) {
    const popup = document.getElementById('popup');
    popup.innerText = message;
    popup.classList.remove('hidden');
    popup.style.display = 'block';
    setTimeout(() => {
        popup.style.display = 'none';
    }, 5000);
}