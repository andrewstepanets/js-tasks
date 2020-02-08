function scrollToAccept() {
  const terms = document.querySelector('.terms-and-conditions');
  const watch = document.querySelector('.watch');
  const button = document.querySelector('.accept');

  // intersectionObserved
  function obCallback(payload) {
    if (payload[0].intersectionRatio === 1) {
      button.disabled = false;
      // stop observing the button
      ob.unobserve(terms.lastElementChild);
    } 
    // if it is nececery to remove button, it's should add this construction
      // else {
    //   button.disabled = true;}
    // and should remove ob.unobserve
  }
  }
  const ob = new IntersectionObserver(obCallback, {
    root: terms,
    threshold: 1,
  });
  ob.observe(terms.lastElementChild);

  //   if (!terms) {
  //     return; // quit immediately there isn't that item on the page
  //   }

  //   terms.addEventListener('scroll', function(e) {
  //     console.log(e.currentTarget.scrollTop);
  //     console.log(e.currentTarget.scrollHeight);
  //   });
}

scrollToAccept();
