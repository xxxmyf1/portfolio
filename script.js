document.addEventListener('DOMContentLoaded', () => {
  console.log('Portfolio loaded!');
});



const skinImg = document.querySelector('.skin-img');
const skinNickname = 'xxxmyf1';

я
function loadSkinImage() {
  const cachedUrl = localStorage.getItem('skinImageUrl');
  
  if (cachedUrl) {
    skinImg.src = cachedUrl;
  } else {

    const loadPromise = new Promise((resolve) => {
      const timeout = setTimeout(() => {
        console.log('Crafatar timeout - используем заглушку');
        skinImg.src = 'https://crafatar.com/renders/body/Steve?scale=6&overlay';
        resolve();
      }, 3000); 

      skinImg.onload = () => {
        clearTimeout(timeout);
        localStorage.setItem('skinImageUrl', skinImg.src);
        resolve();
      };
    });
  }
}

document.addEventListener('DOMContentLoaded', loadSkinImage);
