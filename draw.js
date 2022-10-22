let y = 100;
const birds = [];
let height = 900;
let weidth = 710;
let aligns, cohesions, separations, speedslide, maxforces;
function setup() {
  createCanvas(weidth, height);
  background(102);
  aligns = createSlider(0, 5, 1, 0.1);
  cohesions = createSlider(0, 5, 1, 0.1);
  separations = createSlider(0, 5, 1, 0.1);
  speedslide = createSlider(0, 15, 5, 1);
  maxforces = createSlider(0, 0.6, 0.2, 0.01);
  for (let i = 0; i < y; i++) {
    let x = new Bird();
    birds.push(x);
  }
}

function draw() {
  background(102);
  for (let i = 0; i < y; i++) {
    birds[i].edges();
    birds[i].flock(birds);
    birds[i].update();
    birds[i].show(birds);
  }
}

