//draw a spinning teapot
var hand;
var heart;

var baDisplacement = 0;
var beating = false;
var baDelta = 1;


var ba = 0;
var baCounter =0;
var bump = 0;
var bumpCounter = 0;

var serial;
var portName = '/dev/cu.usbmodem1461';
var inData = 0;

var started = false;
var finished = false;
//var canRepeat = true;


function setup(){
    serial = new p5.SerialPort();
    serial.on('list', printList);
    serial.on('connected', serverConnected); // callback for connecting to the server
    serial.on('open', portOpen);        // callback for the port opening
    serial.on('data', serialEvent);     // callback for when new data arrives
    serial.on('error', serialError);    // callback for errors
    serial.on('close', portClose);      // callback for the port closing
 
    serial.list();                      // list the serial ports
    serial.open(portName);              // open a serial port
    
    //basic square canvas
    createCanvas(1000, 1000, WEBGL);

    //loading models...
    hand = loadModel('Human Heart.obj');
    heart = loadModel('cute.obj');
}

function serverConnected() {
  print('connected to server./n');
}
 
function portOpen() {
  print('the serial port opened./n')
}
 
function serialEvent() {
 inData = Number(serial.read());
}
 
function serialError(err) {
  print('Something went wrong with the serial port. /n' + err);
}
 
function portClose() {
  print('The serial port closed./n');
}

function movement(){
    if(started == true && inData == 0){
        canRepeat = true;
    }
    
    if(inData == 1 && started == false && canRepeat){
        beating = true;
       started = true;
        canRepeat = false;
    }
    
    if(beating){
        baDisplacement+=baDelta;
    }
    if(baDisplacement>10){
        baDelta=-1;
    } else if (baDisplacement<0){
        baDisplacement=0;
        beating=false;
        baCounter=0;
        baDelta=1;
        started = false;
    }
   
    baCounter++;
    bumpCounter++;
}

function printList(portList) {
 // portList is an array of serial port names
 for (var i = 0; i < portList.length; i++) {
 // Display the list the console:
 print(i + " " + portList[i]+"/n");
 }
}

function draw(){
    
    
    
    movement();
    
    background(color(255,145,130));    
  print(inData+"/n");
    ambientLight(155,0,0,1);
    directionalLight(255, 255, 255, 0, -3, 0);
    directionalLight(140, 60, 40, 0, 25, 0);
    
    scale(15);
    ambientMaterial(250);
    rotateX(frameCount * 0.01);
    model(hand);
    scale(0.333);
    rotateY(frameCount * 0.01);
   
    drawHearts();
    
    rotateY(-frameCount * 0.01);
    scale(3);
     rotateX(-frameCount * 0.01);
    scale(1/15);
    drawCircle();
    
   
     
}

function drawCircle(){
    
    noFill();
    //stroke(255);
    translate(0,0,-1000);
    fill(color(255,255,255));
    ellipse(0,0,1000,1000);
}

function drawHearts(){
    // hearts...
    for(var y=1;y<=2;y++){
    for(var x = 1.0; x <= 10.0; x++) {
        var calculateRotation = (TWO_PI/10.0);
        var variation = 0;
        rotateY(calculateRotation);
        translate((30*y)+variation+baDisplacement,0,0);
        //sphere(0.5, 10, 10);
        model(heart);
        translate(-(30*y)-variation-baDisplacement,0,0);
    }
    }
}