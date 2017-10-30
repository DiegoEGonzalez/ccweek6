var lEyeX1 =580;
var lEyeY1 = 292;


function setup() {
    createCanvas(1280, 800);
}

function draw() {
    background(255,255,255);

 //   fill(color(255,255,255));
    //ellipse(100, 245, 30, 30);
    //ellipse(310, 245, 30, 30);
 //   angleMode(DEGREES);
  //  rotate(-12);
 //   ellipse(55,268,35,80);
  //  rotate(17);
  //  ellipse(315,230,35,80);
  //  rotate(-5);
  //  ellipse(200, 235, 187, 300);
   // noFill();
   // ellipse(160, 225, 35,35);
    // ellipse(150, 230, 30,30);
  //  line(145,245,175,245);
   // ellipse(240, 225, 35,35);
    //ellipse(255, 230, 30,30);
   // line(225,245,255,245);
    //line(180,325,230,325);

    //arc(200, 290, 40, 30, 0, 180); //nose

   // fill(color(0,0,0));
    //beginShape();
    //vertex(108,245);
    /**vertex(93,230);
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
     **/


    if(mouseY>lEyeY1 && lEyeY1<302){
        lEyeY1++;
    } else if(mouseY<lEyeY1 && lEyeY1>279){
        lEyeY1--;
    }

    if(mouseX>lEyeX1 && lEyeX1<608){
        lEyeX1++;
    } else if (mouseX<lEyeX1 && lEyeX1>549){
        lEyeX1--;
    }



    drawEye(lEyeX1+76,lEyeY1+11.5);
    drawEye(lEyeX1-76,lEyeY1-11.5);

    noStroke();
    fill(color(255,255,255));
    beginShape();
    vertex(443.1,209.8);
    vertex(713.8,237);
    vertex(713.8,360);
    vertex(438.1,331.8);


    beginContour();
    vertex(623.1,299.5);
    vertex(621.2,303.3);
    vertex(637.1,309.8);
    vertex(649.7,317.5);
    vertex(672.9,320.5);
    vertex(682.8,314.3);
    vertex(678.7,301.6);// -> (672.9,320.5)
    vertex(660.7,289.8);// -> (649.7,317.5)
    vertex(639.1,291.2);// -> (631.1,307.3)
    endContour();

    beginContour();
    vertex(545.2,293.6);
    vertex(526.6,269.9);// -> (524.2,294.2)
    vertex(490.7,264.7);// -> (485.3,287.2)
    vertex(464.2,280.1);
    vertex(469.1,279.6);
    vertex(498.1,293.2);
    vertex(506,293.8);
    endContour();

    endShape(CLOSE);

drawShadow();
drawOutline();
drawHair();

//text("mousex. "+mouseX+" mouseY. "+mouseY, 100,100);

}

function mouseMoved(){

    //goalX = mouseX;
    //goalY = mouseY


}

function drawShadowUnder(){
    fill(color(0,0,0));
    noStroke();

    //hoseholeL
    beginShape();
    vertex(547.6,386.5);
    vertex(549.8,383.2);
    vertex(559.6,384);
    vertex(571.4,397.1);
    vertex(563.2,391.4);
    vertex(554.6,394.6);
    endShape(CLOSE);
    //noseholeR
    beginShape();
    vertex(602.4,402.5);
    vertex(597.7,405.5);
    vertex(605.2,400.8);
    vertex(615.1,392.1);
    vertex(618.7,393.2);
    vertex(617,396.7);
    vertex(610.2,405);
    endShape(CLOSE);

    //noseshadow
    beginShape();
    vertex(544,358.3);
    vertex(528.7,378.6);
    vertex(539.2);
    endShape(CLOSE);

    //noseshadow2
    beginShape();
    vertex(551.8,300.8);
    vertex(516.3,330.2);
    vertex(532.1,308.4);
    vertex(544.2,296);
    endShape(CLOSE);


    //eyeshadow
    beginShape();
    vertex(469,264.7);
    vertex(475.5,258);
    vertex(469.7,257.6);
    vertex(476.9,254);
    vertex(495.4,249);
    endShape(CLOSE);

    //earshadowbottomtoTop
    beginShape();
    vertex(342,397.3);
    vertex(374.2,415);
    vertex(371,427.2);
    vertex(359.3,426.6);
    endShape(CLOSE);

    beginShape();
    vertex(341.9,372.9);
    vertex(363.2,356.3);
    vertex(360.1,345.5);
    vertex(369.4,333.2);
    vertex(373.5,348.2);
    vertex(370.2,358.4);
    vertex(372.8,366.4);
    vertex(375.4,381.8);
    endShape(CLOSE);

    beginShape();
    vertex(335.9,370.5);
    vertex(333,343.3);
    vertex(338.6,307.4);
    vertex(349.4,295.1);
    vertex(361.8,316.7);
    vertex(342,347.7);
    endShape(CLOSE);
}
function drawShadowLow(){
    //shirtshadowside
    noStroke();
    fill(color(77,77,77));
    beginShape();
    vertex(0,666.1);
    vertex(34.9,628.2);
    vertex(54.4,621.4);
    vertex(96.6,593.3);
    vertex(138.1,573.5);
    vertex(176.8,547.5);
    vertex(374.3,474.3);
    vertex(519.7,750);
    vertex(-39.9,736.6);
    vertex(-20.6,670.8);
    endShape(CLOSE);
}
function drawShadowHigh(){
    noStroke();
    fill(color(140,140,140));
    //tshirtshadow 1...3
    beginShape();
    vertex(686.5,629.1);
    vertex(713.1,717.6);
    vertex(698.2,746.9);
    vertex(690.6,664.4);
    vertex(679.8,673.3);
    endShape(CLOSE);

    beginShape();
    vertex(733.6,667.2);
    vertex(750,619.6);
    vertex(737.1,752.2);
    endShape(CLOSE);

    beginShape();
    vertex(772.1,670.8);
    vertex(772.8,730.2);
    vertex(761.3,736.6);
    endShape(CLOSE);
}
function drawShadowMid(){
    //faceshadow\
    noStroke();
    fill(color(89,89,89));
    beginShape();
    vertex(375,320.3);
    vertex(402.4,214.6);
    vertex(438.2,147);
    vertex(579.6,232.2);
    vertex(587.3,284.4);
    vertex(580.1,339.7);
    vertex(567.5,374.4);
    vertex(579.7,409.8);
    vertex(567.9,424.1);
    vertex(567.8,441.6);
    vertex(583.2,438.5);
    vertex(585.5,418.9);
    vertex(594,450.7);
    vertex(585.2,450.2);
    vertex(562.2,455.1);
    vertex(558.3,469.1);
    vertex(563.5,489.3);
    vertex(584.9,516.2);
    vertex(547.7,508.8);
    vertex(523.4,544.4);
    vertex(553.4,609);
    vertex(511.4,643.8);
    vertex(522.2,656.1);
    vertex(516.7,700.2);
    vertex(519.7,750);
    vertex(412.8,721.1);
    vertex(354.3,633.1);
    vertex(336.4,552);
    vertex(345.8,500.2);
    vertex(372.7,480.8);
    vertex(380.4,432);
    vertex(372.4,437.3);
    vertex(360.9,436.2);
    vertex(346.4,423);
    vertex(338.5,403.2);
    vertex(331.9,379.5);
    vertex(330.8,357.3);
    vertex(329.1,343.3);
    vertex(333.3,321.4);
    vertex(331.8,307);
    vertex(347.8,288.4);

    beginContour();
    vertex(516.4,250.9);
    vertex(506.6,263);
    vertex(528.7,267.4);
    vertex(549,293.2);
    vertex(551,288.7);
    vertex(535.3,260.4);
    vertex(518.5,248.4);
    vertex(500.8,247.7);
    endContour();

    beginContour();
    vertex(545.2,293.6);
    vertex(526.6,269.9);
    vertex(490.7,264.7);
    vertex(464.2,280.1);
    vertex(469.1,279.6);
    vertex(498.1,293.2);
    vertex(506,293.8);
    vertex(504.5,310);
    vertex(528.3,302.6);
    endContour();

    endShape(CLOSE);

    //hairShadow
    beginShape();
    vertex(621.8,298.9);
    vertex(612.8,307.1);
    vertex(617.8,262.2);
    vertex(641.6,235.4);
    vertex(632,210.4);
    vertex(609.9,226.9);
    vertex(626.5,199.8);
    vertex(618.8,154);
    vertex(624.6,105.3);
    vertex(597.2,133.7);
    vertex(592.8,121.2);
    vertex(572.9,135.1);
    vertex(579.1,112.8);
    vertex(565.8,120);
    vertex(532.1,81.3);
    vertex(601.6,90.8);
    vertex(648.2,75.3);
    vertex(707.5,143.8);
    vertex(670.1,222.1);
    vertex(654.6,222.5);
    vertex(642.5,172.8);
    vertex(639.3,201.2);
    vertex(649.6,243.3);
    vertex(679.1,228.8);
    vertex(713.8,257.3);
    vertex(684.3,285.6);
    vertex(694.5,299.4);
    vertex(696.8,310.6);
    vertex(691.9,303.6);
    vertex(682.5,288.2);
    vertex(674,283);
    vertex(656.6,278.5);
    vertex(667,290);
    vertex(661.4,287.2);
    vertex(639.4,289.4);
    endShape(CLOSE);




}

function drawShadow(){
    drawShadowLow();
    drawShadowHigh();
    drawShadowMid();
    drawShadowUnder();
}

function drawOutline(){
    noFill();


    //outlines....
    stroke(0,0,0);

    //tshirt start
    beginShape();
    vertex(192.5,556.8);
    vertex(157.5,586.8);
    vertex(128.7,594.6);
    vertex(75.2,622.9);
    vertex(54.5,633.7);
    vertex(27.5,646.8);
    endShape();

    beginShape();
    vertex(349.1,695.7);
    vertex(311.7,608.7);
    vertex(301.2,558.6);
    vertex(308.5,513.3);
    vertex(282.3,520.9);
    endShape();

    beginShape();
    vertex(318.3,602.8);
    vertex(310.3,568.9);
    vertex(312.2,531.1);
    vertex(326.9,499.6);
    endShape();

    beginShape();
    vertex(582.1,729.9);
    vertex(597.4,689.5);
    vertex(620,635.7);
    vertex(626.3,582.3);
    endShape();

    beginShape();
    vertex(630.4,683.8);
    vertex(639.6,635.7);
    vertex(641.1,578.9);
    endShape();

    beginShape();
    vertex(848.7,720.9);
    vertex(826,646.4);
    vertex(807.7,632);
    vertex(741.7,579.2);
    vertex(671.9,535.8);
    endShape();
    //tshirt end

    //chin and ear

    beginShape();
    vertex(712.5,417.7);
    vertex(715,437.1);
    vertex(712.4,468.3);
    vertex(697.7,470.9);
    vertex(715.8,406.1);
    vertex(697.7,470.9);
    vertex(689.8,502.5);
    vertex(660.3,557.9);
    vertex(600.8,600.5);
    vertex(571.9,609);
    vertex(504.2,599.6)
    vertex(451.3,554.1);
    vertex(401.4,504);
    endShape();

    //lip
    beginShape();
    vertex(620.6,484.2);
    vertex(596.2,472.8);
    vertex(574.7,470.8);
    vertex(559.4,468.3);
    vertex(535.5,466.4);
    vertex(511.9,471.2);
    endShape();

    //nose...
    //l nose
    beginShape();
    vertex(552,406.1);
    vertex(536.3,403.5);
    vertex(528.8,397.3);
    vertex(528.6,389.1);
    endShape();

    //r nose
    beginShape();
    vertex(628.7,396.9);
    vertex(615,416.4);
    vertex(603.6,413.9);
    endShape();

    //line
    beginShape();
    vertex(620.9,382.2);
    vertex(610.3,289.8);
    vertex(613.3,257.7);
    endShape();

    //eyes...

    //l under
    beginShape();
    vertex(513,296.6);
    vertex(500.8,296.7);
    vertex(489.8,292.4);
    endShape();

    //r under
    beginShape();
    vertex(688.2,319.7);
    vertex(681.6,318.9);
    vertex(673.1,322.6);
    vertex(659.7,320.2);
    endShape();

    //r lid
    beginShape();
    vertex(696.2,316.8);
    vertex(683.5,299.4);
    vertex(661.2,287.2);
    vertex(639,289.5);
    vertex(623.1,299.5);
    vertex(639.1,291.2);
    vertex(660.7,289.8);
    vertex(678.7,301.6);
    vertex(682.8,314.3);
    vertex(672.9,320.5);
    vertex(649.7,317.5);
    vertex(637.1,309.8);
    vertex(621.2,303.3);
    endShape();
}

function drawHair(){
    //hair black fill

    //noStroke();
    fill(color(0,0,0));
    beginShape();
    vertex(334.8,305.1);
    vertex(327.4,280.6);
    vertex(324,217.6);
    vertex(397.9,77.5);
    vertex(439.8,60.5);
    vertex(465.3,34.1);
    vertex(487.4,7.9);
    vertex(582,-6.3);
    vertex(613.4,28.7);
    vertex(675.9,28.6);
    vertex(758.4,78.8);
    vertex(785.7,143.3);
    vertex(807.6,234.6);
    vertex(793,291.4);
    vertex(794.8,307);
    vertex(767.5,342.1);
    vertex(755.1,373.9);
    vertex(714.3,410);
    vertex(720.9,384);
    vertex(720.2,257.8);
    vertex(697.8,276.9);
    vertex(700.3,258.6);
    vertex(679.9,245.3);
    vertex(669.9,249.4);
    vertex(669.3,197.7);
    vertex(628,226.7);
    vertex(668,192);
    vertex(662.4,142);
    vertex(655.5,123.9);
    vertex(654.4,111.7);
    vertex(647.8,107.2);
    vertex(649.7,157.4);
    vertex(656.4,197.1);
    vertex(646.6,156.6);
    vertex(642.8,103.8);
    vertex(627,92.9);
    vertex(594.8,96.9);
    vertex(544.8,85.7);
    vertex(534.2,94.7);
    vertex(545.2,102.3);
    vertex(536.7,103.7);
    vertex(541.6,107.3);
    vertex(532,108);
    vertex(550.4,114.9);
    vertex(536.4,114.9);
    vertex(546.1,117.9);
    vertex(536.2,123.1);
    vertex(544.5,128.7);
    vertex(534.4,129);
    vertex(538.7,132.5);
    vertex(527.4,136.6);
    vertex(501.1,138.9);
    vertex(485,136.6);
    vertex(476.8,143.6);
    vertex(487.7,152.4);
    vertex(506,159.1);
    vertex(494.6,159.5);
    vertex(523.3,169.6);
    vertex(540.4,170.8);
    vertex(527.6,175.2);
    vertex(507.9,174.4);
    vertex(491.8,169.6);
    vertex(501.2,181);
    vertex(526.5,180.1);
    vertex(522.3,185.1);
    vertex(530.4,184);
    vertex(520,193.5);
    vertex(505.8,193.9);
    vertex(507.3,200.2);
    vertex(486.1,188.3);
    vertex(460.2,166.7);
    vertex(468,186.3);
    vertex(495.7,196.9);
    vertex(466.1,191.3);
    vertex(471,195.6);
    vertex(462.7,192.7);
    vertex(448.1,172);
    vertex(452.4,193.5);
    vertex(460.9,201.2);
    vertex(484.6,207.6);
    vertex(461.7,204.9);
    vertex(467.1,214.1);
    vertex(434.5,179.7);
    vertex(410.1,213.3);
    vertex(400.9,269.1);
    vertex(383.6,298.6);
    vertex(378,333.1);
    vertex(348.4,292.9);

    beginContour(); //hair highlights start
    vertex(344.9,259.5);
    vertex(355.4,251.7);
    vertex(368.5,298.3);
    vertex(374.4,260);
    vertex(385.7,262.7);
    vertex(395.8,206.8);
    vertex(386.9,219.1);
    vertex(381.1,173.6);
    vertex(373.1,240.6);
    vertex(364.4,200.4);
    vertex(359.4,208.5);
    vertex(353,189.3);
    endContour(CLOSE);

    beginContour();
    vertex(472.7,66);
    vertex(453.2,74.4);
    vertex(448.1,134.8);
    vertex(468,80.4);
    vertex(486,91.1);
    vertex(505.5,66.6);
    vertex(573.4,62.6);
    vertex(550.4,52.3);
    vertex(532.6,48.1);
    vertex(547.2,35.3);
    vertex(525.5,31);
    vertex(553.1,11.1);
    vertex(508.1,18.4);
    vertex(482.4,39.4);
    endContour(CLOSE);

    beginContour();
    vertex(556.1,72.7);
    vertex(612.9,80.8);
    vertex(600.3,70.4);
    vertex(624.6,68.3);
    vertex(607.9,63.6);
    vertex(625,58.6);
    vertex(618.3,54.6);
    vertex(650.1,53.3);
    vertex(587.7,46.9);
    vertex(589,52.1);
    vertex(581.7,55.2);
    vertex(589.6,57.8);
    endContour(CLOSE);

    beginContour();
    vertex(679,126.2);
    vertex(679.6,147.7);
    vertex(678.3,178.1);
    vertex(693.3,155.9);
    vertex(688.5,138);
    endContour(CLOSE);

    beginContour();
    vertex(700.1,168.3);
    vertex(690.5,191.4);
    vertex(693.3,209.4);
    endContour(CLOSE);

    beginContour();
    vertex(715.7,172.8);
    vertex(707.5,209.4);
    vertex(712.7,248.1);
    vertex(720.1,219.7);
    endContour(CLOSE);

    beginContour();
    vertex(717.1,106.6);
    vertex(736.6,182.8);
    vertex(741.7,243.1);
    vertex(746.5,172.6);
    vertex(751.8,180.6);
    vertex(748.3,151.7);
    endContour(CLOSE);


    beginContour();
    vertex(767.5,148.7);
    vertex(776.8,191.1);
    vertex(770,253.8);
    vertex(736.5,301.4);
    vertex(755.3,287);
    vertex(777.4,257.9);
    vertex(767.2,313.1);
    vertex(762.1,299.1);
    vertex(751.6,319.2);
    vertex(737.7,345);
    vertex(762.3,318);
    vertex(766.5,330.2);
    vertex(782.7,301.9);
    vertex(782.7,284.5);
    vertex(801.6,228.1);
    vertex(796.3,216.4);
    vertex(782.4,246.5);
    vertex(790.8,197.9);
    vertex(787.1,166.1);
    vertex(776.8,170.5);
    vertex(765.8,126.2);
    vertex(760.7,168.7);
    endContour(CLOSE); //hair highlights end


    endShape(CLOSE); //hair end

    //eyebrow L
    beginShape();
    vertex(443.1,240);
    vertex(449.4,226.5);
    vertex(473.8,209.8);
    vertex(514.7,211.4);
    vertex(550.6,222.8);
    vertex(568.2,252.3);
    vertex(506.8,227.7);
    vertex(464.1,222.6);
    endShape(CLOSE);

    //eyebrow R
    beginShape();
    vertex(650.8,239.2);
    vertex(703.7,239.9);
    vertex(722.8,268.3);
    vertex(716.2,280.8);
    vertex(713.4,273.2);
    vertex(686.7,254.7);
    vertex(663.7,260.8);
    vertex(627.1,265);
    endShape(CLOSE);
}

function drawEye(x, y){

    fill(color(51,51,51));
    ellipse(x,y,27,27);
    stroke(0,0,0);
    ellipse(x,y,14,14);
    noStroke();
    fill(color(0,0,0));
    ellipse(x,y,9,9);

    //highlight
    fill(color(255,255,255));
    ellipse(x+4,y-4,8,8);
}