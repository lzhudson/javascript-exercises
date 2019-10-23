function numberOrder(x, y, z) {
  if(y > x && z > y){
    return 'strict mode';
  } else if (z > y) {
    return 'soft mode';
  } else {
    return 'Undefined';
  }
}