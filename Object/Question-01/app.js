function listObejct(object) {
  for (const key in object) {
    console.log(key);
  }
}
var student = {
  name : "David Rayy",
  sclass : "VI",
  rollno : 12 
};
console.log(listObejct(student));