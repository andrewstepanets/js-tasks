import { handleClick } from './lib/handlers.js';
import { jokeButton } from './lib/elements.js';

// jokeButton.addEventListener('click', () => handleClick(loader));
// another way to pass the loader
// jokeButton.addEventListener('click', handleClick.bind(null, loader));

jokeButton.addEventListener('click', handleClick);
