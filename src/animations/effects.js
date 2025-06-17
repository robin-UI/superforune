const pushBtn = document.querySelectorAll('.push-btn');

pushBtn.forEach(arrow => {
    arrow.addEventListener('click', function() {
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1.1)';
        }, 100);
    });
});