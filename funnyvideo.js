document.addEventListener("DOMContentLoaded", () => {

    const body = document.querySelector('body');
    const select = document.querySelector('.month');

    select.addEventListener('mouseover', () => {
        playBackgroundVideo();
    })

    function playBackgroundVideo() {
        const bgVideo = document.querySelector('#developers-video');
        bgVideo.play();
    }




})