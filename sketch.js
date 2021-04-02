var x = 0;
var addnumY = 1;
var boughtautoinc = 0;
var autoincspeed = 2000
var autoinccost = 50
function setup() {
  createCanvas(600, 600);
   button = createButton('increment');
  button.position(150, 50);
  button.mousePressed(addnumber);
  button.size(200, 50)
  
  button = createButton('upgrade increment');
  button.position(50, 150);
  button.size(130, 20)
  button.mousePressed(upgrade); 
  button = createButton('auto increment');
  button.position(250, 150);
  button.size(130, 20)
 button.mousePressed(autoinc);
 window.setInterval(fullautoinc, autoincspeed)
}

function draw() {
  background(220);
  textSize(32);
text(x, 150, 40);
  textSize(14);
  text('makes the increment add\none more number per click\nCost: 50', 50, 190);
  text(autoinccost, 300, 260)
  textSize(14);
  text('automatically increments\nthe number once every second\nupgrading again makes it\ntwice as fast\nCost:', 250, 190);
  text('PROGRESS DOESNT SAVE.\nWHEN YOU CLOSE OR REFRESH THE TAB\nYOU LOSE ALL YOUR PROGRESS', 100, 500)
}
function addnumber() {
  x = x + addnumY;
}
function upgrade() {
  if(x > 49) {
  x = x - 50;
  addnumY = addnumY + 1;
  }
}
function autoinc() {
  if(x >= autoinccost) {
    x = x - autoinccost;
    autoinccost = autoinccost * 2
    boughtautoinc = 1
    autoincspeed = autoincspeed/2
    window.clearInterval()
    window.setInterval(fullautoinc, autoincspeed)
    }
  }
  function fullautoinc() {
  if(boughtautoinc == 1) {
    x++
  }
}

