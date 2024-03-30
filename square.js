window.onload = () => {

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let raf;
let pop = new Audio('sounds/pop.mp3')
pop.load()
const color_wheel = [
    '#FF0000',
    '#FD1C03',
    '#FF3300',
    '#FF6600',
    '#F2EA02',
    '#FFFF00',
    '#FFFF33',
    '#E6FB04',
    '#33FF00',
    '#00FF00',
    '#00FF33',
    '#00FF66',
    '#00FFFF',
    '#099FFF',
    '#0062FF',
    '#0033FF',
    '#6E0DD0',
    '#9D00FF',
    '#9900FF',
    '#CC00FF',
    '#FF00FF',
    '#FF00CC',
    '#FF0099',
  ]




window.requestAnimationFrame(draw);


const ball = {
  x: 100,
  y: 100,
  vx: 5,
  vy: 2,
  radius: 25,
  color: next_color(color_wheel[0]),
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
  },
};

function draw() {
  ctx.fillStyle = "rgb(0 0 0 / 30%)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ball.draw();
  ball.x += ball.vx;
  ball.y += ball.vy;
  ball.vy *= 0.99;
  ball.vy += 0.25;


  if (
    ball.y + ball.vy > canvas.height - ball.radius ||
    ball.y + ball.vy < ball.radius
  ) {
    ball.vy = -ball.vy;
    ball.color = next_color(ball.color) 
    ball.radius += 1
    const temp_audio = pop.cloneNode()
    temp_audio.play()
  }
  if (
    ball.x + ball.vx > canvas.width - ball.radius ||
    ball.x + ball.vx < ball.radius
  ) {
    ball.vx = -ball.vx;
    ball.color = next_color(ball.color) 
    ball.radius += 1
    const temp_audio = pop.cloneNode()
    temp_audio.play()
  }

  raf = window.requestAnimationFrame(draw);
}


function next_color(color) {
    color = color_wheel.indexOf(color) === (color_wheel.length - 1) ? color_wheel[0] : color_wheel[color_wheel.indexOf(color) +1];
    return color
}

ball.draw();

}
