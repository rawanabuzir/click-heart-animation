function startAnimation() {
    const messageElement = document.getElementById('message');
    const dayMessageElement = document.getElementById('dayMessage');

    messageElement.style.display = 'block';
    dayMessageElement.style.display = 'block';

    messageElement.style.animation = 'fadeInBounce 1s forwards';
    dayMessageElement.style.animation = 'fadeInBounce 1s forwards';

    const existingHearts = document.querySelectorAll('.small-heart');
    existingHearts.forEach(heart => heart.remove());

    for (let i = 0; i < 100; i++) {
        const smallHeart = document.createElement('div');
        smallHeart.className = 'small-heart moving';
        document.body.appendChild(smallHeart);

        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;

        smallHeart.style.left = `${x}px`;
        smallHeart.style.top = `${y}px`;

        smallHeart.style.animationDelay = `${Math.random() * 10}s`;

        setTimeout(() => {
            smallHeart.style.opacity = '0';
            setTimeout(() => smallHeart.remove(), 500);
        }, 10000);
    }
}
