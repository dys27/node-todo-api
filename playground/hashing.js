const {SHA256} = require('crypto-js');

var message = "I am user 2";

var hash = SHA256(message).toString();
console.log(hash);
