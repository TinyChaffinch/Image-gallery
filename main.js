var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

var btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

for (var i = 1; i <= 5; i++) {
  var newImage = document.createElement('img');
  newImage.setAttribute('src', 'images/pic' + i + '.jpg');
  newImage.addEventListener('click', e => displayedImage.src = e.target.src);
  thumbBar.appendChild(newImage);
}

btn.addEventListener('click', () => {
  if (btn.getAttribute('class') === 'dark') {
    btn.setAttribute('class', 'light');
    btn.textContent = 'Светлее';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  } else if (btn.getAttribute('class') === 'light') {
    btn.setAttribute('class', 'dark');
    btn.textContent = 'Темнее';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
}
)