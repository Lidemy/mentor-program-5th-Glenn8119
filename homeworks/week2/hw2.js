function capitalize(str) {
  let strArr = str.split("");
  let firstCode = strArr[0].charCodeAt(0);
  let transformedCode = 0;
  if(firstCode >= 97 && firstCode <= 122){
      transformedCode += firstCode - 32 ;
      strArr[0] = String.fromCharCode(transformedCode);
      return strArr.join("");
  } else {
      return str
  }
}

console.log(capitalize('hello'));
