let currentPage = 0;
const pages = document.querySelectorAll('.page');
const typewriterElement = document.querySelector('.typewriter');
const introText = "Hello! I'm Hannah Mary Sapio";
let typingIndex = 0;
let typed = false;

function showPage(index) {
  pages.forEach((page, i) => {
    page.classList.remove('active');
  });
  pages[index].classList.add('active');

  if (index === 0 && !typed) {
    typeText();
    typed = true;
  }
}

function nextPage() {
  currentPage = (currentPage + 1) % pages.length;
  showPage(currentPage);
}

function prevPage() {
  currentPage = (currentPage - 1 + pages.length) % pages.length;
  showPage(currentPage);
}

function typeText() {
  if (typingIndex < introText.length) {
    typewriterElement.textContent += introText.charAt(typingIndex);
    typingIndex++;
    setTimeout(typeText, 100);
  }
}

window.onload = () => showPage(currentPage);