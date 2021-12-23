var backgroundImg; 
var shuttleImg; 


function preLoad(){
    backgroundImg = loadImage("download.png")
    shuttleImg = loadImage("imgbin-cartoon-space-shuttle-astronaut-uUTWyNWyskqBH0uUWtKxFKfwD.jpg")
}

function setup(){
    createCanvas(windowWidth,windowHeight);
    shuttle = createSprite(30,60)

}

function draw() {
  background(backgroundImage);
  suhttle.addImage(shuttle,shuttleImg);
}