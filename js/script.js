const header = document.querySelector('.header');
const headerHeight = header.scrollHeight;

console.log(headerHeight);

document.addEventListener('scroll', (e) => {
  console.dir(e);
});
