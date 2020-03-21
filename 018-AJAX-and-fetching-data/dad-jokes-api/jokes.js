const jokeButton = document.querySelector('.getJoke');
const jokeHolder = document.querySelector('.joke p');

async function fetchJoke() {
  const response = await fetch('https://icanhazdadjoke.com', {
    // this is API response format on the site
    // https://icanhazdadjoke.com/api
    headers: {
      Accept: 'application/json',
    },
  });
  const data = await response.json();
  return data;
}

async function handleClick() {
  const { joke } = await fetchJoke();
  jokeHolder.textContent = joke;
}

jokeButton.addEventListener('click', handleClick);
