document.addEventListener('DOMContentLoaded', () => {
  console.log('Portfolio loaded!');
});

const skinImg = document.querySelector('.skin-img');
const loader = document.querySelector('.skin-loader');

skinImg.addEventListener('loadstart', () => {
  skinImg.classList.add('loading');
});

skinImg.addEventListener('load', () => {
  skinImg.classList.remove('loading');
});

skinImg.addEventListener('error', () => {
  skinImg.classList.remove('loading');
});


setTimeout(() => {
  if (!skinImg.complete) {
    skinImg.src = 'https://minotar.net/armor/body/Steve/100.png';
  }
}, 5000);
