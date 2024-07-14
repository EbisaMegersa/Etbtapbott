let balance = 0;
let level = 1;

document.getElementById('main-img').addEventListener('click', () => {
    if (level === 1) {
        balance += 1;
    } else if (level === 2) {
        balance += 2;
    }
    document.getElementById('balance-value').innerText = balance;

    if (balance >= 10 && level === 1) {
        level = 2;
        showPopup();
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

// Add event listeners for 'frens' and 'boost' buttons as needed