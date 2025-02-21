document.getElementById('read-more-btn').addEventListener('click', function () {
  var moreText = document.getElementById('more-text');
  var btn = document.getElementById('read-more-btn');

  if (
    moreText.style.display === 'none' ||
    moreText.classList.contains('hidden')
  ) {
    moreText.style.display = 'inline';
    moreText.classList.remove('hidden');
    btn.textContent = 'Сховати';
  } else {
    moreText.style.display = 'none';
    moreText.classList.add('hidden');
    btn.textContent = 'Читати далі...';
  }
});
