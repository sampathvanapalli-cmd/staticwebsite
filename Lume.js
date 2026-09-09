const cartCount = document.getElementById('cart-count');
let cartTotal = 0;

const buttons = document.querySelectorAll('.shopnow-btn');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    cartTotal += 1;
    cartCount.textContent = String(cartTotal);

    const originalText = button.textContent;
    button.textContent = 'Added';
    button.disabled = true;
    button.style.opacity = '0.8';

    window.setTimeout(() => {
      button.textContent = originalText;
      button.disabled = false;
      button.style.opacity = '1';
    }, 800);
  });
});
