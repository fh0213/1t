document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel-container');
    const images = document.querySelectorAll('.carousel-image');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    let currentIndex = 0;

    function showImage(index) {
        const offset = -index * 100;
        carousel.style.transform = `translateX(${offset}%)`;
    }

    function showNextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    function showPrevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    }

    nextButton.addEventListener('click', showNextImage);
    prevButton.addEventListener('click', showPrevImage);

    // 自动轮播，时间间隔增加到8秒
    let autoPlayInterval = setInterval(showNextImage, 8000);

    // 当用户手动切换图片时，重置自动播放计时器
    function resetAutoPlayInterval() {
        clearInterval(autoPlayInterval);
        autoPlayInterval = setInterval(showNextImage, 8000);
    }

    nextButton.addEventListener('click', resetAutoPlayInterval);
    prevButton.addEventListener('click', resetAutoPlayInterval);

    // 初始显示第一张图片
    showImage(0);
});
