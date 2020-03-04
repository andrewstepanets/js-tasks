// working with closures js

function Gallery(gallery) {
  if (!gallery) {
    throw new Error('No Gallery found!');
  }
  // select the elements we need
  const images = Array.from(gallery.querySelectorAll('img'));
  const modal = document.querySelector('.modal');
  const prevButton = modal.querySelector('.prev');
  const nextButton = modal.querySelector('.next');
  let currentImage;
  // closure function

  function openModal() {
    console.info('Opening Modal...');
    // First check if the modal is already open
    if (modal.matches('.open')) {
      console.info('Modal already open');
      // stop the function from running
    }
    modal.classList.add('open');
  }
  function closeModal() {
    modal.classList.remove('open');
    // TODO: add event listeners for clicks and keyboard
  }

  function handleClickOutside(e) {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  }

  function handleKeyUp(e) {
    if (e.key === 'Escape') closeModal();
  }

  // el = element
  function showImage(el) {
    if (!el) {
      console.info('No image to show');
    }
    // update the modal
    modal.querySelector('img').src = el.src;
    modal.querySelector('h2').textContent = el.title;
    modal.querySelector('figure p').textContent = el.dataset.description;
    currentImage = el;
    openModal();
  }

  // These are our Event Listeners!
  images.forEach(image =>
    image.addEventListener('click', event => showImage(event.currentTarget))
  );

  modal.addEventListener('click', handleClickOutside);
  window.addEventListener('keydown', handleKeyUp);
}

// use it on the page

const gallery1 = Gallery(document.querySelector('.gallery1'));
const gallery2 = Gallery(document.querySelector('.gallery2'));
