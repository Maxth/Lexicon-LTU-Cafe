const hot = document.getElementById('hot-link');
const juicy = document.getElementById('juicy-link');
const cosy = document.getElementById('cosy-link');

const hotSection = document.getElementById('hot');
const juicySection = document.getElementById('juicy');
const cosySection = document.getElementById('cosy');

hot.addEventListener('click', () => {
  hotSection.scrollIntoView({behavior: 'smooth'});
});
juicy.addEventListener('click', () => {
  juicySection.scrollIntoView({behavior: 'smooth'});
});
cosy.addEventListener('click', () => {
  cosySection.scrollIntoView({behavior: 'smooth'});
});
