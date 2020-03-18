function wait(ms = 0) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

async function destroyPopup(popup) {
  popup.classList.remove('open');
  await wait(1000);
  // remove the popup entirely
  popup.remove();
  popup = null;
}

function ask(options) {
  return new Promise(async function(resolve) {
    // First we need to create popup with all the fields in it
    const popup = document.createElement('form');
    popup.classList.add('popup');
    popup.insertAdjacentHTML(
      'afterbegin',
      `<fieldset>
            <label>${options.title}</label>
            <input type="text" name="input" />
            <button type="submit">Submit</button>
        </fieldset>`
    );

    // check if they want a cancel button
    if (options.cancel) {
      const skipButton = document.createElement('button');
      skipButton.type = 'button';
      skipButton.textContent = 'cancel';
      popup.firstElementChild.appendChild(skipButton);
      // TODO: listen for a click on that cancel button
    }
    // listen for the submit event on the inputs
    popup.addEventListener(
      'submit',
      function(e) {
        e.preventDefault();
        console.log('Submitted!');
        resolve(e.target.input.value);

        // remove it from the DOM entirely
        destroyPopup(popup);
      },
      { once: true }
    );
    // when someone does submit it, resolve the data that was in the input box

    // insert that popup into the DOM
    document.body.appendChild(popup);
    // put a very small timeout before we add the open class
    await wait(50);
    popup.classList.add('open');
  });
}

// select all buttons that have a question
async function askQuestion(e) {
  const button = e.currentTarget;
  console.log(button.dataset);

  const answer = await ask({ title: button.dataset.question });
  console.log(answer);
}
const buttons = document.querySelectorAll('[data-question]');

buttons.forEach(button => button.addEventListener('click', askQuestion));
