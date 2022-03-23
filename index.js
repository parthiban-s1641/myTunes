const menuButton = document.querySelector('.menu-icon');
const navList = document.querySelector('.nav-list');
// const bar = document.querySelector('.bar');

const trialBtn = document.querySelector('.trialBtn');
const audio = document.querySelector('.audio');

if (trialBtn) {
  trialBtn.addEventListener('click', function (e) {
    e.preventDefault();
    audio.setAttribute('autoplay', true);
    // audio.setAttribute('loop', true);
    audio.setAttribute('src', './music/Billa-Theme-Music.mp3');
  });

  trialBtn.addEventListener('dblclick', function (e) {
    e.preventDefault();
    console.log('double click');
    audio.setAttribute('autoplay', false);
    audio.setAttribute('src', '.');

    // audio.setAttribute('loop', false);
  });
}

if (menuButton) {
  menuButton.addEventListener('click', function (e) {
    e.preventDefault();
    console.log('click');
    navList.classList.toggle('active');
    menuButton.classList.toggle('active');
  });
}
