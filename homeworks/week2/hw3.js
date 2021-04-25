function reverse(str) {
  let strArr = str.split("");
  let reverseArr = []
  for(let i=1 ; i<=strArr.length ; i++){
      reverseArr.push(strArr[strArr.length-i])
  }
  console.log(reverseArr.join(""))
}

reverse('hello');
