function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  span: document.querySelector('.color'),
  button: document.querySelector('.change-color'),
};
const { span, button } = refs;

button.addEventListener(
  'click',
  () => (span.style.backgroundColor = getRandomHexColor())
);
