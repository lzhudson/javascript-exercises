let side1 = 5;
let side2 = 6;
let side3 = 7;
let semiPerimeter = (side1 + side2 + side3) / 2;
let area = Math.round(Math.sqrt(semiPerimeter * (semiPerimeter - side1) * (semiPerimeter - side2) * (semiPerimeter - side3)));

console.log(area);

