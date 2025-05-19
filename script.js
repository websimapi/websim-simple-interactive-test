const interactiveElement = document.getElementById('interactive-element');

if (interactiveElement) {
  interactiveElement.addEventListener('click', () => {
    interactiveElement.textContent = 'Clicked!';
    // You can add more complex interactions here later
  });
}

