line(300, 300, 30, 200);
line(588, 10, 20, 200);
line(400, 330, 200, 20);
line(400, 400, 200, 20);
line(240, 40, 40, 40);
strokeWeight(8);
line(200, 500, 900, 400);
strokeWeight(3);
line(200, 200, 200, 55);
line(200, 600, 900, 400);
line(25, 500, 125, 400);

//triangulo
strokeWeight(2);
fill(0, 153, 76);
triangle(100, 200, 200, 200, 200, 300);
fill(255, 0, 0);
triangle(400, 600, 600, 500, 500, 500);

//bezier
bezier(200, 500, 200, 20, 30, 500, 50, 50);
bezier(60, 60, 20, 20, 20, 25, 20, 20);
bezier(200, 20, 226, 20, 20, 25, 20, 20);

//quad
fill(255, 255, 0);
quad(300, 200, 200, 290, 200, 250, 270, 200);


function draw() {
console.log("X: " + mouseX + " Y:" + mouseY);

}
