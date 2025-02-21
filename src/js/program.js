document.querySelectorAll('.program-list-item').forEach(item => {
  const openText = item.querySelector('.open-text');

  item.addEventListener('click', () => {
    item.classList.toggle('open');
    item.classList.toggle('active');

    if (item.classList.contains('active')) {
      openText.textContent = 'Закрити опис';
    } else {
      openText.textContent = 'Відкрити опис';
    }
  });
});
