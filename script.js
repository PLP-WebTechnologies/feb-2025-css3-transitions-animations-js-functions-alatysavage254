const btn = document.getElementById('animateBtn');
const colorPicker = document.getElementById('colorPicker');

// Load color preference from localStorage
const savedColor = localStorage.getItem('btnColor');
if (savedColor) {
  btn.style.background = savedColor;
  colorPicker.value = savedColor;
}

// Animate button on click
btn.addEventListener('click', () => {
  btn.classList.add('animated');
  setTimeout(() => btn.classList.remove('animated'), 500);
});

// Save color preference and apply it
colorPicker.addEventListener('input', (e) => {
  const color = e.target.value;
  btn.style.background = color;
  localStorage.setItem('btnColor', color);
});