
const WIDTH = 1500;
const HEIGHT = 1000;
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.width = WIDTH;
canvas.height = HEIGHT;
let analyzer;

async function getAudio(){
    const stream = await navigator.mediaDevices.getUserMedia
    ({audio: true});
    const audioCtx = new AudioContext();
    analyzer = audioCtx.createAnalyser();
    const source = audioCtx.createMediaStreamSource(stream);
    source.connect(analyzer);
}
