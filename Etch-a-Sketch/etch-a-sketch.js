//  Select the elements on the page - canvas, shake button
// ctx == context common short-name for context
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakeButton = document.querySelector('.shake');
const MOVE_AMOUNT = 10; // when I use capitalize it ia mean that this is true constant
// Setup our canvas for drawing

// random Position for starting drawing

// make a variable  called height and width from the same properties on our canvas
// it is analog const width = canvas.width => const {width} = canvas;

const { width, height } = canvas;

// create random x and y string points on the canvas
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = MOVE_AMOUNT;

let hue = 0;
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
ctx.beginPath(); // start the drawing
ctx.moveTo(x, y); // start point
ctx.lineTo(x, y);
ctx.stroke();

// write a draw function
function draw({ key }) {
  // increment the hue
  hue += 1;
  // update stroke style
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  //   ctx.strokeStyle = `hsl(${Math.random() * 360}, 100%, 50%)`;
  console.log(key);
  ctx.beginPath(); // start the path
  ctx.moveTo(x, y);
  // move our x and y values  depending  on what the user did
  switch (key) {
    case 'ArrowUp':
      y -= MOVE_AMOUNT;
      break;
    case 'ArrowDown':
      y += MOVE_AMOUNT;
      break;
    case 'ArrowLeft':
      x -= MOVE_AMOUNT;
      break;
    case 'ArrowRight':
      x += MOVE_AMOUNT;
      break;
    default:
      break;
  }

  ctx.lineTo(x, y);
  ctx.stroke();
}
// write a handle for the keys

function handleKey(e) {
  if (e.key.includes('Arrow')) {
    e.preventDefault();
    draw({ key: e.key });
  }
}

// clear shake function

function clearCanvas() {
  canvas.classList.add('shake');
  // clear canvas
  ctx.clearRect(0, 0, width, height);
  // listen end of animation. First parameter animationend
  canvas.addEventListener(
    'animationend',
    function() {
      canvas.classList.remove('shake');
    },
    { once: true } // once: true mean that addEventListener run only one time and unbind
  );
}

// listen arrow keys

window.addEventListener('keydown', handleKey);
shakeButton.addEventListener('click', clearCanvas);
