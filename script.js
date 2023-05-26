const questions = document.querySelectorAll('.question');

questions.forEach(question => {
  question.addEventListener('click', () => {
    question.classList.toggle('active');
    const answer = question.nextElementSibling;
    const arrow = question.querySelector('.arrow');
    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;
      arrow.classList.remove('rotate');
    } else {
      answer.style.maxHeight = answer.scrollHeight + 'px';
      arrow.classList.add('rotate');
    }
  });
});
const arrow = document.querySelector('.arrow');
arrow.style.transition = 'transform 0.5s';

