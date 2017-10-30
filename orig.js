


function setup() {
    createCanvas(1280, 800);
}

function draw() {
    background(255, 255, 255);

       fill(color(255,255,255));
    ellipse(100, 245, 30, 30);
    ellipse(310, 245, 30, 30);
       angleMode(DEGREES);
      rotate(-12);
       ellipse(55,268,35,80);
      rotate(17);
      ellipse(315,230,35,80);
      rotate(-5);
      ellipse(200, 235, 187, 300);
     noFill();
     ellipse(160, 225, 35,35);
     ellipse(150, 230, 30,30);
      line(145,245,175,245);
     ellipse(240, 225, 35,35);
    ellipse(255, 230, 30,30);
     line(225,245,255,245);
    line(180,325,230,325);

    arc(200, 290, 40, 30, 0, 180); //nose

     fill(color(0,0,0));
    beginShape();
    vertex(108,245);
    vertex(93,230);
     vertex(80,150);
     vertex(130,70);
     vertex(180,60);
     vertex(297,87);
     vertex(336,175);
     vertex(290,265);
     vertex(288,220);
     vertex(270,198);
     vertex(255,135);
     vertex(194,98);
     vertex(164,171);
     vertex(112,190);
     endShape(CLOSE);


}