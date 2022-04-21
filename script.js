document.addEventListener('DOMContentLoaded', () => {
  let stars = document.querySelectorAll('.reviewStars span');
  stars.forEach((item) => {
    item.addEventListener('click', function () {
      let rating = this.getAttribute('data-rating'),
        emoji = document.querySelector('.review_emoji'),
        title = document.querySelector('.review_title');
      setTimeout(() => {
        title.classList.add('animate');
        emoji.classList.add('animate');
        if (rating <= 2 && rating > 0) {
          title.innerHTML = 'Kecewa';
          emoji.innerHTML = '&#128545';
        }
        if (rating <= 4 && rating > 2) {
          title.innerHTML = 'Baik';
          emoji.innerHTML = '&#128512';
        }
        if (rating == 5) {
          title.innerHTML = 'Sangat Baik';
          emoji.innerHTML = '&#128525';
        }
      }, 50);
      title.classList.remove('animate');
      emoji.classList.remove('animate');
      return SetRatingStar(rating, stars);
    });
  });
});
function SetRatingStar(rating, stars) {
  let len = stars.length;
  for (var i = 0; i < len; i++) {
    if (i < rating) {
      stars[i].innerHTML = '<i class="fas fa-star"></i>';
      stars[i].style.color = '#ffd32a';
    } else {
      stars[i].innerHTML = '<i class="fas fa-star"></i>';
      stars[i].style.color = '#c8c8c8';
    }
  }
}
