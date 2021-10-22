var canvas
var bola
var database
var posicaoBolinha
var position

function setup(){
    database = firebase.database();
    canvas = createCanvas(1000,1000);
    bola = createSprite(500,500,10,10);
    posicaoBolinha = database.ref('bola')
    posicaoBolinha.on("value",readPosition,showError);
}

function draw(){
    background(255);
    drawSprites();
}

function keyPressed(){
    if(keyCode === 37){
        bola.x = bola.x-6;
    }
    if(keyCode === 39){
        bola.x = bola.x+6;
    }
    if(keyCode === 38){
        bola.y = bola.y-6;
    }
    if(keyCode === 40){
        bola.y = bola.y+6;
    }
}

function readPosition(data){
    position = data.val()
    console.log(position);
}

function showError(){

}