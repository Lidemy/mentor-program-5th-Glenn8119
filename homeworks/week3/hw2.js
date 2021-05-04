const readline = require('readline')

const lines = []
const rl = readline.createInterface({
  input: process.stdin
})

rl.on('line', (line) => {
  lines.push(line)
})

rl.on('close', () => {
  solve(lines)
})

function solve(lines) {
  const start = Number(lines[0].split(' ')[0])
  const end = Number(lines[0].split(' ')[1])

  for (let i = start; i <= end; i++) {
    if (isValid(i)) console.log(i)
  }

  function isValid(n) {
    const arr = String(n).split('')

    let sum = 0
    for (let i = 0; i < arr.length; i++) {
      sum += Math.pow(Number(arr[i]), arr.length)
    }
    return n === sum
  }
}
