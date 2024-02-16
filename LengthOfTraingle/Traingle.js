let side1 = 10;
let side2 = 20;
let side3 = 30;


if (side1==side2 && side1==side3){
    console.log("This is an Equilateral triangle")
}
else if (side2==side1 || side2==side3){
    console.log("This is an isseceles triangle")
}
else{
    console.log("This is a scalene triangle");
}