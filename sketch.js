function setup() {
  createCanvas(650, 650); //cria cenário
  background("white"); //fundo branco
}

function draw() {

stroke ("lightgreen"); //linha verde ao redor do retângulo
fill ("lightblue"); //preencher retângulo de azul
//console.log(mouseIsPressed) //registro que o mouse está pressionado
if(mouseIsPressed) { //se mouse é pressionado...
rect (mouseX, mouseY, 20, 35); //cria um retângulo
              }

}