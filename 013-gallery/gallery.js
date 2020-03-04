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
      //   console.info('Modal already open');
      // stop the function from running
    }
    modal.classList.add('open');

    // Event listeners to be bound when we open the modal window
    window.addEventListener('keydown', handleKeyUp);
    nextButton.addEventListener('click', showNextImage);
    prevButton.addEventListener('click', showPrevImage);
  }
  function closeModal() {
    modal.classList.remove('open');
    // TODO: add event listeners for clicks and keyboard

    window.removeEventListener('keydown', handleKeyUp);
    nextButton.removeEventListener('click', showNextImage);
    prevButton.removeEventListener('click', showPrevImage);
  }

  function handleClickOutside(e) {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  }

  function handleKeyUp(e) {
    if (e.key === 'Escape') return closeModal();
    if (e.key === 'ArrowRight') return showNextImage();
    if (e.key === 'ArrowLeft') return showPrevImage();
  }

  function showNextImage() {
    showImage(currentImage.nextElementSibling || gallery.firstElementChild);
  }
  function showPrevImage() {
    showImage(currentImage.previousElementSibling || gallery.lastElementChild);
  }

  // el = element
  function showImage(el) {
    if (!el) {
      console.info('No image to show');
      return;
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

  // Add EventListeners to keyboard Enter
  // loop over image
  images.forEach(image =>
    // attach an eventListener for each image
    image.addEventListener('keyup', e => {
      // when that is keyup'd, check if it was enter
      if (e.key === 'Enter') {
        // if it was, show that image
        showImage(e.currentTarget);
      }
    })
  );

  modal.addEventListener('click', handleClickOutside);
}

// use it on the page

const gallery1 = Gallery(document.querySelector('.gallery1'));
const gallery2 = Gallery(document.querySelector('.gallery2'));
