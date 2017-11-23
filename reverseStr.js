//Test branch
function reverseString(str) {
  strArr = [];
  for (var i =str.length; i>=0; i--) {
    strArr.push(str[i]);
  }
  var str = strArr.join("");
  return str;
}

reverseString("hello");
