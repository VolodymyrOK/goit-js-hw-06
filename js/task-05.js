const refs = {
  input: document.querySelector('#name-input'),
  span: document.querySelector('#name-output'),
};

const { input, span } = refs;

input.addEventListener('change', event =>
  !event.currentTarget.value
    ? (span.textContent = 'Anonymous')
    : (span.textContent = event.currentTarget.value)
);
