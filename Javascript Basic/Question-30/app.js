function isContentScript(string) {
  if(string.length < 6) {
    return string;
  } else if(string.substring(10, 4) === 'Script') {
    return string.substring(0, 4) + string.substring(10, string.length);
  } else {
    return string;
  }
}
console.log(isContentScript('JavaScript'));
console.log(isContentScript('JavaScriptES6'));
console.log(isContentScript('CoffeScript'));