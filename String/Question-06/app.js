function protectEmail(email) {
  let emailString = email.slice(6, email.indexOf('@'));
  let newEmail = email.replace(emailString, '...');
  return newEmail;
}
console.log(protectEmail('hudsonholanda55@gmail.com'));