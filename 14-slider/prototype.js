function Slider(slider) {
  if (!(slider instanceof Element)) {
    throw new Error('No slider passed in');
  }

  // create some variables for working with slider
  let current;
  let prev;
  let next;
  // select elements needed for the slider
  const slides = slider.querySelectorAll('.slides');
  const prevButton = document.querySelector('.goToPrev');
  const nextButton = document.querySelector('.goToNext');

  function startSlider() {
    current = slider.querySelector('.current');
  }
}

const mySlider = Slider(document.querySelector('.slider'));
const dogSlider = Slider(document.querySelector('.dog-slider'));
