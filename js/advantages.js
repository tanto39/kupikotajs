const advs = document.querySelectorAll('.adv');
const advText = document.querySelector('.adv-text');

const setActive = (oldActive, newActive, pText) => {
  oldActive.classList.remove('adv_active');
  newActive.classList.add('adv_active');
  advText.textContent = pText;
}

advs.forEach(function(item){
  item.addEventListener('mouseover', function(e) {
    const pText = item.querySelector('p').textContent;
    const oldActive = document.querySelector('.adv_active');
    setActive(oldActive, item, pText);
  });
});

// Кнопки влево вправо
const pushArrowLeft = () => {
  const oldActive = document.querySelector('.adv_active');

  const parentEl = oldActive.parentElement;
  if(!parentEl) return;

  const prevAdv = parentEl.previousElementSibling;
  if (!prevAdv) return;

  const newActive = prevAdv.querySelector('.adv');

  if(newActive) {
    const pText = newActive.querySelector('p').textContent
    setActive(oldActive, newActive, pText);
  }
};

const pushArrowRight = () => {
  const oldActive = document.querySelector('.adv_active');

  const parentEl = oldActive.parentElement;
  if(!parentEl) return;

  const nextAdv = parentEl.nextElementSibling;
  if (!nextAdv) return;

  const newActive = nextAdv.querySelector('.adv');
  
  if(newActive) {
    const pText = newActive.querySelector('p').textContent
    setActive(oldActive, newActive, pText);
  }
}

document.body.addEventListener('keyup', function (e) {
  let key = e.key;

  switch(key) {
    case "ArrowLeft":
      pushArrowLeft();
      break;
    case "ArrowRight":
      pushArrowRight();
      break;
  }
}, false);
