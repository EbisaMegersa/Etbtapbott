let progress = 0;

function updateProgress() {
    progress += 1;
    document.querySelector('.inside-circle').innerText = `${progress}%`;
    if (progress >= 50) {
        document.querySelector('.progress-mask.half .fill').style.display = 'none';
        document.querySelector('.progress-mask.full').style.clip = 'rect(auto, auto, auto, auto)';
    }
    if (progress >= 100) {
        window.location.href = 'main.html';
    }
}

setInterval(updateProgress, 50);