function deletePropertyObject(object, property) {
  let prop = property;
  console.log(object);
  delete object['prop'];
  console.log(object);
}
var student = {
  name : "David Rayy",
  sclass : "VI",
  rollno : 12 
};
console.log(deletePropertyObject(student, 'sclass'));
