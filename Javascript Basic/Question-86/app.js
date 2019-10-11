function identifyAngle(angle) {
  if(angle > 0 && angle < 90) {
    return 'Acute Angle';
  } else if(angle === 90) {
    return 'Degree Angle';
  } else if(angle > 90 && angle < 180) {
    return 'Obtuse Angle'
  } else if(angle === 180) {
    return 'Degree Angle';
  }
}
console.log(identifyAngle(90));
console.log(identifyAngle(75));
console.log(identifyAngle(125));
console.log(identifyAngle(180));