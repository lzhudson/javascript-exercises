function isContentScript(string) {
  if(string.includes('Script')) {
    return string.replace('Script','');
  } else {
    return string;
  }
  
}
console.log(isContentScript('JavaScript'));
console.log(isContentScript('JavaScriptES6'));