const boxes = document.querySelectorAll('.box');
const scrollContainer = document.querySelector('.scroll-animation-content');
window.addEventListener('scroll', checkBoxes);

checkBoxes();

// function checkBoxes() {
//   const triggerBottom =
//     scrollContainer.getBoundingClientRect().top + window.scrollY;

//   console.log('trigger bottom', triggerBottom);

//   boxes.forEach((box) => {
//     const boxTop = box.getBoundingClientRect().top;

//     console.log('boxtop', boxTop);

//     if (boxTop < triggerBottom) {
//       box.classList.add('show');
//     } else {
//       box.classList.remove('show');
//     }
//   });
// }

function checkBoxes() {
  const triggerBottom = (window.innerHeight / 5) * 4;

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      box.classList.add('show');
    } else {
      box.classList.remove('show');
    }
  });
}
