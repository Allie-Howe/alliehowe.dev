window.onload = () => {
  const cursor = document.getElementById('cursor')
  const cursorOffset = cursor.getBoundingClientRect().width / 2;

  const buttons = document.querySelectorAll('.button')

  document.addEventListener('mousemove', (e) => {
    cursor.style.top = `${e.clientY - cursorOffset}px`
    cursor.style.left = `${e.clientX - cursorOffset}px`

    isOnButton(buttons, e)
      ? cursor.classList.add('hover')
      : cursor.classList.remove('hover')
  })
};

function isOnButton(buttons, e) {
  for (const button of buttons) {
    const rect = button.getBoundingClientRect();

    const horizontalOverlap = e.clientX > rect.left && e.clientX <= rect.left + rect.width;
    const verticalOverlap = e.clientY > rect.top && e.clientY <= rect.top + rect.height;

    if (horizontalOverlap && verticalOverlap) return true;
  }
}
