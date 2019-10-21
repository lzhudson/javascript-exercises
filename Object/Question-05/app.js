function volumeCylinder(radius, height){
  return  (Math.PI * (radius*radius) * height).toFixed(2);
}
console.log(volumeCylinder(5,4));
