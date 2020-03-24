// Named Export (we can have lots of these)

export async function fetchJoke(loader) {
  // turn loader on
  loader.classList.remove('hidden');
  const response = await fetch('https://icanhazdadjoke.com', {
    // this is API response format on the site
    // https://icanhazdadjoke.com/api
    headers: {
      Accept: 'application/json',
    },
  });
  const data = await response.json();
  // turn loader off
  loader.classList.add('hidden');
  return data;
}
