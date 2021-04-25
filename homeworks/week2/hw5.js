function join(arr, concatStr) {
    let joinedStr = "";
    for (let i = 0; i < arr.length - 1; i++) {
        joinedStr += (arr[i] + concatStr)
    }
    return joinedStr + arr[arr.length - 1]
}

function repeat(str, times) {
    let newStr = "";
    for(let i=1 ; i<=times ;i++){
        newStr += str
    }
    return newStr;
}

console.log(join(['a'], '!'));
console.log(repeat('a', 5));
