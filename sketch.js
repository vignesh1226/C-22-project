
// CREATE GLOBAL VARIABLES

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

// For Engine, World, Bodies and any other that you have in mind to make your coding life easier.
// remember to create an array of boxes.

var engine,world;

var ground;
 
var boxes = [];
var gSlider;
 

 
function setup() {
    var canvas = createCanvas(400, 400);

    // Create an instance of Engine, World
     engine = Engine.create();
     world = engine.world;
 
    // A slider is already created for you here. This slider will dictate the gravity of the world
    gSlider = createSlider(0, 100, 50);
    gSlider.position(40, 365);
    gSlider.input = map(engine.world.gravity, gSlider.min, gSlider.max,0,1);
 
    // Create a ground rectangle that would hold all the boxes and add it to the world.
    
    var options = {
        isStatic: true
    }
    ground = Bodies.rectangle(200,380,400, 10, options);
    World.add(world, ground);
}
 
function mousePressed() {
    if (mouseY<350) {
        // Every time a mouse press occures create a new box.
        boxes.push(new Box(mouseX, mouseY, random(5, 50), random(5, 50)));
    }
}
 
function draw() {
    // Draw all the elements including the slider that 

    background(51);

    // This is the value of your gravity. You can optionally show it to the viewer.
    var fVal = gSlider.value();
 
    // Use a for loop to show all the boxes
    for (var i = 0; i > -1; i++) {
       boxes.display();
    }
    
}
 

// You can either create a file for the class Box or build a simple function that creates one box at a time.
// I have gone for the second option.

    // add options such as friction and restitution. Experiment with the values
    
    // create your box using the function arguments
    // x - x-coordinate
    // y - y-coordinate
    // w - width of the box
    // h - height of the box
    
    

    
    // Create a show method which will draw the box every time it is called inside the draw method.
    // remember to push and pop.
    this.show = function (){}